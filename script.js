// Efeito de digitação no título
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.content h2');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
    
    // Efeito nos cards de peixe
    const fishCards = document.querySelectorAll('.fish-card');
    fishCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 16px rgba(0, 102, 128, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efeito de rotação nos emojis de peixe
    const fishEmojis = document.querySelectorAll('.fish-image');
    fishEmojis.forEach(emoji => {
        emoji.addEventListener('mouseenter', () => {
            emoji.style.transition = 'transform 0.5s';
            emoji.style.transform = 'rotate(10deg)';
        });
        
        emoji.addEventListener('mouseleave', () => {
            emoji.style.transform = 'rotate(0deg)';
        });
    });
});