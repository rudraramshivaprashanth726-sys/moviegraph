const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const appButton = document.querySelector('.btn-primary');
if (appButton) {
  appButton.addEventListener('click', () => {
    document.querySelector('.app-showcase')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
