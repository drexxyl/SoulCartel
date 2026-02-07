function generateMark() {
  const words = ["VOID", "ASH", "SIN", "CROWN", "BLOOD", "OBSIDIAN"];
  const hex = Math.random().toString(16).substr(2, 4).toUpperCase();
  const word = words[Math.floor(Math.random() * words.length)];
  return `MK-${word}-${hex}`;
}

let isNewMark = false;

if (!localStorage.getItem("THE_MARK")) {
  localStorage.setItem("THE_MARK", generateMark());
  localStorage.setItem("MARK_TIME", Date.now());
  localStorage.setItem("MARK_NEW", "true");
  isNewMark = true;
}
