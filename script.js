/**
 * Hajia Aisha Muhammad Kuta — 60th Birthday
 * Mother of Wisdom • Matriarch of Legacy • Heart of the Ndatti Dynasty
 * All content from family sources only.
 */

(function () {
    'use strict';

    const MEMORIES = [
        {
            id: 'childhood',
            title: 'Childhood',
            icon: 'fa-seedling',
            text: 'Born to Alhaji Muhammad Indakuta of Nupe heritage and Hajia Halimatu Abdulfata of Katsina roots, she carried the richness of two proud traditions. Her father, a renowned Peugeot dealer in the North, honoured her with 12 golden coins — a symbol of legacy and the brilliance of a firstborn daughter who came first in class and in character.',
            photo: ''
        },
        {
            id: 'family',
            title: 'Family',
            icon: 'fa-home',
            text: 'Heart of the home at No.10 Gaskiya Road, Tudun-Wada, Zaria. Her presence alone was a teacher, a healer, a sanctuary. Where others spoke into microphones, she spoke into hearts. Her hands, worn but warm, have held generations.',
            photo: ''
        },
        {
            id: 'love',
            title: 'Love',
            icon: 'fa-heart',
            text: 'Hers was a crown not made of gold, but of goodness. She carried herself with quiet majesty, nurturing her household and guarding its peace with a mother\'s sacred intuition. Every prayer she whispered, every meal she prepared — acts of devotion written in the unseen history of home.',
            photo: ''
        },
        {
            id: 'strength',
            title: 'Strength',
            icon: 'fa-mountain-sun',
            text: 'Though her journey through formal education ended at the secondary level, her spirit graduated into the university of life — where endurance, resilience, and devotion became her daily curriculum. Her excellence was measured not in degrees, but in the discipline of love, hard work, and enduring grace.',
            photo: ''
        },
        {
            id: 'sacrifices',
            title: 'Sacrifices',
            icon: 'fa-hands-holding-heart',
            text: 'She never raised her voice to lead — but still, her word was law. She led not with power, but with purpose. Her legacy is one of quiet sacrifices, made behind closed doors but echoed for eternity. She built futures from small beginnings.',
            photo: ''
        },
        {
            id: 'children',
            title: 'Her Children',
            icon: 'fa-users',
            text: 'Salamatu (Momi), Eng. Mustapha (Baba), Bilkisu, Halima (Umaima), Mohammed (Sarkin Gida), Haj. Maryam, Amina, Rukayya (Baby), Nuhu (Naji), Halliru (Hadir). She was the soft voice behind strong children, the calm centre in every storm.',
            photo: ''
        },
        {
            id: 'dreams',
            title: 'Her Dreams',
            icon: 'fa-star',
            text: '"She nurtured not just children, but a nation through the values she passed on." Her home was a school. Her lap, a refuge. Her silence, a sermon. In a world obsessed with noise, she taught the strength of stillness.',
            photo: ''
        },
        {
            id: 'legacy',
            title: 'Her Legacy',
            icon: 'fa-crown',
            text: 'A 37-member legacy spanning generations since 1961. Mother of Wisdom • Matriarch of Legacy • Heart of the Ndatti Dynasty. "The strength of a family, like the strength of an army, is in its loyalty to each other." — Family motto.',
            photo: ''
        }
    ];

    const LANTERN_MESSAGES = [
        'Thank you for your love.',
        'Thank you for your sacrifices.',
        'Thank you for raising us.',
        'Thank you for every prayer and every meal.',
        'Thank you for being our home.',
        'We love you, Mum.'
    ];

    let galaxyScene, galaxyCamera, galaxyRenderer, starField, galaxyAnimationId;
    let introMusic = null;

    function initIntro() {
        const introStars = document.getElementById('introStars');
        const count = 120;
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            introStars.appendChild(star);
        }

        const enterBtn = document.getElementById('enterUniverseBtn');
        const introAudio = document.getElementById('introAudio');

        enterBtn.addEventListener('click', () => {
            if (introAudio) {
                introAudio.pause();
                introAudio.currentTime = 0;
            }
            const audioToggle = document.getElementById('audioToggle');
            const audioIcon = document.getElementById('audioIcon');
            if (audioToggle) audioToggle.classList.remove('playing');
            if (audioIcon) {
                audioIcon.classList.remove('fa-volume-up');
                audioIcon.classList.add('fa-volume-mute');
            }
            document.getElementById('intro').classList.add('hidden');
            document.getElementById('mainExperience').classList.add('visible');
            setTimeout(() => {
                initGalaxy();
                renderStars();
                initLanterns();
                initTimeline();
                initVoice();
                initCrown();
                initFinalMessage();
                initConfetti();
            }, 100);
        });

        const audioToggle = document.getElementById('audioToggle');
        const audioIcon = document.getElementById('audioIcon');
        if (introAudio) {
            introAudio.volume = 0.5;
            introAudio.loop = true;
            if (audioToggle) {
                audioToggle.addEventListener('click', function (e) {
                    e.stopPropagation();
                    if (introAudio.paused) {
                        introAudio.play().then(function () {
                            audioToggle.classList.add('playing');
                            if (audioIcon) { audioIcon.classList.remove('fa-volume-mute'); audioIcon.classList.add('fa-volume-up'); }
                        }).catch(function () {});
                    } else {
                        introAudio.pause();
                        introAudio.currentTime = 0;
                        audioToggle.classList.remove('playing');
                        if (audioIcon) { audioIcon.classList.remove('fa-volume-up'); audioIcon.classList.add('fa-volume-mute'); }
                    }
                });
            }
        }
    }

    function initConfetti() {
        const container = document.getElementById('introConfetti');
        if (!container) return;
        const colors = ['#D4AF37', '#F4E4BC', '#B8960C', '#f8f4e9'];
        const count = 80;
        for (let i = 0; i < count; i++) {
            const c = document.createElement('div');
            c.style.cssText = `
                position: absolute;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                border-radius: 2px;
                pointer-events: none;
                opacity: 0.9;
            `;
            container.appendChild(c);
            window.requestAnimationFrame(() => {
                c.animate(
                    [
                        { transform: 'translateY(0) rotate(0deg)', opacity: 0.9 },
                        { transform: `translateY(-${window.innerHeight}px) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
                    ],
                    { duration: 4000 + Math.random() * 2000, delay: Math.random() * 500 }
                ).onfinish = () => c.remove();
            });
        }
    }

    function initGalaxy() {
        const canvas = document.getElementById('galaxyCanvas');
        if (!canvas) return;
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;

        galaxyScene = new THREE.Scene();
        galaxyCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        galaxyRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
        galaxyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const total = 8000;
        for (let i = 0; i < total; i++) {
            const r = 800 + Math.random() * 400;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            vertices.push(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta) * 0.4,
                r * Math.cos(phi)
            );
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({
            color: 0xf4e4bc,
            size: 1.2,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8
        });
        starField = new THREE.Points(geometry, material);
        galaxyScene.add(starField);
        galaxyCamera.position.z = 1200;

        function animate() {
            galaxyAnimationId = requestAnimationFrame(animate);
            starField.rotation.y += 0.0003;
            galaxyRenderer.render(galaxyScene, galaxyCamera);
        }
        animate();

        window.addEventListener('resize', () => {
            galaxyCamera.aspect = window.innerWidth / window.innerHeight;
            galaxyCamera.updateProjectionMatrix();
            galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    function renderStars() {
        const container = document.getElementById('starsContainer');
        if (!container) return;
        container.innerHTML = '';
        MEMORIES.forEach((mem, i) => {
            const node = document.createElement('button');
            node.type = 'button';
            node.className = 'star-node';
            node.setAttribute('aria-label', 'Open memory: ' + mem.title);
            node.innerHTML = `<i class="fas ${mem.icon}"></i><span>${mem.title}</span>`;
            node.addEventListener('click', () => openMemory(mem));
            container.appendChild(node);
        });
    }

    function openMemory(mem) {
        const modal = document.getElementById('memoryModal');
        const title = document.getElementById('memoryTitle');
        const text = document.getElementById('memoryText');
        const photo = document.getElementById('memoryPhoto');
        const hearts = document.getElementById('memoryHearts');
        if (!modal || !title || !text) return;
        title.textContent = mem.title;
        text.textContent = mem.text;
        photo.style.backgroundImage = mem.photo ? `url(${mem.photo})` : 'none';
        photo.style.backgroundSize = 'cover';
        photo.style.backgroundPosition = 'center';
        hearts.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const h = document.createElement('i');
            h.className = 'fas fa-heart';
            hearts.appendChild(h);
        }
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeMemory() {
        const modal = document.getElementById('memoryModal');
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.getElementById('memoryBackdrop')?.addEventListener('click', closeMemory);
    document.getElementById('memoryClose')?.addEventListener('click', closeMemory);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMemory();
    });

    function initLanterns() {
        const wrap = document.getElementById('lanternsWrap');
        if (!wrap) return;
        wrap.innerHTML = '';
        LANTERN_MESSAGES.forEach(msg => {
            const div = document.createElement('div');
            div.className = 'lantern';
            div.textContent = msg;
            wrap.appendChild(div);
        });
    }

    function initTimeline() {
        if (typeof gsap === 'undefined' || !gsap.registerPlugin) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.timeline-item').forEach((el, i) => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: 'top 92%' },
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out'
            });
        });
    }

    function initVoice() {
        const mainEl = document.getElementById('mainExperience');
        const btn = document.getElementById('voiceBtn');
        const audio = document.getElementById('voiceAudio');
        if (!audio) return;

        function playVoiceMessage() {
            var introAudio = document.getElementById('introAudio');
            if (introAudio) {
                introAudio.pause();
                introAudio.currentTime = 0;
            }
            audio.currentTime = 0;
            audio.play().then(function () {
                if (btn) btn.classList.add('playing');
            }).catch(function () {
                if (btn) btn.classList.add('playing');
            });
        }

        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                playVoiceMessage();
            });
        }

        if (mainEl) {
            mainEl.addEventListener('click', function (e) {
                if (btn && audio && btn.contains(e.target)) {
                    e.preventDefault();
                    e.stopPropagation();
                    playVoiceMessage();
                }
            });
        }

        audio.addEventListener('ended', function () {
            if (btn) btn.classList.remove('playing');
        });
    }

    function initCrown() {
        const section = document.getElementById('crownSection');
        const crownIcon = document.getElementById('crownIcon');
        const lines = section?.querySelectorAll('.crown-line');
        if (!section || !crownIcon) return;

        if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline({
                scrollTrigger: { trigger: section, start: 'top 60%' }
            });
            tl.to(crownIcon, { opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.2)' });
            lines.forEach((line, i) => {
                tl.to(line, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
            });
            tl.call(() => triggerFireworks());
        } else {
            crownIcon.style.opacity = '1';
            crownIcon.style.transform = 'scale(1)';
            lines.forEach(l => { l.style.opacity = '1'; l.style.transform = 'translateY(0)'; });
            triggerFireworks();
        }

        initFireworks();
    }

    function initFireworks() {
        const canvas = document.getElementById('fireworksCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function addBurst(x, y, color) {
            for (let i = 0; i < 85; i++) {
                const angle = (Math.PI * 2 * i) / 85 + Math.random() * 0.3;
                const v = 5 + Math.random() * 7;
                particles.push({
                    x, y,
                    vx: Math.cos(angle) * v,
                    vy: Math.sin(angle) * v,
                    life: 1,
                    color: color || `hsl(${42 + Math.random() * 12}, 75%, 55%)`,
                    decay: 0.014 + Math.random() * 0.008
                });
            }
        }

        window.triggerFireworks = function () {
            const w = canvas.width;
            const h = canvas.height;
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    addBurst(
                        w / 2 + (Math.random() - 0.5) * 280,
                        h / 2 - 80 + (Math.random() - 0.5) * 80
                    );
                }, i * 220);
            }
        };

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles = particles.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;
                if (p.life <= 0) return false;
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
                return true;
            });
            ctx.globalAlpha = 1;
        }
        animate();
    }

    function triggerFireworks() {
        if (typeof window.triggerFireworks === 'function') window.triggerFireworks();
    }

    function initFinalMessage() {
        const btn = document.getElementById('finalRevealBtn');
        const msg = document.getElementById('finalMessage');
        if (!btn || !msg) return;
        btn.addEventListener('click', () => {
            msg.classList.add('visible');
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
        });
    }

    document.addEventListener('DOMContentLoaded', initIntro);
})();
