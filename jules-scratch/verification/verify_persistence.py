from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5173/test")
        page.wait_for_load_state("networkidle")

        # Take a screenshot for debugging to see the initial state
        page.screenshot(path="jules-scratch/verification/debug_initial_page.png")

        # Enter a name and start the test
        page.get_by_placeholder("Enter your name").fill("Test User")
        page.get_by_role("button", name="Start Test").click()

        # Answer a few questions
        page.get_by_role("button", name="Agree").click()
        page.get_by_role("button", name="Strongly Agree").click()
        page.get_by_role("button", name="Neutral").click()

        # Reload the page
        page.reload()

        # Wait for the page to load completely
        page.wait_for_load_state("networkidle")

        # Verify that the progress has been restored
        # We expect to be on a question other than the first one.
        # The first question has "Statement 1/50"
        expect(page.get_by_text("Statement 1/50")).not_to_be_visible()

        page.screenshot(path="jules-scratch/verification/verification.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
