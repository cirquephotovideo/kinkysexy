'use client';
/**
 * Injecte une seule fois tous les keyframes des 100 effets.
 * À monter une fois dans le RootLayout (ou layout admin).
 *
 * Convention de classe : .kinky-fx-<id>
 *  - Pour les effets entry/scroll, on ajoute la classe `.kinky-fx-active`
 *    quand on veut déclencher l'animation (via IntersectionObserver).
 *  - Pour les effets hover, c'est juste hover natif sur la classe.
 */
export function EffectsStyles() {
  return <style dangerouslySetInnerHTML={{ __html: Kinky_EFFECTS_CSS }} />;
}

export const Kinky_EFFECTS_CSS = `
/* ========================================
 *  Kinky - Bibliothèque de 100 effets wahoo
 * ======================================== */

/* Base : tous les effets entry partent invisibles, kinky-fx-active déclenche */
[class*="kinky-fx-"][data-fx-entry="1"]:not(.kinky-fx-active) {
  opacity: 0;
}

/* ─── ENTRY ─────────────────────────────────────── */
@keyframes kinky-fade-in        { from { opacity: 0 } to { opacity: 1 } }
@keyframes kinky-fade-up        { from { opacity: 0; transform: translateY(40px) } to { opacity: 1; transform: translateY(0) } }
@keyframes kinky-fade-down      { from { opacity: 0; transform: translateY(-40px) } to { opacity: 1; transform: translateY(0) } }
@keyframes kinky-fade-left      { from { opacity: 0; transform: translateX(40px) } to { opacity: 1; transform: translateX(0) } }
@keyframes kinky-fade-right     { from { opacity: 0; transform: translateX(-40px) } to { opacity: 1; transform: translateX(0) } }
@keyframes kinky-zoom-in        { from { opacity: 0; transform: scale(0.7) } to { opacity: 1; transform: scale(1) } }
@keyframes kinky-zoom-out       { from { opacity: 0; transform: scale(1.3) } to { opacity: 1; transform: scale(1) } }
@keyframes kinky-slide-up       { from { transform: translateY(100%) } to { transform: translateY(0) } }
@keyframes kinky-slide-down     { from { transform: translateY(-100%) } to { transform: translateY(0) } }
@keyframes kinky-flip-x         { from { opacity: 0; transform: perspective(800px) rotateX(90deg) } to { opacity: 1; transform: perspective(800px) rotateX(0) } }
@keyframes kinky-flip-y         { from { opacity: 0; transform: perspective(800px) rotateY(90deg) } to { opacity: 1; transform: perspective(800px) rotateY(0) } }
@keyframes kinky-rotate-in      { from { opacity: 0; transform: rotate(-180deg) scale(0.5) } to { opacity: 1; transform: rotate(0) scale(1) } }
@keyframes kinky-blur-in        { from { opacity: 0; filter: blur(20px) } to { opacity: 1; filter: blur(0) } }
@keyframes kinky-bounce-in      { 0% { opacity: 0; transform: scale(0.3) } 50% { opacity: 1; transform: scale(1.1) } 70% { transform: scale(0.95) } 100% { transform: scale(1) } }
@keyframes kinky-elastic-in     { 0% { opacity: 0; transform: scale(0) } 60% { opacity: 1; transform: scale(1.2) } 80% { transform: scale(0.9) } 100% { transform: scale(1) } }
@keyframes kinky-jelly-in       { 0% { opacity: 0; transform: scale(0,0) } 25% { opacity: 1; transform: scale(1.4,0.6) } 50% { transform: scale(0.8,1.2) } 75% { transform: scale(1.1,0.9) } 100% { transform: scale(1,1) } }
@keyframes kinky-rubber-in      { 0% { opacity: 0; transform: scale(0.8) } 50% { opacity: 1; transform: scale(1.25, 0.75) } 70% { transform: scale(0.85, 1.15) } 100% { transform: scale(1) } }
@keyframes kinky-swing-in       { 0% { opacity: 0; transform: rotate(15deg) } 50% { opacity: 1; transform: rotate(-10deg) } 75% { transform: rotate(5deg) } 100% { transform: rotate(0) } }
@keyframes kinky-tada-in        { 0% { transform: scale(1) } 10%, 20% { transform: scale(0.9) rotate(-3deg) } 30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg) } 40%, 60%, 80% { transform: scale(1.1) rotate(-3deg) } 100% { transform: scale(1) rotate(0) } }
@keyframes kinky-wow-arrival    { 0% { opacity: 0; filter: blur(20px) brightness(2); transform: scale(0.5) rotateZ(-15deg) } 60% { opacity: 1; filter: blur(0) brightness(1.3); transform: scale(1.05) rotateZ(2deg) } 100% { opacity: 1; filter: none; transform: scale(1) rotateZ(0) } }

.kinky-fx-fade-in.kinky-fx-active        { animation: kinky-fade-in 0.7s ease-out both }
.kinky-fx-fade-up.kinky-fx-active        { animation: kinky-fade-up 0.8s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-fade-down.kinky-fx-active      { animation: kinky-fade-down 0.8s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-fade-left.kinky-fx-active      { animation: kinky-fade-left 0.8s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-fade-right.kinky-fx-active     { animation: kinky-fade-right 0.8s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-zoom-in.kinky-fx-active        { animation: kinky-zoom-in 0.7s ease-out both }
.kinky-fx-zoom-out.kinky-fx-active       { animation: kinky-zoom-out 0.7s ease-out both }
.kinky-fx-slide-up.kinky-fx-active       { animation: kinky-slide-up 0.6s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-slide-down.kinky-fx-active     { animation: kinky-slide-down 0.6s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-flip-x.kinky-fx-active         { animation: kinky-flip-x 0.9s ease-out both }
.kinky-fx-flip-y.kinky-fx-active         { animation: kinky-flip-y 0.9s ease-out both }
.kinky-fx-rotate-in.kinky-fx-active      { animation: kinky-rotate-in 0.9s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-blur-in.kinky-fx-active        { animation: kinky-blur-in 0.9s ease-out both }
.kinky-fx-bounce-in.kinky-fx-active      { animation: kinky-bounce-in 0.9s cubic-bezier(.68,-0.55,.27,1.55) both }
.kinky-fx-elastic-in.kinky-fx-active     { animation: kinky-elastic-in 1s cubic-bezier(.68,-0.55,.27,1.55) both }
.kinky-fx-jelly-in.kinky-fx-active       { animation: kinky-jelly-in 1s cubic-bezier(.68,-0.55,.27,1.55) both }
.kinky-fx-rubber-in.kinky-fx-active      { animation: kinky-rubber-in 1s ease-out both }
.kinky-fx-swing-in.kinky-fx-active       { animation: kinky-swing-in 1s ease-out both; transform-origin: top center }
.kinky-fx-tada-in.kinky-fx-active        { animation: kinky-tada-in 1.2s ease-out both }
.kinky-fx-wow-arrival.kinky-fx-active    { animation: kinky-wow-arrival 1.4s cubic-bezier(.2,.8,.2,1) both }

/* ─── HOVER ─────────────────────────────────────── */
.kinky-fx-lift             { transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s }
.kinky-fx-lift:hover       { transform: translateY(-6px); box-shadow: 0 20px 40px -10px rgba(217,70,239,.35) }
.kinky-fx-tilt-3d          { transition: transform .25s; transform-style: preserve-3d }
.kinky-fx-tilt-3d:hover    { transform: perspective(800px) rotateX(4deg) rotateY(-6deg) scale(1.02) }
.kinky-fx-glow             { transition: box-shadow .35s, filter .35s }
.kinky-fx-glow:hover       { box-shadow: 0 0 30px rgba(217,70,239,.6); filter: brightness(1.1) }
.kinky-fx-shake:hover      { animation: kinky-shake .5s }
@keyframes kinky-shake     { 0%,100% { transform: translateX(0) } 25% { transform: translateX(-6px) } 75% { transform: translateX(6px) } }
.kinky-fx-swing:hover      { animation: kinky-swing-h .8s ease-in-out }
@keyframes kinky-swing-h   { 0%,100% { transform: rotate(0) } 25% { transform: rotate(5deg) } 75% { transform: rotate(-5deg) } }
.kinky-fx-magnetic         { transition: transform .25s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-magnetic:hover   { transform: scale(1.06) }
.kinky-fx-magnify          { transition: transform .35s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-magnify:hover    { transform: scale(1.08) }
.kinky-fx-pulse:hover      { animation: kinky-pulse 1s ease-in-out infinite }
@keyframes kinky-pulse     { 0%,100% { transform: scale(1) } 50% { transform: scale(1.04) } }
.kinky-fx-ripple           { position: relative; overflow: hidden }
.kinky-fx-ripple:hover::after { content: ''; position: absolute; inset: 50% 50%; width: 0; height: 0; border-radius: 50%; background: rgba(217,70,239,.35); animation: kinky-ripple .6s ease-out forwards }
@keyframes kinky-ripple    { to { inset: -10% -10% -10% -10%; opacity: 0 } }
.kinky-fx-shine            { position: relative; overflow: hidden }
.kinky-fx-shine::before    { content: ''; position: absolute; inset: 0; background: linear-gradient(110deg, transparent 30%, rgba(255,255,255,.4) 50%, transparent 70%); transform: translateX(-100%); transition: transform .8s }
.kinky-fx-shine:hover::before { transform: translateX(100%) }
.kinky-fx-gradient-shift          { background-size: 200% 200%; transition: background-position .8s }
.kinky-fx-gradient-shift:hover    { background-position: 100% 100% }
.kinky-fx-blur-bg          { backdrop-filter: blur(0); transition: backdrop-filter .35s }
.kinky-fx-blur-bg:hover    { backdrop-filter: blur(8px) }
.kinky-fx-color-pop        { filter: saturate(1); transition: filter .35s }
.kinky-fx-color-pop:hover  { filter: saturate(1.6) }
.kinky-fx-neon-hover       { transition: box-shadow .35s, text-shadow .35s }
.kinky-fx-neon-hover:hover { box-shadow: 0 0 12px #d946ef, 0 0 24px #d946ef, inset 0 0 12px rgba(217,70,239,.3); text-shadow: 0 0 6px #d946ef }
.kinky-fx-electric:hover   { animation: kinky-electric .6s }
@keyframes kinky-electric  { 0%,100% { filter: brightness(1) hue-rotate(0) } 20% { filter: brightness(1.5) hue-rotate(20deg) } 40% { filter: brightness(0.9) hue-rotate(-15deg) } 60% { filter: brightness(1.4) hue-rotate(40deg) } 80% { filter: brightness(1.1) hue-rotate(-10deg) } }

/* ─── SCROLL ────────────────────────────────────── */
.kinky-fx-parallax-bg      { background-attachment: fixed; background-size: cover; background-position: center }
.kinky-fx-parallax-deep    { /* géré par composant ParallaxHero */ }
.kinky-fx-sticky-reveal    { position: sticky; top: 1rem }
.kinky-fx-stagger-list > * { opacity: 0; transform: translateY(20px); transition: opacity .6s, transform .6s }
.kinky-fx-stagger-list.kinky-fx-active > *:nth-child(1) { opacity: 1; transform: none; transition-delay: .05s }
.kinky-fx-stagger-list.kinky-fx-active > *:nth-child(2) { opacity: 1; transform: none; transition-delay: .15s }
.kinky-fx-stagger-list.kinky-fx-active > *:nth-child(3) { opacity: 1; transform: none; transition-delay: .25s }
.kinky-fx-stagger-list.kinky-fx-active > *:nth-child(4) { opacity: 1; transform: none; transition-delay: .35s }
.kinky-fx-stagger-list.kinky-fx-active > *:nth-child(n+5) { opacity: 1; transform: none; transition-delay: .45s }
.kinky-fx-marquee          { display: flex; gap: 2rem; overflow: hidden; mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent) }
.kinky-fx-marquee > *      { flex-shrink: 0; animation: kinky-marquee 30s linear infinite }
@keyframes kinky-marquee   { from { transform: translateX(0) } to { transform: translateX(-100%) } }
.kinky-fx-ticker           { white-space: nowrap; overflow: hidden }
.kinky-fx-ticker > *       { display: inline-block; padding-left: 100%; animation: kinky-marquee 25s linear infinite }
.kinky-fx-skew-on-scroll   { transition: transform .6s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-skew-on-scroll.kinky-fx-active { transform: skewY(-2deg) }
.kinky-fx-perspective-tilt { perspective: 1000px }
.kinky-fx-perspective-tilt > * { transform: rotateX(8deg); transition: transform 1s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-perspective-tilt.kinky-fx-active > * { transform: rotateX(0) }
.kinky-fx-spotlight        { background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(217,70,239,.18) 0, transparent 30%) }
.kinky-fx-mask-reveal      { -webkit-mask: linear-gradient(90deg, #000 var(--rev,0%), transparent var(--rev,0%)); transition: -webkit-mask .9s ease-out }
.kinky-fx-mask-reveal.kinky-fx-active { --rev: 100% }
.kinky-fx-clip-reveal      { clip-path: inset(0 100% 0 0); transition: clip-path .9s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-clip-reveal.kinky-fx-active { clip-path: inset(0 0 0 0) }
.kinky-fx-wave-reveal      { -webkit-mask: radial-gradient(circle at center, #000 var(--r,0%), transparent var(--r,0%)); transition: -webkit-mask 1s ease-out }
.kinky-fx-wave-reveal.kinky-fx-active { --r: 150% }
.kinky-fx-rotate-on-scroll { transition: transform 1.2s linear }
.kinky-fx-rotate-on-scroll.kinky-fx-active { transform: rotate(360deg) }

/* ─── TEXT ──────────────────────────────────────── */
.kinky-fx-typewriter       { overflow: hidden; white-space: nowrap; border-right: 2px solid currentColor; animation: kinky-typewriter 3s steps(40) forwards, kinky-blink-caret 0.6s step-end infinite }
@keyframes kinky-typewriter{ from { width: 0 } to { width: 100% } }
@keyframes kinky-blink-caret { 50% { border-color: transparent } }
.kinky-fx-glitch           { position: relative; animation: kinky-glitch 2.5s infinite }
@keyframes kinky-glitch    { 0%,90%,100% { text-shadow: 0 0 0 currentColor } 92% { text-shadow: -2px 0 #f0f, 2px 0 #0ff } 94% { text-shadow: 2px 0 #f0f, -2px 0 #0ff } 96% { text-shadow: -2px 0 #ff0, 2px 0 #0f0 } }
.kinky-fx-gradient-flow    { background: linear-gradient(90deg, #d946ef, #06b6d4, #f59e0b, #d946ef); background-size: 300% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: kinky-gradient-flow 6s linear infinite }
@keyframes kinky-gradient-flow { from { background-position: 0% 0 } to { background-position: 300% 0 } }
.kinky-fx-neon-glow        { color: #fff; text-shadow: 0 0 6px #d946ef, 0 0 12px #d946ef, 0 0 24px rgba(217,70,239,.6); animation: kinky-neon-flicker 3s infinite alternate }
@keyframes kinky-neon-flicker { 0%,80%,100% { text-shadow: 0 0 6px #d946ef, 0 0 12px #d946ef } 85% { text-shadow: none } 90% { text-shadow: 0 0 6px #d946ef } }
.kinky-fx-fire-text        { background: linear-gradient(180deg, #fff 0%, #ffd54a 30%, #ff6b00 60%, #b91c1c 100%); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 8px rgba(255,107,0,.4)); animation: kinky-fire 1.5s ease-in-out infinite alternate }
@keyframes kinky-fire      { from { filter: drop-shadow(0 0 6px rgba(255,107,0,.3)) } to { filter: drop-shadow(0 -3px 12px rgba(255,170,0,.7)) } }
.kinky-fx-water-text       { background: linear-gradient(135deg, #06b6d4, #67e8f9, #06b6d4); background-size: 200% 200%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: kinky-water 4s ease-in-out infinite }
@keyframes kinky-water     { 0%,100% { background-position: 0 50% } 50% { background-position: 100% 50% } }
.kinky-fx-shadow-dance     { animation: kinky-shadow-dance 4s ease-in-out infinite }
@keyframes kinky-shadow-dance { 0%,100% { text-shadow: 4px 4px 0 #d946ef } 25% { text-shadow: -4px 4px 0 #06b6d4 } 50% { text-shadow: -4px -4px 0 #f59e0b } 75% { text-shadow: 4px -4px 0 #10b981 } }
.kinky-fx-split-letters    { perspective: 600px }
.kinky-fx-scramble         { font-family: monospace }
.kinky-fx-marquee-text     { display: inline-block; white-space: nowrap; animation: kinky-marquee 12s linear infinite }
.kinky-fx-fade-letters > span,
.kinky-fx-slide-letters > span,
.kinky-fx-bounce-letters > span,
.kinky-fx-wave-letters > span { display: inline-block }
.kinky-fx-fade-letters.kinky-fx-active > span    { animation: kinky-fade-in .5s ease-out both }
.kinky-fx-slide-letters.kinky-fx-active > span   { animation: kinky-fade-up .5s cubic-bezier(.2,.8,.2,1) both }
.kinky-fx-bounce-letters.kinky-fx-active > span  { animation: kinky-bounce-in .8s cubic-bezier(.68,-0.55,.27,1.55) both }
.kinky-fx-wave-letters > span { animation: kinky-wave-letter 1.6s ease-in-out infinite }
@keyframes kinky-wave-letter { 0%,40%,100% { transform: translateY(0) } 20% { transform: translateY(-10px) } }
.kinky-fx-text-3d          { color: #fff; text-shadow: 1px 1px 0 #b91c1c, 2px 2px 0 #991b1b, 3px 3px 0 #7f1d1d, 4px 4px 0 #59122e, 5px 5px 10px rgba(0,0,0,.4) }

/* ─── BACKGROUND ────────────────────────────────── */
.kinky-fx-gradient-anime   { background: linear-gradient(125deg, #d946ef, #8b5cf6, #06b6d4, #10b981, #d946ef); background-size: 400% 400%; animation: kinky-bg-flow 18s ease infinite }
@keyframes kinky-bg-flow   { 0%,100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
.kinky-fx-mesh-gradient    { background:
  radial-gradient(at 27% 37%, hsla(295,98%,61%,1) 0, transparent 50%),
  radial-gradient(at 97% 21%, hsla(189,98%,61%,1) 0, transparent 50%),
  radial-gradient(at 52% 99%, hsla(354,98%,61%,1) 0, transparent 50%),
  radial-gradient(at 10% 29%, hsla(256,96%,67%,1) 0, transparent 50%),
  radial-gradient(at 97% 96%, hsla(38,99%,67%,1) 0, transparent 50%);
  animation: kinky-mesh-rotate 25s linear infinite }
@keyframes kinky-mesh-rotate { from { filter: hue-rotate(0) } to { filter: hue-rotate(360deg) } }
.kinky-fx-particles-bg     { position: relative; overflow: hidden }
.kinky-fx-particles-bg::before { content: ''; position: absolute; inset: 0; background-image: radial-gradient(circle, rgba(255,255,255,.6) 1px, transparent 1px); background-size: 50px 50px; animation: kinky-drift 30s linear infinite }
@keyframes kinky-drift     { from { background-position: 0 0 } to { background-position: 50px 50px } }
.kinky-fx-waves-bg         { background: linear-gradient(0deg, #06b6d4, #0e7490); position: relative; overflow: hidden }
.kinky-fx-waves-bg::before { content: ''; position: absolute; bottom: 0; left: -50%; width: 200%; height: 60px; background: radial-gradient(ellipse at center, rgba(255,255,255,.3) 30%, transparent 70%); animation: kinky-wave 6s ease-in-out infinite }
@keyframes kinky-wave      { 0%,100% { transform: translateX(0) } 50% { transform: translateX(-25%) } }
.kinky-fx-aurora           { background:
  radial-gradient(at 20% 30%, rgba(217,70,239,.5) 0, transparent 60%),
  radial-gradient(at 80% 50%, rgba(6,182,212,.5) 0, transparent 60%),
  radial-gradient(at 40% 80%, rgba(16,185,129,.4) 0, transparent 60%),
  #0a0a0f;
  animation: kinky-aurora 18s ease infinite alternate }
@keyframes kinky-aurora    { from { filter: hue-rotate(0) blur(0) } to { filter: hue-rotate(60deg) blur(2px) } }
.kinky-fx-noise-bg         { position: relative }
.kinky-fx-noise-bg::after  { content: ''; position: absolute; inset: 0; background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>"); opacity: .15; pointer-events: none; mix-blend-mode: overlay }
.kinky-fx-grid-anime       { background-image: linear-gradient(rgba(217,70,239,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(217,70,239,.2) 1px, transparent 1px); background-size: 40px 40px; animation: kinky-grid-move 8s linear infinite }
@keyframes kinky-grid-move { from { background-position: 0 0 } to { background-position: 40px 40px } }
.kinky-fx-dots-flow        { background-image: radial-gradient(circle, rgba(217,70,239,.3) 2px, transparent 2px); background-size: 30px 30px; animation: kinky-grid-move 10s linear infinite }
.kinky-fx-lines-flow       { background: repeating-linear-gradient(135deg, transparent 0 18px, rgba(217,70,239,.12) 18px 20px); animation: kinky-lines 12s linear infinite }
@keyframes kinky-lines     { from { background-position: 0 0 } to { background-position: 60px 60px } }
.kinky-fx-blob-bg          { position: relative; overflow: hidden; background: #0a0a0f }
.kinky-fx-blob-bg::before  { content: ''; position: absolute; width: 60%; height: 60%; background: radial-gradient(circle, #d946ef, transparent 70%); top: -20%; left: -10%; filter: blur(60px); animation: kinky-blob 18s ease-in-out infinite alternate }
.kinky-fx-blob-bg::after   { content: ''; position: absolute; width: 60%; height: 60%; background: radial-gradient(circle, #06b6d4, transparent 70%); bottom: -20%; right: -10%; filter: blur(60px); animation: kinky-blob 22s ease-in-out infinite alternate-reverse }
@keyframes kinky-blob      { from { transform: translate(0,0) scale(1) } to { transform: translate(20%, 15%) scale(1.2) } }
.kinky-fx-ripple-bg        { background: radial-gradient(circle at center, rgba(217,70,239,.3) 0, transparent 50%); animation: kinky-ripple-bg 4s ease-out infinite }
@keyframes kinky-ripple-bg { 0% { background-size: 0% 0% } 100% { background-size: 200% 200%; opacity: 0 } }
.kinky-fx-smoke-bg         { background:
  radial-gradient(ellipse at 30% 70%, rgba(217,70,239,.3) 0, transparent 60%),
  radial-gradient(ellipse at 70% 30%, rgba(6,182,212,.25) 0, transparent 60%),
  #0a0a0f;
  filter: blur(0); animation: kinky-smoke 14s ease-in-out infinite alternate }
@keyframes kinky-smoke     { from { filter: hue-rotate(0) } to { filter: hue-rotate(40deg) } }
.kinky-fx-geometric        { background:
  conic-gradient(from 0deg, #d946ef, #06b6d4, #f59e0b, #10b981, #d946ef);
  filter: blur(40px) }
.kinky-fx-halftone         { background-image: radial-gradient(circle, #000 30%, transparent 30%); background-size: 8px 8px; background-color: #fff }
.kinky-fx-glitch-bg        { animation: kinky-glitch-bg 0.3s steps(2) infinite }
@keyframes kinky-glitch-bg { 0%,100% { transform: translate(0) } 25% { transform: translate(-2px, 1px) } 50% { transform: translate(1px, -2px) } 75% { transform: translate(-1px, 2px) } }

/* ─── CARD ──────────────────────────────────────── */
.kinky-fx-card-tilt-3d     { transition: transform .35s cubic-bezier(.2,.8,.2,1); transform-style: preserve-3d }
.kinky-fx-card-tilt-3d:hover { transform: perspective(1000px) rotateX(6deg) rotateY(-8deg) translateY(-4px) }
.kinky-fx-magic-card       { position: relative; isolation: isolate; background: #0a0a0f; border-radius: 16px }
.kinky-fx-magic-card::before { content: ''; position: absolute; inset: -2px; border-radius: inherit; background: conic-gradient(from var(--ang,0deg), #d946ef, #06b6d4, #f59e0b, #d946ef); animation: kinky-rotate-conic 6s linear infinite; z-index: -1 }
@keyframes kinky-rotate-conic { from { --ang: 0deg } to { --ang: 360deg } }
@property --ang { syntax: '<angle>'; initial-value: 0deg; inherits: false }
.kinky-fx-gradient-border  { padding: 2px; background: linear-gradient(135deg, #d946ef, #06b6d4, #f59e0b); background-size: 300% 300%; border-radius: 16px; animation: kinky-bg-flow 6s ease infinite }
.kinky-fx-holographic      { background: linear-gradient(135deg, rgba(217,70,239,.2), rgba(6,182,212,.2), rgba(245,158,11,.2)); background-size: 200% 200%; animation: kinky-bg-flow 8s ease infinite; box-shadow: 0 0 30px rgba(217,70,239,.3), inset 0 0 30px rgba(6,182,212,.2) }
.kinky-fx-glow-border      { box-shadow: 0 0 0 2px rgba(217,70,239,.5), 0 0 16px rgba(217,70,239,.4); animation: kinky-glow-pulse 2.5s ease-in-out infinite }
@keyframes kinky-glow-pulse { 0%,100% { box-shadow: 0 0 0 2px rgba(217,70,239,.5), 0 0 16px rgba(217,70,239,.4) } 50% { box-shadow: 0 0 0 2px rgba(217,70,239,.7), 0 0 32px rgba(217,70,239,.7) } }
.kinky-fx-lift-shadow      { transition: transform .35s, box-shadow .35s }
.kinky-fx-lift-shadow:hover { transform: translateY(-8px); box-shadow: 0 30px 60px -15px rgba(0,0,0,.5) }
.kinky-fx-flip-3d          { perspective: 1000px }
.kinky-fx-flip-3d > *      { transition: transform .8s; transform-style: preserve-3d }
.kinky-fx-flip-3d:hover > *{ transform: rotateY(180deg) }
.kinky-fx-stack-3d         { transition: transform .35s; transform: perspective(800px) rotateY(-4deg) translateZ(0) }
.kinky-fx-stack-3d:hover   { transform: perspective(800px) rotateY(0deg) translateZ(20px) }
.kinky-fx-fold             { transition: transform .5s }
.kinky-fx-fold:hover       { transform: perspective(800px) rotateX(-15deg) }
.kinky-fx-wobble:hover     { animation: kinky-wobble 1s ease-in-out }
@keyframes kinky-wobble    { 0%,100% { transform: rotate(0) } 25% { transform: rotate(2deg) } 75% { transform: rotate(-2deg) } }

/* ─── TRANSITION ────────────────────────────────── */
.kinky-fx-morph            { animation: kinky-morph 8s ease-in-out infinite }
@keyframes kinky-morph     { 0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40% } 50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60% } }
.kinky-fx-page-curl        { position: relative }
.kinky-fx-page-curl::after { content: ''; position: absolute; right: 0; bottom: 0; width: 0; height: 0; border-style: solid; border-width: 0 30px 30px 0; border-color: transparent rgba(0,0,0,.2) rgba(255,255,255,.2) transparent; transition: border-width .35s }
.kinky-fx-page-curl:hover::after { border-width: 0 60px 60px 0 }
.kinky-fx-slide-overlay    { position: relative; overflow: hidden }
.kinky-fx-slide-overlay::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #d946ef, #06b6d4); transform: translateY(100%); transition: transform .5s cubic-bezier(.2,.8,.2,1) }
.kinky-fx-slide-overlay:hover::before { transform: translateY(0) }
.kinky-fx-dissolve.kinky-fx-active { animation: kinky-dissolve 1s ease-out }
@keyframes kinky-dissolve  { 0% { opacity: 0; filter: blur(15px) brightness(2) } 100% { opacity: 1; filter: blur(0) brightness(1) } }
.kinky-fx-mask-cut.kinky-fx-active { animation: kinky-mask-cut 1s ease-out both }
@keyframes kinky-mask-cut  { 0% { clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%) } 100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) } }
.kinky-fx-ripple-transition.kinky-fx-active { animation: kinky-wave-reveal 1.2s ease-out both }
@keyframes kinky-wave-reveal { 0% { -webkit-mask: radial-gradient(circle at 50% 50%, #000 0%, transparent 0%) } 100% { -webkit-mask: radial-gradient(circle at 50% 50%, #000 100%, transparent 100%) } }
.kinky-fx-zoom-fade.kinky-fx-active { animation: kinky-zoom-fade 0.9s cubic-bezier(.2,.8,.2,1) both }
@keyframes kinky-zoom-fade { 0% { opacity: 0; transform: scale(1.2) } 100% { opacity: 1; transform: scale(1) } }
.kinky-fx-blur-fade.kinky-fx-active { animation: kinky-blur-fade 1s ease-out both }
@keyframes kinky-blur-fade { 0% { opacity: 0; filter: blur(40px) } 100% { opacity: 1; filter: blur(0) } }
.kinky-fx-push-pull.kinky-fx-active { animation: kinky-push-pull .9s cubic-bezier(.2,.8,.2,1) both }
@keyframes kinky-push-pull { 0% { transform: translateX(-100%) scale(.8) } 100% { transform: translateX(0) scale(1) } }
.kinky-fx-kaleidoscope     { animation: kinky-kaleidoscope 8s ease-in-out infinite }
@keyframes kinky-kaleidoscope { 0%,100% { filter: hue-rotate(0) saturate(1) } 50% { filter: hue-rotate(180deg) saturate(2) } }

/* prefers-reduced-motion : on coupe les animations infinies */
@media (prefers-reduced-motion: reduce) {
  [class*="kinky-fx-"] { animation: none !important; transition: none !important }
}
`;
