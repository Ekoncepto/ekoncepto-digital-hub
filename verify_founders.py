
from playwright.sync_api import sync_playwright, expect

def verify_founders_carousel(page):
    """
    Navigates to the local development server and takes a screenshot
    of the founders section to verify the new carousel implementation.
    """
    # Navigate to the local server
    page.goto("http://localhost:4321/")

    # Wait for the main content to load to ensure the page is ready
    main_selector = "main"
    expect(page.locator(main_selector)).to_be_visible(timeout=30000)

    # Locate the founders section specifically using the data-testid
    founders_section_selector = '[data-testid="founders-section"]'
    founders_section = page.locator(founders_section_selector)
    expect(founders_section).to_be_visible(timeout=10000)

    # Take a screenshot of just the founders section
    screenshot_path = "/app/verification/founders_carousel.png"
    founders_section.screenshot(path=screenshot_path)
    print(f"Screenshot saved to {screenshot_path}")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_founders_carousel(page)
        finally:
            browser.close()
