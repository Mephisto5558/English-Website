function setTheme(theme = localStorage.getItem('theme')) {
  document.documentElement.style.setProperty('--bg', `var(--bg-${theme})`);
  document.documentElement.style.setProperty('--bg-sec', `var(--bg-sec-${theme})`);
  document.documentElement.style.setProperty('--bg-focused', `var(--bg-focused-${theme})`);
  document.documentElement.style.setProperty('--fg', `var(--fg-${theme})`);

  localStorage.setItem('theme', theme);
}

setTheme();