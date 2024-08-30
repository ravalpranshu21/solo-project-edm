document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const mobile = document.getElementById('mobile').value;
            const address = document.getElementById('address').value;

            // Store user details in localStorage
            localStorage.setItem('userDetails', JSON.stringify({
                username,
                mobile,
                address
            }));

            // Redirect to profile page
            window.location.href = 'profile.html';
        });
    } else {
        // Profile page logic
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if (userDetails) {
            document.getElementById('profileUsername').textContent = userDetails.username;
            document.getElementById('profileMobile').textContent = userDetails.mobile;
            document.getElementById('profileAddress').textContent = userDetails.address;
        }
    }
});
