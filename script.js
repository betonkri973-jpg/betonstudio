window.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('soundPlayer');
    player.play().catch(e => {
        console.log("Tarayıcı otomatik ses oynatmayı engelledi:", e);
    });

    const bubble = document.getElementById('speechBubble');
    bubble.innerText = "merhaba KRI hoş geldin";
    bubble.style.display = 'block';

    setTimeout(() => {
        document.getElementById('introScreen').classList.remove('active');
        document.getElementById('menuScreen').classList.add('active');
    }, 2500);
});

function showMenu() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('menuScreen').classList.add('active');
}

function showHowToPlay() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('howToPlayScreen').classList.add('active');
}

function startGame() {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('gameScreen').classList.add('active');
}

function switchOutfit(id, badgeText, audioFile, bubbleText, animClass) {
    const buttons = document.querySelectorAll('.outfit-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const img = document.getElementById('characterImage');
    
    // Ana karakter görseli sabit kalır, kombinlere göre hafif renk tonu veya filtre değişimi ile uyum sağlanır
    img.src = "ana karakter.png";
    document.getElementById('outfitBadge').innerText = badgeText;

    // Konuşma balonu kontrolü
    const bubble = document.getElementById('speechBubble');
    if (bubbleText && bubbleText.trim() !== "") {
        bubble.innerText = bubbleText;
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }

    // Kombine özel renk tonu filtreleri (Kıyafet değişimi hissi için)
    img.style.filter = "none";
    if (id === 2) img.style.filter = "hue-rotate(180deg) saturate(1.2)"; // Lacivert tonu
    else if (id === 3) img.style.filter = "hue-rotate(190deg) brightness(1.1)"; // Denim tonu
    else if (id === 4) img.style.filter = "sepia(0.6) hue-rotate(-30deg)"; // Kahverengi deri tonu
    else if (id === 5) img.style.filter = "hue-rotate(40deg) saturate(1.3)"; // Triko tonu
    else if (id === 6) img.style.filter = "hue-rotate(210deg)"; // Mavi tonu
    else if (id === 7) img.style.filter = "sepia(0.4)"; // Kaşif tonu
    else if (id === 8) img.style.filter = "hue-rotate(200deg) brightness(0.9)"; // Mavi kapüşonlu
    else if (id === 9) img.style.filter = "sepia(0.3) brightness(1.2)"; // Krem takım
    else if (id === 10) img.style.filter = "hue-rotate(110deg) saturate(1.3)"; // Yeşil sokak stili
    else if (id === 11) img.style.filter = "grayscale(0.8) contrast(1.2)"; // Konser sahnesi
    else if (id === 12) img.style.filter = "grayscale(0.5) brightness(0.8)"; // Siyah kapüşonlu

    // Karakter Hareket Animasyonu
    img.className = "";
    if (animClass) {
        void img.offsetWidth; // Reflow
        img.classList.add("anim-" + animClass);
    }

    // Ses yönetimi
    const player = document.getElementById('soundPlayer');
    const soundText = document.getElementById('soundText');

    player.src = audioFile;
    player.play().catch(e => {
        console.log("Audio file playback waiting:", e);
    });
    soundText.innerText = "Çalan Ses Dosyası: " + audioFile;
}
