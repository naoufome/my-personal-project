document.addEventListener('DOMContentLoaded', function() {
    // Handle logo ticker responsiveness
    function setupLogoAnimation() {
        const logoContainer = document.querySelector('.logo-ticker-container');
        const logoTrack = document.querySelector('.logo-ticker-track');
        
        if (!logoContainer || !logoTrack) return;
        
        // Calculate total width needed
        const logos = document.querySelectorAll('.logo-item');
        let totalWidth = 0;
        
        logos.forEach(logo => {
            totalWidth += logo.offsetWidth;
        });
        
        // Set track width to double (for seamless looping)
        logoTrack.style.width = (totalWidth * 2) + 'px';
        
        // Adjust animation duration based on width
        const duration = Math.max(30, Math.min(60, totalWidth / 50)); // Between 30-60s
        logoTrack.style.animationDuration = duration + 's';
    }
    
    // Run on load and resize
    setupLogoAnimation();
    window.addEventListener('resize', setupLogoAnimation);
});