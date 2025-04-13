document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .hover-grow');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    document.querySelectorAll('.hover-grow').forEach(el => {
        el.style.transform = 'scale(1)';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Then on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add gradient animation to elements with gradient-text-animate class
    document.querySelectorAll('.gradient-text-animate').forEach(el => {
        el.style.backgroundImage = 'linear-gradient(90deg, #22d3ee, #a855f7, #22d3ee)';
    });
    
    // Add neon effect to elements with neon class on hover
    document.querySelectorAll('.neon-hover').forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('neon-shadow');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('neon-shadow');
        });
    });
    
    // Add purple neon effect to elements with purple-neon-hover class on hover
    document.querySelectorAll('.purple-neon-hover').forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.classList.add('purple-neon-shadow');
        });
        
        el.addEventListener('mouseleave', function() {
            this.classList.remove('purple-neon-shadow');
        });
    });
});
