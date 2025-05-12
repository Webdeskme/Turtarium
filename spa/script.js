// script.js
let circle = document.querySelector('.circle');
let instruction = document.querySelector('#instruction');
let phase = 'inhale';
let duration = 4000; // 4 seconds

function animateCircle() {
    if (phase === 'inhale') {
        circle.style.transform = 'scale(1.5)';
        circle.classList.add('inhale');
        circle.classList.remove('exhale');
        instruction.textContent = 'Inhale for 4 seconds';
    } else {
        circle.style.transform = 'scale(1)';
        circle.classList.add('exhale');
        circle.classList.remove('inhale');
        instruction.textContent = 'Exhale for 4 seconds';
    }

    phase = phase === 'inhale' ? 'exhale' : 'inhale';

    setTimeout(animateCircle, duration);
}

animateCircle();
