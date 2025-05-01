// Wyszukiwanie i obsługa panelu użytkownika

document.getElementById('menuToggle').onclick = () => {
  document.getElementById('userPanel').classList.toggle('active');
};

document.getElementById('closePanel').onclick = () => {
  document.getElementById('userPanel').classList.remove('active');
};
