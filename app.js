// ── Condition data ──────────────────────────────
// faces: cycled by shuffle — includes flower eyes ❀ ✿ ⚘ ❁ where fitting
// palettes: radial gradient, centre → edge
// orns: mixed weather symbols + insects (ψ ⋈ ≋ φ) + flowers (❀ ✿ ⚘ ❁)

const CONDITIONS = {
  clear: {
    label: 'Clear',
    faces: [
      { eyes: '^',  mouth: '  ‿  ' },
      { eyes: '❀',  mouth: '  ‿  ' },
      { eyes: '~',  mouth: '  ‿  ' },
      { eyes: '✿',  mouth: '  ‿  ' },
      { eyes: '*',  mouth: '  ‿  ' },
      { eyes: '⚘',  mouth: '  ‿  ' },
    ],
    palettes: [
      ['#FFBA08', '#F4A261', '#cc5500', '#6B2800'],
      ['#FFD166', '#F8961E', '#E76F51', '#8B3A1A'],
      ['#FCA311', '#E07A00', '#B85C00', '#5C2500'],
    ],
    orns: ['❀', '·', '✿', '⊹', '·', '❁', '·', '⚘', '✦', '·', '❀', '✿'],
  },
  overcast: {
    label: 'Overcast',
    faces: [
      { eyes: '-',  mouth: '  _  ' },
      { eyes: '=',  mouth: '  _  ' },
      { eyes: '~',  mouth: '  _  ' },
      { eyes: '─',  mouth: '  _  ' },
      { eyes: 'ψ',  mouth: '  _  ' },
      { eyes: '·',  mouth: '  _  ' },
    ],
    palettes: [
      ['#9A8C98', '#4A4E69', '#2D2D44', '#0f0f1e'],
      ['#8B9EB7', '#4A5568', '#2D3748', '#111827'],
      ['#A0A0A0', '#606060', '#303030', '#101010'],
    ],
    orns: ['ψ', '·', '░', '≋', '·', '▒', '·', 'ψ', '░', '·', '≋', '·'],
  },
  rain: {
    label: 'Rain',
    faces: [
      { eyes: ';',  mouth: '  ⌣  ' },
      { eyes: 'T',  mouth: '  ⌣  ' },
      { eyes: ':',  mouth: '  ⌣  ' },
      { eyes: '⚘',  mouth: '  ⌣  ' },
      { eyes: '>',  mouth: '  <  ' },
      { eyes: '~',  mouth: '  ⌣  ' },
    ],
    palettes: [
      ['#A8DADC', '#457B9D', '#1D3557', '#06111f'],
      ['#90E0F0', '#2980B9', '#1A5276', '#0A2030'],
      ['#76B9C9', '#3A7CA5', '#1B4F72', '#071828'],
    ],
    orns: ['≋', '|', '·', '⌇', '≋', '|', '·', 'φ', '|', '⌇', '·', '≋'],
  },
  fog: {
    label: 'Fog',
    faces: [
      { eyes: '·',  mouth: '  ‿  ' },
      { eyes: '⚘',  mouth: '  ‿  ' },
      { eyes: 'o',  mouth: '  ‿  ' },
      { eyes: '❁',  mouth: '  ‿  ' },
      { eyes: '~',  mouth: '  ‿  ' },
      { eyes: '❀',  mouth: '  ‿  ' },
    ],
    palettes: [
      ['#E8E8E4', '#C9C9C0', '#8B8B7A', '#4a4a3a'],
      ['#DDDDD0', '#BCBCAD', '#787868', '#3a3a2a'],
      ['#EEEEE8', '#D0D0C0', '#969688', '#585848'],
    ],
    orns: ['⚘', '·', '░', '❁', '·', 'φ', '⚘', '·', '░', '❁', '·', '·'],
  },
  snow: {
    label: 'Snow',
    faces: [
      { eyes: '°',  mouth: '  o  ' },
      { eyes: '❄',  mouth: '  o  ' },
      { eyes: '*',  mouth: '  o  ' },
      { eyes: '✿',  mouth: '  ‿  ' },
      { eyes: '+',  mouth: '  o  ' },
      { eyes: '❀',  mouth: '  ‿  ' },
    ],
    palettes: [
      ['#E0F7FA', '#90E0EF', '#4a6fa5', '#1a2a40'],
      ['#F0F8FF', '#B0D8F0', '#6090C0', '#203050'],
      ['#DDEEFF', '#A8C8E8', '#5080A0', '#182838'],
    ],
    orns: ['❄', '·', '✿', '°', '⊹', '❁', '*', '°', '❄', '·', '✿', '*'],
  },
  storm: {
    label: 'Storm',
    faces: [
      { eyes: '☉',  mouth: '  ▽  ' },
      { eyes: '◎',  mouth: '  ▽  ' },
      { eyes: '⊙',  mouth: '  ▽  ' },
      { eyes: '⋈',  mouth: '  ▽  ' },
      { eyes: 'O',  mouth: '  ▽  ' },
      { eyes: '⊛',  mouth: '  ▽  ' },
    ],
    palettes: [
      ['#6B17A8', '#3C096C', '#10002B', '#000005'],
      ['#8B00FF', '#4B0082', '#1A0050', '#050010'],
      ['#9B27AF', '#5B0A7A', '#200040', '#080008'],
    ],
    orns: ['⚡', '⋈', '⚡', '·', '⌁', '⚡', 'ψ', '⋈', '⚡', '·', '⌁', '⚡'],
  },
};

