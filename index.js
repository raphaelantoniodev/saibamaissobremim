const footer = document.querySelector('.footer-credits');
const card = document.querySelector('.card');
const avatarContainer = document.querySelector('.avatar-container');
const particlesContainer = document.getElementById('particles-container');
const badges = document.querySelectorAll('.badge');
const particleCount = 40;

card.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    avatarContainer.style.transform = `translateZ(30px) rotateZ(${-xAxis/2}deg)`;
    
    card.style.boxShadow = `
        ${xAxis * 2}px ${yAxis * 2}px 30px rgba(88, 101, 242, 0.4),
        inset 0 0 20px rgba(255, 255, 255, 0.05)
    `;
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
    avatarContainer.style.transition = 'none';
});

card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
    avatarContainer.style.transition = 'transform 0.3s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    avatarContainer.style.transform = 'translateZ(0) rotateZ(0deg)';
    card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
});

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    

    const size = Math.random() * 2 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * -20;
    const tx = (Math.random() * 200 - 100) + 'px';
    const ty = (Math.random() * 200 - 100) + 'px';
    
    particle.style.setProperty('--tx', tx);
    particle.style.setProperty('--ty', ty);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    const hue = Math.random() * 30 + 230;
    particle.style.backgroundColor = `hsla(${hue}, 80%, 70%, ${Math.random() * 0.3 + 0.1})`;
    
    particlesContainer.appendChild(particle);
}


badges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.2)';
        badge.style.boxShadow = '0 0 10px rgba(255,255,255,0.5)';
    });
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1)';
        badge.style.boxShadow = 'none';
    });
});

setTimeout(() => {
    document.querySelector('.welcome-screen').remove();
}, 3000);


card.addEventListener('mouseenter', () => {
    footer.style.opacity = '1';
});

card.addEventListener('mouseleave', () => {
    footer.style.opacity = '0.7';
});