"""Consent regression: block all Google requests, verify only local embed state."""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for width, height in [(1280, 1800), (393, 706)]:
            context = await browser.new_context(viewport={"width": width, "height": height})
            page = await context.new_page()
            google_requests = []
            page.on("request", lambda request: google_requests.append(request.url) if "google" in request.url else None)
            await context.route("https://**/*", lambda route: route.abort() if "google" in route.request.url else route.continue_())
            await page.goto("http://localhost:8080", wait_until="networkidle")
            consent = page.get_by_role("button", name="Google-cookies accepteren en kaart tonen")
            await consent.scroll_into_view_if_needed()
            await page.locator("#contact").screenshot(path=f"/tmp/browser/maps-consent/before-{width}.png")
            assert await page.locator('iframe[title="Locatie Brabantse Jongens Automotive"]').count() == 0, "Map must not exist before permission"
            assert google_requests == [], "No Google requests may happen before consent"
            await consent.click()
            frame = page.locator('iframe[title="Locatie Brabantse Jongens Automotive"]')
            await frame.wait_for(state="attached")
            assert "Dommelstraat" in await frame.get_attribute("src"), "Consent must attach the configured map"
            await page.get_by_role("button", name="Google-toestemming intrekken").click()
            assert await frame.count() == 0, "Revoking permission must remove the embed"
            await consent.click()
            await page.reload(wait_until="networkidle")
            assert await frame.count() == 0, "Reload must require fresh permission"
            assert await page.evaluate("document.documentElement.scrollWidth <= window.innerWidth"), "Page must fit the viewport"
            print(f"PASS {width}px: no map before consent, embed added after consent (Google blocked), removed on revoke, reset on reload")
            await context.close()
        await browser.close()

asyncio.run(main())
