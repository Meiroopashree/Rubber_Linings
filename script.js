
// Testimonials functionality
const testimonials = [
    {
        name: "Kishore Aravind",
        text: "I am very happy with Peddinti Rubber lining solution. At construction stage technician and expert help in more outstanding work. They support & excellent guidance given good products."
    },
    {
        name: "Sharan", 
        text: "I am so much happy and excellent service and working process in right time so much appreciate you and team."
    }
];

let currentTestimonialIndex = 0;

function updateTestimonial(index) {
    const nameElement = document.getElementById('testimonial-name');
    const textElement = document.getElementById('testimonial-text');
    const dots = document.querySelectorAll('.dot');
    
    // Update content
    nameElement.textContent = testimonials[index].name;
    textElement.textContent = testimonials[index].text;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentTestimonialIndex = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial(nextIndex);
}

function prevTestimonial() {
    const prevIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(prevIndex);
}

function currentTestimonial(index) {
    updateTestimonial(index);
}

// Process accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const processItems = document.querySelectorAll('.process-item');
    
    processItems.forEach(item => {
        const header = item.querySelector('.process-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            processItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Auto-start animations when page loads
    startAnimations();
});

function startAnimations() {
    // Add staggered animation to circle text
    const circleTexts = document.querySelectorAll('.circle-text p');
    circleTexts.forEach((text, index) => {
        text.style.animationDelay = `${(index + 1) * 0.1}s`;
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-triggered animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.stat, .impact-image, .testimonial-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('scroll', handleScrollAnimations);

// Set initial state for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.stat, .impact-image, .testimonial-content');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    handleScrollAnimations();
});

// Contact button functionality
document.querySelector('.contact-btn').addEventListener('click', function() {
    alert('Contact form would open here. Please implement your preferred contact method.');
});

document.querySelector('.cta-btn').addEventListener('click', function() {
    // Scroll to impact section
    const impactSection = document.querySelector('.impact');
    if (impactSection) {
        impactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});


function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 200 ? '+' : '');
        }
    }
    
    updateCounter();
}

// Counter Animation Function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target === 200 ? '+' : '');
        }
    }
    
    updateCounter();
}

// Counter animation function
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60; // Duration control (higher = slower)
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30); // Speed control (lower = faster)
}

// Intersection Observer for triggering animation when in view
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.counter');
            
            counters.forEach((counter, index) => {
                const target = parseInt(counter.parentElement.parentElement.getAttribute('data-target'));
                
                // Add slight delay between counters for staggered effect
                setTimeout(() => {
                    animateCounter(counter, target);
                }, index * 200);
            });
            
            // Stop observing after animation starts
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Start observing the stats section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

function toggleMenu() {
        document.getElementById('menu').classList.toggle('show');
    }

const items = document.querySelectorAll('.process-item');

items.forEach(item => {
    const header = item.querySelector('.process-header');
    const content = item.querySelector('.process-content');

    header.querySelector('.expand-icon').addEventListener('click', () => {
        if (content.style.maxHeight) {
            // Collapse
            content.style.maxHeight = null;
            content.style.opacity = 0;
        } else {
            // Expand with exact height
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
        }
    });
});


const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.parentElement.parentElement.dataset.target;
      const count = +counter.innerText;
      const speed = 200;
      const inc = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + inc;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });


  fetch('gifData.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('gif-container');
      const img = document.createElement('img');
      img.src = data.gif;  // base64 GIF data from JSON
      img.alt = 'Welcome GIF';
      img.style.maxWidth = '300px'; // adjust as needed
      container.appendChild(img);
    })
    .catch(err => {
      console.error('Error loading GIF JSON:', err);
    });
