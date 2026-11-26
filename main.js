const copyButton = document.querySelector("#copy-contract");
const status = document.querySelector("#copy-status");

copyButton.addEventListener("click", async () => {
  const value = document.querySelector("#contract-value").textContent.trim();
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = "Copied TBD. There is still no contract.";
  } catch (err) {
    status.textContent = "Clipboard blocked. The contract is still TBD.";
  }
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
});
