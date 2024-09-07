// Get references to the button and the skills section
var toggleButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
// Add click event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});