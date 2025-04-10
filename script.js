function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


   // Modal handling
   function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function hideSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('signupModal');
    if (event.target === modal) {
        hideSignupModal();
    }
}

// Close with ESC key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        hideSignupModal();
    }
});