const POETRY = {
  clear: [
    // hope
    'the light arrived without asking',
    'something warm remembers you',
    'every surface is being given a second chance',
    // wonder
    'who taught the light to move like that',
    'the sun has opinions about your skin',
    // stillness
    'just this. just now. just warm.',
    // despair
    'even brightness is a kind of waiting',
    'the light is very beautiful and will not stay',
    // absurdity
    'the sun has been running this exact route for four billion years and still shows up',
    'optimal conditions. whatever that means.',
    'something is happening and it might be good',
    // desire
    'you are being heated from the outside in',
  ],
  overcast: [
    // stillness
    'the sky is practising patience',
    'nothing is happening. this counts.',
    // despair
    'grey is not absence. grey is held breath',
    'the light has gone somewhere private',
    'this is the colour of a day that has given up on being remarkable',
    // hope
    'something is coming. stay soft',
    'the clouds are thinking about you',
    // absurdity
    'the clouds are in a meeting. agenda unknown.',
    'the sun is still there. statistically.',
    'the sky has committed to a vibe and is seeing it through',
    // uncertainty
    'maybe it will pass. maybe this is the whole day.',
    'it is neither one thing nor the other and that is fine',
  ],
  rain: [
    // hope
    'everything is being rinsed',
    'water knows where it is going',
    // stillness
    'let it land on you',
    // wonder
    'where does the water go when it remembers it is the ocean',
    'the rain has been rehearsing this since before you were born',
    // despair
    'the sky is crying. it has been at this for hours.',
    'something is being washed away that you needed',
    'even the air is wet with something unresolved',
    // absurdity
    'the rain does not know your plans',
    'you are mostly water. you should feel at home.',
    'it is raining on everything equally and without preference',
    // uncertainty
    'is this sadness or just weather',
  ],
  fog: [
    // wonder
    'breathe in what you cannot see',
    'the world is practising being a secret',
    // despair
    'the edge of the world has moved closer',
    'you are not lost. the map has dissolved.',
    'something at the periphery has gone soft',
    // hope
    'you are not lost. you are arriving differently.',
    // stillness
    'visibility: sufficient',
    // absurdity
    'your outline is becoming optional',
    'the fog does not care what is inside it',
    'everything is here somewhere, approximately',
    // uncertainty
    'you cannot see very far and maybe that is information',
  ],
  snow: [
    // hope
    'begin again, under white',
    'every surface is being given a second chance',
    // stillness
    'even the streets are hushed now',
    'the air is forgetting to be loud',
    // wonder
    'something is being covered gently',
    'the sky is malfunctioning beautifully',
    // despair
    'the cold has opinions about staying',
    'things are being buried quietly and without announcement',
    // absurdity
    'it is raining very slowly and very wrongly',
    'the sky ran out of ideas and defaulted to white',
    'it might stop. it might not. it is doing its thing.',
    // uncertainty
    'underneath all this, something is still alive',
  ],
  storm: [
    // wonder
    '⚡ you are standing inside a living thing',
    '⚡ the sky has an opinion and it is very loud',
    '⚡ the thunder is the atmosphere being surprised by itself',
    // hope
    '⚡ after this, the air will remember how to be clean',
    '⚡ here it comes. stay open.',
    // despair
    '⚡ even the sky is breaking open today',
    '⚡ something has been held too long and is releasing now',
    // stillness
    '⚡ count the seconds. it is not far.',
    // absurdity
    '⚡ lightning is just the sky doing its stretches',
    '⚡ the thunder does not need your attention but it has it',
    '⚡ somewhere, someone left a window open',
    // uncertainty
    '⚡ something has decided and you do not know what yet',
    '⚡ the thunder remembers something you forgot',
  ],
};

