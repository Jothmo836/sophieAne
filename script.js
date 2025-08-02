document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-btn');
    
    // Handle booking button clicks
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            
            // Create WhatsApp message with service info
            const whatsappNumber = "+447498713979"; // Replace with actual number
            const message = `Hi Sophia, I'm interested in booking your ${service} service.`;
            const encodedMessage = encodeURIComponent(message);
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    });
});


const profileImg = document.getElementById('profileImg');
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

profileImg.onclick = function() {
    modalImg.src = profileImg.src;
    imgModal.style.display = 'block';
};
closeModal.onclick = function() {
    imgModal.style.display = 'none';
};
imgModal.onclick = function(e) {
    if (e.target === imgModal) imgModal.style.display = 'none';
};