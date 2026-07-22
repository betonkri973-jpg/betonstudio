window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('speechBubble');
    bubble.innerText = "merhaba KRI hoş geldin";
    bubble.style.display = 'block';
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
    
    // Oyuna başlandığı an ilk sesi güvenle başlat
    const player = document.getElementById('soundPlayer');
    player.play().catch(e => console.log("Ses çalma bekleniyor:", e));
}

function switchOutfit(id, badgeText, audioFile, bubbleText, animClass) {
    const buttons = document.querySelectorAll('.outfit-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const img = document.getElementById('characterImage');
    document.getElementById('outfitBadge').innerText = badgeText;

    // Konuşma balonu kontrolü
    const bubble = document.getElementById('speechBubble');
    if (bubbleText && bubbleText.trim() !== "") {
        bubble.innerText = bubbleText;
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }

    // Seçilen kombin numarasına göre doğru resim dosyasını yükle
    if (id === 1) {
        img.src = "ana karakter.png";
    } else {
        img.src = `kombin${id}.png`;
    }

    // Resim filtresini sıfırla (Dosyalar zaten kendi orijinal görsellerinde olduğu için)
    img.style.filter = "none";

    // HAREKETİ TETİKLEME (Reflow hilesi)
    img.className = ""; 
    void img.offsetWidth; 
    
    if (animClass) {
        img.classList.add("anim-" + animClass);
    }

    // Ses yönetimi
    const player = document.getElementById('soundPlayer');
    const soundText = document.getElementById('soundText');

    player.src = audioFile;
    player.play().catch(e => {
        console.log("Ses oynatma hatası:", e);
    });
    soundText.innerText = "Çalan Ses Dosyası: " + audioFile;
            }