// ── Shuffle state ───────────────────────────────

let _currentKey = 'overcast';

const _idx = {
  clear: { face: 0, palette: 0 },
  overcast: { face: 0, palette: 0 },
  rain: { face: 0, palette: 0 },
  fog: { face: 0, palette: 0 },
  snow: { face: 0, palette: 0 },
  storm: { face: 0, palette: 0 },
};

// ── Helpers ─────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function codeToKey(code) {
  if (code <= 1)  return 'clear';
  if (code <= 3)  return 'overcast';
  if (code <= 48) return 'fog';
  if (code <= 67) return 'rain';
  if (code <= 77) return 'snow';
  if (code <= 82) return 'rain';
  if (code <= 86) return 'snow';
  return 'storm';
}

function capeToThunder(cape, code) {
  let pct;
  if (cape < 100)       pct = Math.round(cape / 100 * 5);
  else if (cape < 500)  pct = Math.round(5  + (cape - 100)  / 400  * 20);
  else if (cape < 1000) pct = Math.round(25 + (cape - 500)  / 500  * 25);
  else if (cape < 2000) pct = Math.round(50 + (cape - 1000) / 1000 * 30);
  else                  pct = Math.min(95, Math.round(80 + (cape - 2000) / 500 * 15));
  if (code >= 95) pct = Math.max(pct, 75);
  return pct;
}

function uvBar(uv) {
  const filled = Math.min(10, Math.round((uv / 11) * 10));
  return '☀ ' + '█'.repeat(filled) + '░'.repeat(10 - filled) + '  uv ' + uv.toFixed(1);
}

function setStatus(msg) {
  document.getElementById('status').textContent = msg;
}

// ── Background ──────────────────────────────────

function setGradient(palette) {
  const bg = document.querySelector('.bg');
  bg.style.setProperty('--c1', palette[0]);
  bg.style.setProperty('--c2', palette[1]);
  bg.style.setProperty('--c3', palette[2]);
  bg.style.setProperty('--c4', palette[3]);
}

// ── Body texture ────────────────────────────────

function generateTexture() {
  const el = document.getElementById('body-texture');
  if (!el) return;
  const rows = 32, cols = 58;
  let text = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rnd = Math.random();
      if      (rnd < 0.04)  text += '░';
      else if (rnd < 0.055) text += '▒';
      else if (rnd < 0.07)  text += '·';
      else                  text += ' ';
    }
    text += '\n';
  }
  el.textContent = text;
}

// ── Scatter canvas ──────────────────────────────

