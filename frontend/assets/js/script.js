const about_desc = document.querySelector('.about-description');
const about_img = document.querySelector('.about-page');
const service_cards = document.querySelectorAll('.services-card');


const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower');
    }
},  {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
});

observer.observe(about_desc);

const about_img_observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slower');
    }
},  {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
});



about_img_observer.observe(about_img);

const service_card_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
            entry.target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower');
    })
    // entries[0].target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower');
    // entries[1].target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower', 'animate__delay-1s');
    // entries[2].target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower', 'animate__delay-2s');
    // entries[3].target.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slower', 'animate__delay-3s');

}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
});

service_cards.forEach(card => {
    service_card_observer.observe(card)
})

let offer_description = document.querySelector('.offer-description');
let offer_img = document.querySelector('.offer-img');

new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__slower');
    }
},  {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
}).observe(offer_img)

const off_observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slower');
    }
},  {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger callback when 10% of the element is visible
});
off_observer.observe(offer_description)

let mobile_nav = document.querySelector('.mobile-nav');
let nav_btn = document.querySelector('.nav-btn');
let close_btn = document.querySelector('.nav-close-btn');

nav_btn.addEventListener('click', () => {
    mobile_nav.classList.toggle('show-mobile-nav')
});
close_btn.addEventListener('click', () => {
    mobile_nav.classList.toggle('show-mobile-nav')
});


// Chat Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.querySelector('.chat-widget');
    const chatToggleBtn = document.querySelector('.chat-toggle-btn');
    const chatCloseBtn = document.querySelector('.chat-close-btn');
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.send-btn');
    const chatMessages = document.querySelector('.chat-messages');

    // Toggle chat widget
    chatToggleBtn.addEventListener('click', () => {
        chatWidget.style.display = 'flex';
        chatToggleBtn.style.display = 'none';
    });

    // Close chat widget
    chatCloseBtn.addEventListener('click', () => {
        chatWidget.style.display = 'none';
        chatToggleBtn.style.display = 'flex';
    });

    // Send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = document.createElement('div');
            userMessage.className = 'message user';
            userMessage.innerHTML = `<p>${message}</p>`;
            chatMessages.appendChild(userMessage);

            // Clear input
            chatInput.value = '';

            // Auto scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate bot response (you can replace this with actual backend integration)
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.className = 'message bot';
                botMessage.innerHTML = `<p>Thanks for your message! Our team will get back to you soon.</p>`;
                chatMessages.appendChild(botMessage);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});