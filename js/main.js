const minnum = 1;
const maxnum = 100;
let answer = Math.floor(Math.random() * (maxnum - minnum) + 1) + minnum;
let running = true;
let attempts = 0;
let guess;

document.body.style.filter = "blur(5px)"; // Apply blur effect while running is true

while (running) {
    guess = window.prompt(`Guess a number between ${minnum} and ${maxnum}`);
    guess = Number(guess);

    if (guess < minnum || guess > maxnum) {
        window.alert("Enter Valid Number");
    } else if (isNaN(guess)) {
        window.alert("Enter Valid Number");
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low! Try again");
        } else if (guess > answer) {
            window.alert("Too High! Try again");
        } else {
            window.alert(`Congrats you guessed it right! The number was ${answer} and it took you ${attempts} attempts.`);
            running = false;
            document.body.style.filter = "none"; // Remove blur effect
            startAudio();
        }
    }
}

function startAudio() {
    const audio = document.getElementById('crazyAudio');
    audio.muted = false; // Unmute audio
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

window.onload = function () {
    const audio = document.getElementById('crazyAudio');

    audio.muted = true;

    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });

    document.body.addEventListener('click', () => {
        audio.muted = false;
        audio.play().catch(error => {
            console.error('Error unmuting or playing audio:', error);
        });
    });
};



function goCrazy() {
    resetPageEffects();

    document.body.classList.add('crazy-effect', 'party-mode');
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => img.style.transform = 'rotate(720deg) scale(2)');
    addFireworks();
    addWeedEmojis();

    const audio = document.getElementById('crazyAudio');
    audio.muted = false; 
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

function triggerGanjaGalaxyMadness() {
    resetPageEffects();

    document.body.classList.add('crazy-effect', 'party-mode');
    const ganjaGalaxyText = document.querySelector('.ganja-galaxy-text');
    ganjaGalaxyText.classList.add('shake'); 
    addFireworks(); 
    addWeedEmojis(); 

    const audio = document.getElementById('crazyAudio');
    audio.muted = false;
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });

    document.body.classList.add('drunk-shake');
}

function resetPageEffects() {
    document.body.classList.remove('crazy-effect', 'party-mode', 'drunk-shake');
    const ganjaGalaxyText = document.querySelector('.ganja-galaxy-text');
    ganjaGalaxyText.classList.remove('shake');

    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.style.transform = 'rotate(0deg) scale(1)';
    });

    const fireworks = document.querySelectorAll('.firework, .weed-emojis');
    fireworks.forEach(firework => firework.remove());
}

function addFireworks() {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.innerHTML = "\ud83c\udf86 \ud83c\udf87 \ud83c\udf88";
    firework.style.position = 'fixed';
    firework.style.top = Math.random() * 100 + 'vh';
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.fontSize = '3rem';
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
}

function addWeedEmojis() {
    const weed = document.createElement('div');
    weed.classList.add('weed-emojis');
    weed.innerHTML = "\ud83c\udf3f \ud83c\udf3f \ud83c\udf3f";
    weed.style.top = Math.random() * 100 + 'vh';
    weed.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(weed);
    setTimeout(() => weed.remove(), 3000);
}

setInterval(addFireworks, 500);
setInterval(addWeedEmojis, 1000);

function smokeItUp() {
    resetPageEffects();

    document.body.classList.add('party-mode');
    const ganjaImages = document.querySelectorAll('.ganja-images img');
    ganjaImages.forEach(img => img.classList.add('crazy-spin'));

    const audio = document.getElementById('crazyAudio');
    audio.muted = false;
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
}

setInterval(() => {
    const emoji = document.createElement('div');
    emoji.classList.add('weed-emojis');
    emoji.innerHTML = '🌿🌿🌿';
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
}, 1000);
