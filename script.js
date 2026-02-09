document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('goalForm');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.querySelector('.cta-submit');
    const btnText = document.querySelector('.btn-text');
    const marqueeTrack = document.querySelector('.track');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Input Values
        const username = document.getElementById('username').value;
        const goal = document.getElementById('goal').value;

        // Simulate Loading
        btnText.style.opacity = '0';
        submitBtn.style.pointerEvents = 'none';

        // Add fake loader logic if we had one, but for now just wait
        submitBtn.innerHTML = '<div class="loader">UPLOADING...</div>';

        setTimeout(() => {
            // Hide Form, Show Success
            form.style.display = 'none';
            successMessage.classList.remove('hidden');

            // Add to Marquee (Simulated)
            const newItem = document.createElement('span');
            newItem.classList.add('commit-item');
            newItem.innerHTML = `<strong>${username.toUpperCase()}:</strong> ${goal.toUpperCase()}`;

            // Prepend new goal to marquee (twice for loop effect, technically should update both halves)
            marqueeTrack.insertBefore(newItem, marqueeTrack.firstChild);

            // Confetti or visual cue could go here
        }, 1500);
    });

    // Intersection Observer for Scroll Animations
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.05}s`; // Stagger effect
        observer.observe(card);
    });
});
