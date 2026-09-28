const revealButton = document.querySelector(".reveal-card summary");
const revealCard = document.querySelector(".reveal-card");

function throwFlower(button) {
  const flower = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const drift = Math.round(Math.random() * 140 - 70);
  const symbols = ["✿", "❀", "✽", "•"];

  flower.className = "flower-burst";
  flower.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  flower.style.left = `${rect.left + rect.width / 2}px`;
  flower.style.top = `${rect.top + rect.height / 2}px`;
  flower.style.setProperty("--drift", `${drift}px`);

  document.body.append(flower);
  flower.addEventListener("animationend", () => flower.remove());
}

if (revealButton && revealCard) {
  revealButton.addEventListener("click", () => {
    if (revealCard.open) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    for (let i = 0; i < 16; i += 1) {
      window.setTimeout(() => throwFlower(revealButton), i * 28);
    }
  });
}
