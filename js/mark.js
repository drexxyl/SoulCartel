// ===============================
// MARK SYSTEM — SOUL CARTEL
// ===============================

const MARK_KEY = "THE_MARK";
const REGISTRY_KEY = "MARK_REGISTRY";
const BURNED_KEY = "BURNED_MARKS";
const MARK_TIME_KEY = "MARK_TIME";

// Generate dark themed mark
function generateMark() {
  const words = ["VOID", "ASH", "SIN", "CROWN", "BLOOD", "OBSIDIAN"];
  const hex = Math.random().toString(16).substr(2, 4).toUpperCase();
  const word = words[Math.floor(Math.random() * words.length)];
  return `MK-${word}-${hex}`;
}

// Load registry + burned list
let registry = JSON.parse(localStorage.getItem(REGISTRY_KEY)) || [];
let burned = JSON.parse(localStorage.getItem(BURNED_KEY)) || [];

// If user was burned → erase and re-mark
if (localStorage.getItem(MARK_KEY) && burned.includes(localStorage.getItem(MARK_KEY))) {
  localStorage.removeItem(MARK_KEY);
  localStorage.removeItem(MARK_TIME_KEY);
  localStorage.removeItem("MARK_NEW");
  location.reload();
}

// Assign mark if first visit
let isNewMark = false;

if (!localStorage.getItem(MARK_KEY)) {
  const mark = generateMark();
  localStorage.setItem(MARK_KEY, mark);
  localStorage.setItem(MARK_TIME_KEY, Date.now());
  localStorage.setItem("MARK_NEW", "true");
  isNewMark = true;

  registry.push(mark);
  localStorage.setItem(REGISTRY_KEY, JSON.stringify(registry));
}

// ===============================
// SHADOW MODE
// ===============================
const shadow = document.getElementById("shadowMode");

if (shadow && localStorage.getItem("shadow_mode") === "true") {
  shadow.classList.add("active");
  document.body.style.overflow = "hidden";
}
