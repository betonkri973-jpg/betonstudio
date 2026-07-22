window.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('soundPlayer');
    player.play().catch(e => {
        console.log("Tarayıcı otomatik ses oynatmayı engelledi, kullanıcı etkileşimi bekleniyor:", e);
    });

    // Ana ekranda karşılama balonunu aktif et
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

function switchOutfit(id, imageSrc, badgeText, audioFile, bubbleText, animClass) {
    const buttons = document.querySelectorAll('.outfit-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const img = document.getElementById('characterImage');
    img.src = imageSrc;
    document.getElementById('outfitBadge').innerText = badgeText;

    // Konuşma balonu kontrolü
    const bubble = document.getElementById('speechBubble');
    if (bubbleText && bubbleText.trim() !== "") {
        bubble.innerText = bubbleText;
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }

    // Karakter hareket sınıflarını sıfırla ve yenisini ekle
    img.className = "";
    if (animClass) {
        void img.offsetWidth; // Reflow tetikle
        img.classList.add("anim-" + animClass);
    }

    // Ses yönetimi
    const player = document.getElementById('soundPlayer');
    const soundText = document.getElementById('soundText');

    player.src = audioFile;
    player.play().catch(e => {
        console.log("Audio file playback waiting for asset:", e);
    });
    soundText.innerText = "Çalan Ses Dosyası: " + audioFile;
}
