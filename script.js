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

// Kombinlere göre kıyafet, renk ve aksesuar tasarımlarını oluşturan fonksiyon
function switchOutfit(id, badgeText, audioFile, bubbleText, outfitType, animClass) {
    const buttons = document.querySelectorAll('.outfit-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.getElementById('outfitBadge').innerText = badgeText;

    // Konuşma balonu kontrolü
    const bubble = document.getElementById('speechBubble');
    if (bubbleText && bubbleText.trim() !== "") {
        bubble.innerText = bubbleText;
        bubble.style.display = 'block';
    } else {
        bubble.style.display = 'none';
    }

    // Kıyafet ve Renk Değişimleri (SVG üzerinde anlık çizim güncellemesi)
    const torsoPath = document.getElementById('torsoPath');
    const leftLeg = document.getElementById('leftLeg');
    const rightLeg = document.getElementById('rightLeg');
    const accessoryGroup = document.getElementById('accessoryGroup');
    accessoryGroup.innerHTML = ""; // Önceki aksesuarları temizle

    switch(outfitType) {
        case 'outfit1': // Beyaz Tişört & Siyah Pantolon
            torsoPath.setAttribute('fill', '#ffffff');
            leftLeg.setAttribute('fill', '#1e1e1e');
            rightLeg.setAttribute('fill', '#1e1e1e');
            break;
        case 'outfit2': // Lacivert Kolej Ceketi
            torsoPath.setAttribute('fill', '#1e3a8a');
            leftLeg.setAttribute('fill', '#1e1e1e');
            rightLeg.setAttribute('fill', '#1e1e1e');
            break;
        case 'outfit3': // Denim & Beyaz Ceket
            torsoPath.setAttribute('fill', '#38bdf8');
            leftLeg.setAttribute('fill', '#0284c7');
            rightLeg.setAttribute('fill', '#0284c7');
            break;
        case 'outfit4': // Kahverengi Deri Ceket & Şort
            torsoPath.setAttribute('fill', '#78350f');
            leftLeg.setAttribute('fill', '#292524');
            rightLeg.setAttribute('fill', '#292524');
            break;
        case 'outfit5': // Yazılı Triko & Şort
            torsoPath.setAttribute('fill', '#f59e0b');
            leftLeg.setAttribute('fill', '#334155');
            rightLeg.setAttribute('fill', '#334155');
            break;
        case 'outfit6': // Mavi Yelek & Geniş Kot
            torsoPath.setAttribute('fill', '#60a5fa');
            leftLeg.setAttribute('fill', '#1d4ed8');
            rightLeg.setAttribute('fill', '#1d4ed8');
            break;
        case 'outfit7': // Kaşif Tarzı (Mikrofonlu)
            torsoPath.setAttribute('fill', '#d97706');
            leftLeg.setAttribute('fill', '#451a03');
            rightLeg.setAttribute('fill', '#451a03');
            // Mikrofon aksesuarı
            accessoryGroup.innerHTML = '<path d="M195 210 L210 200 L215 215" stroke="#64748b" stroke-width="3" fill="none"/><circle cx="212" cy="197" r="5" fill="#cbd5e1"/>';
            break;
        case 'outfit8': // Mavi Kapüşonlu & Patchwork Kot
            torsoPath.setAttribute('fill', '#2563eb');
            leftLeg.setAttribute('fill', '#1e40af');
            rightLeg.setAttribute('fill', '#1e3a8a');
            break;
        case 'outfit9': // Krem Takım Elbise
            torsoPath.setAttribute('fill', '#fef3c7');
            leftLeg.setAttribute('fill', '#d97706');
            rightLeg.setAttribute('fill', '#d97706');
            break;
        case 'outfit10': // Yeşil Sokak Stili (Mikrofonlu)
            torsoPath.setAttribute('fill', '#10b981');
            leftLeg.setAttribute('fill', '#047857');
            rightLeg.setAttribute('fill', '#047857');
            accessoryGroup.innerHTML = '<path d="M195 210 L210 200 L215 215" stroke="#64748b" stroke-width="3" fill="none"/><circle cx="212" cy="197" r="5" fill="#cbd5e1"/>';
            break;
        case 'outfit11': // Konser Sahnesi (Deri Ceket)
            torsoPath.setAttribute('fill', '#0f172a');
            leftLeg.setAttribute('fill', '#000000');
            rightLeg.setAttribute('fill', '#000000');
            break;
        case 'outfit12': // Siyah Kapüşonlu & Gri Eşofman
            torsoPath.setAttribute('fill', '#1e293b');
            leftLeg.setAttribute('fill', '#64748b');
            rightLeg.setAttribute('fill', '#64748b');
            break;
    }

    // Karakter SVG Animasyon Sınıfı
    const svgEl = document.getElementById('characterSvg');
    svgEl.className = "";
    if (animClass) {
        void svgEl.offsetWidth; // Reflow
        svgEl.classList.add("anim-" + animClass);
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
                
