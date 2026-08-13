Playwright Dialog — Simple Notes
page.on() = watch for something 👀
page.on('dialog', ...) = watch for a popup.
dialog = object (information about the popup) given by Playwright.
We write page.on('dialog') before clicking the button.
Why? → The button creates the popup, so we want the watcher ready first.
dialog.message() = gets the popup text.
dialog.type() = tells the popup type (alert, confirm, prompt).
dialog.accept() = clicks OK.
dialog.dismiss() = clicks Cancel.
dialog.defaultValue() = gets the default value in a prompt.
Easy memory 🧠

Watch → Click → Popup → Handle

page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

await page.locator('.btn-primary').click();

reasons:
The button click triggers (creates) the dialog.
A browser dialog blocks (stops) the page until it is handled.
If you register the listener after the click, Playwright may be stuck waiting for the dialog to be handled.
So we register the listener before the click.
🧠 Watch first → Click → Popup appears → Handle popup.

Button completes its action after popup finsih its action thts why we call before button click.
Think of click() as waiting for the button action to finish.

await button.click();
🖱️ Click happens.
🔔 Popup appears.
⛔ Popup blocks (stops) the page.
click() waits until the popup is handled.
✅ Then click() finishes.
▶️ Only then Playwright goes to the next line.

That's why:

page.on('dialog', ...); // 👀 First
await button.click();   // 🖱️ Then

Easy rule:
👉 Popup is part of what the click triggers, so handle the popup before waiting for the click to finish.