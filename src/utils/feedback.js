// src/utils/feedback.js

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  return audioCtx;
}

/**
 * Procedural synth using Web Audio API
 */
function playSynth(type, frequency, duration, volume = 0.1) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Resume context if suspended (common browser policy)
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn('Audio play failed:', e);
  }
}

/**
 * Procedural typing sound (soft click/noise)
 */
function playNoise(duration, volume = 0.1) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to make it sound more like a "click" and less harsh
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 1000;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noise.start();
  } catch (e) {
    console.warn('Audio play failed:', e);
  }
}

// Predefined sound effects
export const soundFx = {
  click: () => playSynth('sine', 800, 0.05, 0.05),
  type: () => playNoise(0.02, 0.02), // Soft highpass noise for typing
  success: () => {
    playSynth('sine', 523.25, 0.1, 0.1); // C5
    setTimeout(() => playSynth('sine', 659.25, 0.2, 0.1), 100); // E5
    setTimeout(() => playSynth('sine', 783.99, 0.4, 0.1), 200); // G5
  },
  error: () => {
    playSynth('sawtooth', 150, 0.2, 0.1);
    setTimeout(() => playSynth('sawtooth', 100, 0.3, 0.1), 150);
  },
  levelUp: () => {
    playSynth('sine', 523.25, 0.2, 0.1); // C5
    setTimeout(() => playSynth('sine', 659.25, 0.2, 0.1), 150); // E5
    setTimeout(() => playSynth('sine', 783.99, 0.2, 0.1), 300); // G5
    setTimeout(() => playSynth('sine', 1046.50, 0.5, 0.1), 450); // C6
  }
};

// Haptic feedback (Vibration API)
export const haptics = {
  light: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(10);
  },
  medium: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(30);
  },
  heavy: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate(50);
  },
  success: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([20, 50, 20]);
  },
  error: () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) navigator.vibrate([50, 100, 50]);
  }
};