function initScatter() {
  const canvas = document.getElementById('scatter');
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 700; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const a = Math.random() * 0.55 + 0.1;
      const s = Math.random() < 0.82 ? 1 : 2;
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fillRect(x, y, s, s);
    }
  }

  window.addEventListener('resize', resize);
  resize();
  setInterval(draw, 3500);
}

// ── Twinkling ASCII dots ─────────────────────────

function initTwinkle() {
  const layer = document.getElementById('twinkle-layer');
  const chars = ['.', '·', '°', '∘', '.', '·', '·', '.', '°', '*', '+', '.', '·', '°', '.'];
  const count = 60;

  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.className = 'twinkle';
    s.textContent = chars[Math.floor(Math.random() * chars.length)];
    s.style.left             = `${Math.random() * 100}%`;
    s.style.top              = `${Math.random() * 100}%`;
    s.style.fontSize         = `${0.45 + Math.random() * 0.55}rem`;
    s.style.animationDuration = `${2.5 + Math.random() * 6}s`;
    s.style.animationDelay   = `${Math.random() * 7}s`;
    layer.appendChild(s);
  }
}

// ── Ornaments ───────────────────────────────────

const ORN_POSITIONS = [
  { top: '8%',  left:  '6%'  },
  { top: '22%', left:  '4%'  },
  { top: '55%', left:  '5%'  },
  { top: '78%', left:  '8%'  },
  { top: '12%', right: '7%'  },
  { top: '38%', right: '5%'  },
  { top: '65%', right: '7%'  },
  { top: '85%', right: '10%' },
  { top: '88%', left:  '28%' },
  { top: '90%', right: '28%' },
  { top: '4%',  left:  '38%' },
  { top: '4%',  right: '38%' },
];

function placeOrnaments(orns) {
  const el = document.getElementById('ornaments');
  el.innerHTML = '';
  ORN_POSITIONS.forEach((pos, i) => {
    const s = document.createElement('span');
    s.className = 'orn';
    s.textContent = orns[i % orns.length];
    Object.assign(s.style, pos);
    s.style.animationDuration = `${5 + Math.random() * 7}s`;
    s.style.animationDelay   = `${Math.random() * 5}s`;
    el.appendChild(s);
  });
}

// ── Face ────────────────────────────────────────

function setFace(face) {
  document.getElementById('left-eye').textContent   = face.eyes;
  document.getElementById('face-mouth').textContent = face.mouth;
  document.getElementById('right-eye').textContent  = face.eyes;
  startBlink(face.eyes);
}

// ── Blink ───────────────────────────────────────

let _blinkTimer = null;

function startBlink(eyeChar) {
  clearTimeout(_blinkTimer);

  function doBlink() {
    const L = document.getElementById('left-eye');
    const R = document.getElementById('right-eye');
    if (!L || !R) return;
    L.textContent = '_';
    R.textContent = '_';
    setTimeout(() => {
      L.textContent = eyeChar;
      R.textContent = eyeChar;
    }, 110);
    _blinkTimer = setTimeout(doBlink, 3500 + Math.random() * 5000);
  }

  _blinkTimer = setTimeout(doBlink, 1500 + Math.random() * 3000);
}

// ── Thunder ─────────────────────────────────────

let _thunderTimer = null;

function startThunder() {
  if (_thunderTimer) return;

  function fire() {
    const flash = document.getElementById('flash');
    const main  = document.querySelector('main');

    flash.classList.remove('on');
    void flash.offsetWidth;
    flash.classList.add('on');

    main.classList.remove('shaking');
    void main.offsetWidth;
    main.classList.add('shaking');

    setTimeout(() => flash.classList.remove('on'),     600);
    setTimeout(() => main.classList.remove('shaking'), 500);

    _thunderTimer = setTimeout(fire, 15000 + Math.random() * 30000);
  }

  _thunderTimer = setTimeout(fire, 2000 + Math.random() * 8000);
}

function stopThunder() {
  clearTimeout(_thunderTimer);
  _thunderTimer = null;
}

// ── Shuffle ─────────────────────────────────────

