# Happy 60th Birthday — Hajia Aisha Muhammad Kuta

**Mother of Wisdom • Matriarch of Legacy • Heart of the Ndatti Dynasty**

A one-page birthday experience: cinematic intro, galaxy of memories, thank-you lanterns, life timeline, crown moment, and fireworks. Built for GitHub Pages.

---

## Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `mum-60-birthday` or `hajia-aisha-60`).

2. **Push this folder** to the repo:
   ```bash
   cd birthday-mum-60
   git init
   git add .
   git commit -m "60th birthday page for Hajia Aisha Muhammad Kuta"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**), folder: **/ (root)**
   - Save.

4. **Your link** (after a few minutes):
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```
   Example: `https://nuhudatti.github.io/mum60`

---

## Optional: Add your own files

- **Intro audio (first page, auto-play):** Add `assets/intro-audio.mp3`. Use the script in **ELEVENLABS-SCRIPTS.md** (Script 1) in ElevenLabs, export as MP3, and save as `intro-audio.mp3`. It will auto-play on the intro screen (bottom-right toggle to mute/unmute). On some phones one tap may be needed to allow sound.
- **Voice message (“Listen to a message from my heart”):** Add `assets/voice-message.mp3`. Use the script in **ELEVENLABS-SCRIPTS.md** (Script 2) in ElevenLabs (or your own cloned voice), export as MP3, and save as `voice-message.mp3`.
- **Video (me and her smiling):** Add `assets/our-video.mp4` (and optionally `assets/video-poster.jpg` for a thumbnail). The “Us” section will show your video. Supported formats: MP4, WebM.
- **Photos in memory cards:** In `script.js`, in the `MEMORIES` array, set the `photo` property to the image path (e.g. `photo: 'assets/mum-photo1.jpg'`) for any memory you want to show a picture.

---

## Tech

- HTML5, CSS3 (mobile-first, glassmorphism), vanilla JS
- GSAP + ScrollTrigger (CDN)
- Three.js (CDN) for galaxy background
- No build step; works as static files on GitHub Pages

---

*Made with love for Hajia Aisha Muhammad Kuta's 60th birthday.*
