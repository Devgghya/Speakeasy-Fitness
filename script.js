// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

// Open vault modal
function openVault() {
  const modal = document.getElementById('vaultModal');
  modal.style.display = 'flex';
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = 'none';
}

// Close vault modal
function closeVault() {
  const modal = document.getElementById('vaultModal');
  modal.style.display = 'none';
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.style.display = 'none';
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeVault();
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'none';
  }
});
