function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const heartCount = 30;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
}

function showGallery() {
    document.getElementById("message01").innerHTML = "i loviu baby ❤️";
    document.getElementById('gallery').style.display = 'flex';
}

window.onload = function () {
    createHearts();
};
