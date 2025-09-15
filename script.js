// ------------------ Constants ------------------
// Grab DOM elements that will be interacted with
const ScrollBtn = document.getElementById('scroll')
const CardSection = document.getElementById('CardSection')
const LoginForm = document.getElementById('LoginForm')
const LoginBtn = document.getElementById('LogInBtn')
const CloseBtn = document.getElementById('CloseBtn')

// ------------------ Functions ------------------
// Toggle visibility of an element by adding/removing the 'shown' class
function toggleElementVisibility(element) {
    if (!element) return false;  // Check if the element has been defined
    element.classList.toggle('shown');
    return true;
}

// ------------------ Event Listeners ------------------
// Show login modal when login button is clicked
LoginBtn.addEventListener('click', () => toggleElementVisibility(LoginForm))

// Hide login modal when close button is clicked
CloseBtn.addEventListener('click', () => toggleElementVisibility(LoginForm))

// Scroll CardSection into view smoothly when scroll button 
ScrollBtn.addEventListener('click', function () {
    CardSection.scrollIntoView({ behavior: 'smooth' })
})
