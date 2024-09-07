const toggleButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

toggleButton.classList.add('toggle-button');
toggleButton?.addEventListener('click', () => {
  // Toggle the visibility of the skills section
  if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
    toggleButton.classList.add('active');
  } else {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
    toggleButton.classList.remove('active');
  }
});