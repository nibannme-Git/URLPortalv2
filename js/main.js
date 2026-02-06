// --- Boot Screen Animation ---
let dots = 0;
const bootText = document.getElementById("boot-text");

const dotTimer = setInterval(() => {
  dots = (dots + 1) % 4;
  bootText.textContent = "Press any key to Boot from CD" + ".".repeat(dots);
}, 1000);

// --- Switch to GRUB Screen ---
document.addEventListener("keydown", () => {
  clearInterval(dotTimer);
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("grub-screen").style.display = "flex";
});

// --- GRUB Menu Logic ---
const urls = [
  "https://scratch.mit.edu/users/nibannme/",
  "https://scratch.mit.edu/users/aaaaaaaaaaamuuaarere/",
  "http://16.176.171.163",
  "https://filesyutoku.online",
  "https://aaaaaamuuaarere.blog/"
];

let index = 0;
const items = document.querySelectorAll("#menu li");
items[index].classList.add("selected");

document.addEventListener("keydown", (e) => {
  if (document.getElementById("grub-screen").style.display !== "flex") return;

  if (e.key === "ArrowDown") {
    items[index].classList.remove("selected");
    index = (index + 1) % items.length;
    items[index].classList.add("selected");
  }

  if (e.key === "ArrowUp") {
    items[index].classList.remove("selected");
    index = (index - 1 + items.length) % items.length;
    items[index].classList.add("selected");
  }

  if (e.key === "Enter") {
    window.open(urls[index], "_blank");
  }
});
