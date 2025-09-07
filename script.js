const body = document.body;
const btnThemeToggle = document.getElementById('themeToggle');
const toggleIcon = document.querySelector('.toggle-icon');
const toggleText = document.querySelector('.toggle-text');
const currentThemeStatus = document.getElementById('currentTheme');
const statusLastChanged = document.getElementById('lastChanged');

let isLightMode = true;

// Function to update the interface
function updateUI() {
  if (isLightMode) {
    body.classList.remove('dark');
    toggleIcon.textContent = '🌙';
    toggleText.textContent = 'Modo Escuro';
    currentThemeStatus.textContent = 'Claro';
  } else {
    body.classList.add('dark');
    toggleIcon.textContent = '☀️';
    toggleText.textContent = 'Modo Claro';
    currentThemeStatus.textContent = 'Escuro';
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  isLightMode = savedTheme === 'claro';
}else{
    isLightMode = true;
}
updateUI();

// Load last toggle
const lastChange = localStorage.getItem('lastToggle');
statusLastChanged.textContent = lastChange || '--';

// Function to change the theme
function changeTheme() {
  isLightMode = !isLightMode;
  updateUI();

  // Save state
  localStorage.setItem('theme', isLightMode ? 'claro' : 'escuro');

  // Save the last date change 
  const currentDate = new Date();
  const dateFormatted = currentDate.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
  statusLastChanged.textContent = dateFormatted;
  localStorage.setItem('lastToggle', dateFormatted);
}

btnThemeToggle.addEventListener('click', changeTheme);