function shuffle() {
  const key  = _currentKey;
  const cond = CONDITIONS[key];
  const s    = _idx[key];

  s.face    = (s.face    + 1) % cond.faces.length;
  s.palette = (s.palette + 1) % cond.palettes.length;

  setFace(cond.faces[s.face]);
  setGradient(cond.palettes[s.palette]);
  document.getElementById('poem').textContent = pick(POETRY[key]);

  const btn = document.getElementById('shuffle-btn');
  btn.classList.remove('fired');
  void btn.offsetWidth;
  btn.classList.add('fired');
}

// ── UI ──────────────────────────────────────────

function updateUI({ key, temp, rain, thunder, uv, lat, lon, place }) {
  const cond  = CONDITIONS[key];
  _currentKey = key;

  _idx[key].face    = 0;
  _idx[key].palette = 0;

  setGradient(cond.palettes[0]);
  placeOrnaments(cond.orns);
  setFace(cond.faces[0]);

  document.getElementById('temp').textContent          = `${Math.round(temp)}°`;
  document.getElementById('cond').textContent          = cond.label;
  document.getElementById('rain').textContent          = `🌧 ${rain}%`;
  document.getElementById('uv').textContent            = uvBar(uv);
  document.getElementById('poem').textContent          = pick(POETRY[key]);
  document.getElementById('place-display').textContent = place;
  document.getElementById('coords').textContent        = `${lat.toFixed(4)}, ${lon.toFixed(4)}`;

  const tEl  = document.getElementById('thunder');
  tEl.textContent = `⚡ ${thunder}%`;
  const isHot = thunder >= 20 || key === 'storm';
  tEl.classList.toggle('hot', isHot);

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  setStatus(`live · open-meteo.com · ${time}`);

  if (isHot) startThunder();
  else stopThunder();
}

// ── Fetch ───────────────────────────────────────

async function geocode(name) {
  const res  = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=en&format=json`
  );
  const data = await res.json();
  return data.results ?? [];
}

async function fetchWeather(location) {
  let results = await geocode(location);
  if (!results.length && location.includes(',')) {
    results = await geocode(location.split(',')[0].trim());
  }
  if (!results.length) throw new Error('Location not found');

  const { latitude: lat, longitude: lon, name, country_code } = results[0];

  const wRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weathercode,precipitation_probability` +
    `&hourly=cape,uv_index&timezone=auto&forecast_days=1`
  );
  const wData = await wRes.json();

  const cur  = wData.current;
  const code = cur.weathercode;
  const temp = cur.temperature_2m;
  const rain = cur.precipitation_probability ?? 0;
  const hour = new Date().getHours();
  const cape = wData.hourly?.cape?.[hour]     ?? 0;
  const uv   = wData.hourly?.uv_index?.[hour] ?? 0;

  return {
    key:     codeToKey(code),
    temp, rain, uv, lat, lon,
    thunder: capeToThunder(cape, code),
    place:   `${name}, ${country_code?.toUpperCase() ?? ''}`,
  };
}

// ── Load ────────────────────────────────────────

async function load(location) {
  document.getElementById('poem').textContent = '· · ·';
  document.getElementById('location-input').disabled = true;
  setStatus('connecting · open-meteo.com');

  try {
    const data = await fetchWeather(location);
    updateUI(data);
  } catch (e) {
    document.getElementById('poem').textContent = 'signal lost ·';
    setStatus('signal lost · try: python3 -m http.server 8080');
    console.error(e);
  } finally {
    document.getElementById('location-input').disabled = false;
  }
}

// ── Init ────────────────────────────────────────

initScatter();
initTwinkle();
generateTexture();

document.getElementById('search-btn').addEventListener('click', () => {
  const v = document.getElementById('location-input').value.trim();
  if (v) load(v);
});

document.getElementById('location-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const v = e.target.value.trim();
    if (v) load(v);
  }
});

document.getElementById('shuffle-btn').addEventListener('click', shuffle);

load('Shoreditch');
