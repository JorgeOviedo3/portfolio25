// export function getTheme(value: string) {
//   let theme = localStorage.getItem("theme");
//   const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   theme = theme === "system" ? systemTheme : value;

//   if (theme === null) theme = systemTheme;

//   document.documentElement.classList.remove("light", "dark");
//   document.documentElement.classList.add(theme);
//   localStorage.setItem("theme", theme);
// }

export function toggleTheme() {
  let theme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  if (theme !== null) {
    theme = theme;
  } else {
    theme = systemTheme;
  }

  updateTheme(theme === "light" ? "dark" : "light");
}

export function updateTheme(theme: string) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
}
