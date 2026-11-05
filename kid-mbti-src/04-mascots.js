const SVG_HEAD = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"';

/* 通用零件 */
const face = (eyes, mouth, extra='') => `
  <ellipse cx="78" cy="112" rx="5" ry="6" fill="#3a2b33"/>
  <ellipse cx="122" cy="112" rx="5" ry="6" fill="#3a2b33"/>
  <circle cx="79.6" cy="110" r="1.9" fill="#fff"/>
  <circle cx="123.6" cy="110" r="1.9" fill="#fff"/>
  <ellipse cx="64" cy="124" rx="8" ry="4.6" fill="#ff9db4" opacity=".55"/>
  <ellipse cx="136" cy="124" rx="8" ry="4.6" fill="#ff9db4" opacity=".55"/>
  ${extra}
  ${mouth}`;
const MOUTH = {
  smile:'<path d="M92 126 q8 7 16 0" stroke="#3a2b33" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
  open:'<ellipse cx="100" cy="128" rx="6" ry="6.5" fill="#e0637f"/><ellipse cx="100" cy="131" rx="3.4" ry="2.6" fill="#ff9db4"/>',
  flat:'<path d="M93 128 h14" stroke="#3a2b33" stroke-width="2.6" stroke-linecap="round"/>',
  wow:'<ellipse cx="100" cy="128" rx="4.6" ry="5.4" fill="#3a2b33"/>',
  smirk:'<path d="M92 128 q9 6 16 -2" stroke="#3a2b33" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
  small:'<path d="M96 127 q4 4 8 0" stroke="#3a2b33" stroke-width="2.6" fill="none" stroke-linecap="round"/>'
};
const blush = (c='#ff9db4') => `
  <ellipse cx="64" cy="124" rx="8" ry="4.6" fill="${c}" opacity=".55"/>
  <ellipse cx="136" cy="124" rx="8" ry="4.6" fill="${c}" opacity=".55"/>`;
const body = (cloth, extra='') => `
  <path d="M64 152 q36 -12 72 0 l8 30 q-44 10 -88 0 z" fill="${cloth}"/>
  <circle cx="64" cy="168" r="9" fill="${cloth}"/>
  <circle cx="136" cy="168" r="9" fill="${cloth}"/>
  ${extra}`;
const neck = '<rect x="92" y="138" width="16" height="12" rx="5" fill="#ffd9c2"/>';

const MASCOTS = {
  /* ---- 分析家 NF/NT ---- */
  INTJ: () => `<svg ${SVG_HEAD}>
    <defs><linearGradient id="g-intj" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5c4b8a"/><stop offset="1" stop-color="#8b7bd8"/></linearGradient></defs>
    ${body('url(#g-intj)')}${neck}
    <path d="M60 108 q0 -52 40 -52 q40 0 40 52 q-6 -18 -18 -26 q-10 10 -22 8 q-16 -3 -22 6 q-10 6 -18 12z" fill="#2f2942"/>
    <path d="M56 104 q-4 -46 44 -46 q48 0 44 46 q-4 -20 -18 -30 q-14 14 -26 10 q-14 -3 -26 8 q-14 8 -18 12z" fill="#3b3355"/>
    <ellipse cx="100" cy="112" rx="42" ry="40" fill="#ffd9c2"/>
    <path d="M58 96 q10 -26 42 -26 q32 0 42 26 q-12 -12 -22 -8 q-12 5 -20 -1 q-12 -8 -22 1 q-12 6 -20 8z" fill="#3b3355"/>
    ${face(face, MOUTH.flat)}
    <g stroke="#3a2b33" stroke-width="2.2" fill="none"><circle cx="78" cy="112" r="13" stroke="#5b4b7a"/><circle cx="122" cy="112" r="13" stroke="#5b4b7a"/><path d="M91 112 h18"/></g>
    ${blush('#e9a0b8')}
    <path d="M140 156 l16 -34 l10 10 z" fill="#ffd166" stroke="#e0a92e" stroke-width="2" stroke-linejoin="round"/>
    <text x="152" y="140" font-size="11" fill="#7a5a00" font-family="monospace" transform="rotate(-58 152 140)">1</text>
    <rect x="46" y="150" width="26" height="18" rx="3" fill="#fff" stroke="#c9b8a8" stroke-width="2"/>
    <path d="M50 156 h18 M50 161 h12" stroke="#b9a89a" stroke-width="1.6"/>
    ${body('url(#g-intj)', '<path d="M100 158 v22" stroke="#fff" stroke-width="2.4" stroke-dasharray="3 3"/>')}
  </svg>`,

  INTP: () => `<svg ${SVG_HEAD}>
    ${body('#8ecae6')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M57 100 q4 -40 43 -40 q39 0 43 40 q-14 -12 -30 -8 q-16 4 -28 -2 q-14 -5 -28 10z" fill="#4a5a6a"/>
    <path d="M62 74 q14 -18 36 -18 q-10 8 -12 18 q-12 4 -24 0z" fill="#5b6b7b" opacity=".85"/>
    <path d="M60 92 q6 -22 40 -22 q34 0 40 22 q-14 -6 -24 -2 q-14 4 -26 0 q-14 -4 -30 2z" fill="#5b6b7b"/>
    ${face()}
    ${MOUTH.wow}
    <g stroke="#3a2b33" stroke-width="2.2" fill="rgba(255,255,255,.35)">
      <rect x="60" y="103" width="34" height="19" rx="6"/>
      <rect x="106" y="103" width="34" height="19" rx="6"/>
      <path d="M94 111 h12" stroke-width="2.4"/>
      <path d="M60 108 l-9 -5" stroke-width="2.2"/>
      <path d="M140 108 l9 -5" stroke-width="2.2"/>
    </g>
    <circle cx="70" cy="106" r="3" fill="#fff" opacity=".65"/>
    <circle cx="116" cy="106" r="3" fill="#fff" opacity=".65"/>
    <path d="M132 158 l16 -26" stroke="#3a2b33" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="152" cy="126" r="9" fill="rgba(124,92,255,.2)" stroke="#7c5cff" stroke-width="3.4"/>
    <circle cx="152" cy="126" r="4" fill="#c9b6ff"/>
  </svg>`,

  ENTJ: () => `<svg ${SVG_HEAD}>
    <path d="M64 152 q36 -12 72 0 l8 30 q-44 10 -88 0 z" fill="#3a4a6b"/>
    <circle cx="64" cy="168" r="9" fill="#3a4a6b"/><circle cx="136" cy="168" r="9" fill="#3a4a6b"/>
    <path d="M74 156 l26 12 l26 -12 l-4 8 l-22 10 l-22 -10z" fill="#fff" opacity=".85"/>
    <path d="M100 168 l-4 8 l4 6 l4 -6z" fill="#ffd166"/>
    ${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M57 100 q2 -42 43 -42 q41 0 43 42 q-12 -16 -30 -12 q-8 8 -18 6 q-14 -3 -22 3 q-10 1 -16 3z" fill="#2b2a36"/>
    <path d="M62 74 q16 -16 38 -14 q-12 6 -16 16 q-12 4 -22 -2z" fill="#3b3a4a" opacity=".9"/>
    ${face()}
    <path d="M66 96 q12 -7 24 -2" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M110 94 q12 -6 24 2" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${MOUTH.smirk}
    <path d="M148 158 v-34" stroke="#3a2b33" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M148 124 l16 6 l-16 6 z" fill="#ff7a59"/>
    <path d="M40 152 l12 -6 M40 152 l8 10" stroke="#ffd166" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  ENTP: () => `<svg ${SVG_HEAD}>
    ${body('#ffb703')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M55 100 q6 -42 45 -42 q39 0 45 42 q-8 -16 -22 -20 q-4 14 -18 12 q-14 -2 -24 4 q-16 4 -26 4z" fill="#7a4a2b"/>
    <path d="M60 92 q10 -30 40 -30 q30 0 40 30 q-10 -10 -22 -6 q-14 5 -26 -2 q-14 -6 -32 8z" fill="#8a5632"/>
    ${face()}
    <path d="M68 96 q10 -6 20 -1" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M112 95 q10 -5 20 1" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${MOUTH.open}
    <path d="M134 120 q10 0 12 8 q-9 3 -13 -3z" fill="#ff7a8a" opacity=".75"/>
    <g transform="rotate(20 152 150)">
      <rect x="140" y="142" width="26" height="14" rx="7" fill="#fff" stroke="#3a2b33" stroke-width="2.2"/>
      <path d="M146 149 h5 M158 149 h4" stroke="#ffd166" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M166 145 q6 4 0 8" stroke="#3a2b33" stroke-width="2" fill="none"/>
    </g>
    <text x="34" y="82" font-size="20" fill="#ff7a59" font-weight="bold">?</text>
    <text x="152" y="88" font-size="16" fill="#a98bff" font-weight="bold">!</text>
  </svg>`,

  INFJ: () => `<svg ${SVG_HEAD}>
    <defs><linearGradient id="g-infj" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f6b63"/><stop offset="1" stop-color="#6fae9f"/></linearGradient></defs>
    ${body('url(#g-infj)')}${neck}
    <path d="M56 106 q0 -56 44 -56 q44 0 44 56 q0 26 -10 40 q-8 -20 4 -40 q-12 12 -38 12 q-26 0 -38 -12 q12 20 4 40 q-10 -14 -10 -40z" fill="#2f2a3d"/>
    <ellipse cx="100" cy="112" rx="41" ry="39" fill="#ffd9c2"/>
    <path d="M59 100 q6 -34 41 -34 q35 0 41 34 q-12 -16 -26 -10 q-16 7 -30 0 q-14 -7 -26 10z" fill="#2f2a3d"/>
    ${face()}
    ${MOUTH.small}
    <path d="M120 130 q10 6 6 14 q-8 -2 -10 -10z" fill="#c9b6ff" opacity=".9"/>
    <text x="36" y="76" font-size="17" fill="#ffd166">★</text>
    <text x="150" y="70" font-size="13" fill="#a98bff">✦</text>
    <text x="44" y="150" font-size="11" fill="#ffd166">✦</text>
  </svg>`,

  INFP: () => `<svg ${SVG_HEAD}>
    ${body('#b39ddb')}${neck}
    <path d="M52 116 q-2 -60 48 -60 q50 0 48 60 q-2 34 -14 46 q0 -40 4 -56 q-16 14 -38 14 q-22 0 -38 -14 q4 16 4 56 q-12 -12 -14 -46z" fill="#8d6e63"/>
    <ellipse cx="100" cy="112" rx="40" ry="38" fill="#ffd9c2"/>
    <path d="M60 100 q6 -32 40 -32 q34 0 40 32 q-12 -14 -26 -8 q-16 6 -28 0 q-14 -6 -26 8z" fill="#8d6e63"/>
    ${face()}
    ${MOUTH.small}
    <path d="M62 74 q6 -14 14 -8 q-2 10 -8 14z" fill="#ffd166"/><path d="M62 74 q8 2 14 6" stroke="#fff" stroke-width="2" fill="none"/>
    <path d="M56 122 q-6 8 2 12" stroke="#8d6e63" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M144 118 q10 10 4 22 q-6 -8 -8 -14z" fill="#7ec8a9"/>
    <text x="146" y="72" font-size="14" fill="#ff8fb1">♪</text>
    <text x="34" y="96" font-size="12" fill="#a98bff">♫</text>
  </svg>`,

  ENFJ: () => `<svg ${SVG_HEAD}>
    ${body('#ff8fb1')}${neck}
    <path d="M54 110 q0 -56 46 -56 q46 0 46 56 q0 22 -8 34 q-6 -22 2 -40 q-16 12 -40 12 q-24 0 -40 -12 q8 18 2 40 q-8 -12 -8 -34z" fill="#e7a04d"/>
    <ellipse cx="100" cy="112" rx="41" ry="39" fill="#ffd9c2"/>
    <path d="M59 100 q8 -34 41 -34 q33 0 41 34 q-14 -16 -28 -8 q-14 8 -26 0 q-12 -8 -28 8z" fill="#e7a04d"/>
    ${face()}
    ${MOUTH.open}
    <path d="M62 66 q10 -12 18 -4 q-4 10 -10 12z" fill="#7ec8a9" opacity=".85"/>
    <path d="M78 68 q8 -10 14 -2 q-3 8 -8 10z" fill="#7ec8a9" opacity=".7"/>
    <g transform="rotate(-10 150 150)"><path d="M144 148 q10 -12 18 -2 q-6 12 -18 2z" fill="#ff5d8f"/>
    <path d="M144 148 q8 4 16 0" stroke="#fff" stroke-width="1.6" fill="none"/></g>
    <text x="34" y="150" font-size="15" fill="#ff8fb1">❤</text>
  </svg>`,

  /* ---- 外交家/守护者 SP/SJ ---- */
  ISTJ: () => `<svg ${SVG_HEAD}>
    ${body('#4a6fa5')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M57 102 q4 -42 43 -42 q39 0 43 42 q-14 -12 -30 -8 q-16 4 -28 -2 q-14 -6 -28 10z" fill="#2b2a36"/>
    <path d="M100 60 l-3 44 M74 66 q22 -8 26 4" stroke="#2b2a36" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${face()}
    ${MOUTH.flat}
    <rect x="74" y="104" width="20" height="16" rx="5" fill="none" stroke="#3a2b33" stroke-width="2.2"/>
    <rect x="108" y="104" width="20" height="16" rx="5" fill="none" stroke="#3a2b33" stroke-width="2.2"/>
    <path d="M94 111 h14" stroke="#3a2b33" stroke-width="2.2"/>
    <path d="M86 152 v22" stroke="#3a2b33" stroke-width="3"/>
    <circle cx="86" cy="152" r="4" fill="#ffd166"/>
    <g transform="rotate(6 150 150)">
      <rect x="138" y="138" width="26" height="32" rx="4" fill="#fff" stroke="#e0c9b0" stroke-width="2"/>
      <rect x="138" y="138" width="26" height="10" rx="4" fill="#4a6fa5"/>
      <path d="M144 155 h14 M144 161 h14 M144 167 h9" stroke="#c9b8a8" stroke-width="1.8"/>
      <path d="M150 150 v6" stroke="#4a6fa5" stroke-width="2"/>
      <path d="M145 157 l3 3 l6 -7" stroke="#3aa76d" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`,

  ISFJ: () => `<svg ${SVG_HEAD}>
    ${body('#f4a7bb')}${neck}
    <ellipse cx="100" cy="112" rx="42" ry="40" fill="#ffd9c2"/>
    <path d="M56 106 q2 -50 44 -50 q42 0 44 50 q-12 -18 -30 -14 q-14 4 -28 0 q-18 -4 -30 14z" fill="#5a4a3f"/>
    <path d="M60 96 q10 -30 40 -30 q30 0 40 30 q-14 -10 -28 -4 q-12 5 -24 0 q-14 -6 -28 4z" fill="#6b584a"/>
    ${face()}
    ${MOUTH.smile}
    <path d="M56 118 q-8 14 4 20" stroke="#5a4a3f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M144 118 q8 14 -4 20" stroke="#5a4a3f" stroke-width="7" fill="none" stroke-linecap="round"/>
    <g transform="rotate(-8 148 148)"><rect x="136" y="140" width="26" height="20" rx="6" fill="#fff" stroke="#e8c9d0" stroke-width="2"/>
    <path d="M149 140 v20" stroke="#e8c9d0" stroke-width="2"/><path d="M149 146 h-6 M149 152 h-6" stroke="#ffb3c9" stroke-width="2"/></g>
    <path d="M34 84 q6 -8 12 0 q-6 8 -12 0z" fill="#ffd166"/>
  </svg>`,

  ISTP: () => `<svg ${SVG_HEAD}>
    ${body('#5d6b73')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M56 104 q6 -44 44 -44 q38 0 44 44 q-10 -14 -24 -16 q-6 10 -16 8 q-14 -3 -22 2 q-14 2 -26 6z" fill="#3d4650"/>
    <path d="M104 62 q22 6 26 32 q-10 -20 -26 -26z" fill="#3d4650"/>
    ${face()}
    ${MOUTH.flat}
    <!-- 扳手 -->
    <g transform="rotate(-28 152 150)">
      <rect x="142" y="146" width="24" height="7" rx="3.5" fill="#cfd8dc" stroke="#78909c" stroke-width="1.6"/>
      <path d="M164 142 q8 0 8 7 q0 7 -8 7 l2 -7z" fill="#cfd8dc" stroke="#78909c" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M142 149.5 h-8" stroke="#c0392b" stroke-width="7" stroke-linecap="round"/>
    </g>
    <circle cx="52" cy="158" r="6" fill="none" stroke="#3a2b33" stroke-width="2.2"/>
    <circle cx="52" cy="158" r="2" fill="#3a2b33"/>
    <path d="M52 152 v-3 M52 167 v3 M46 158 h-3 M61 158 h3" stroke="#3a2b33" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  ISFP: () => `<svg ${SVG_HEAD}>
    ${body('#ffd166')}${neck}
    <path d="M54 112 q0 -58 46 -58 q46 0 46 58 q0 20 -6 34 q-4 -24 2 -42 q-16 12 -42 12 q-26 0 -42 -12 q6 18 2 42 q-6 -14 -6 -34z" fill="#7ec8a9"/>
    <ellipse cx="100" cy="112" rx="40" ry="38" fill="#ffd9c2"/>
    <path d="M60 100 q8 -32 40 -32 q32 0 40 32 q-12 -12 -26 -8 q-16 6 -28 0 q-12 -6 -26 8z" fill="#7ec8a9"/>
    ${face()}
    ${MOUTH.small}
    <path d="M58 70 q8 -12 16 -4 q-4 10 -10 12z" fill="#ff8fb1"/>
    <g transform="rotate(-20 152 146)">
      <rect x="144" y="140" width="20" height="7" rx="3.5" fill="#ff8fb1"/>
      <rect x="160" y="140" width="8" height="7" rx="2" fill="#a98bff"/>
      <path d="M164 140 l6 -6 l-4 6z" fill="#3a2b33"/>
      <rect x="140" y="152" width="24" height="8" rx="4" fill="#7ec8a9"/>
      <path d="M164 156 l8 0" stroke="#3a2b33" stroke-width="3" stroke-linecap="round"/>
    </g>
    <text x="32" y="146" font-size="14" fill="#ffd166">✿</text>
    <path d="M40 118 q6 -12 12 0 q-6 6 -12 0z" fill="#a98bff" opacity=".7"/>
  </svg>`,

  ESTP: () => `<svg ${SVG_HEAD}>
    ${body('#ff7a59')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M55 100 q8 -40 45 -40 q37 0 45 40 q-12 -12 -28 -10 q-4 12 -18 10 q-14 -2 -22 4 q-12 2 -22 -4z" fill="#5b3a2a"/>
    ${face()}
    <path d="M64 94 q12 -8 24 0" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M112 94 q12 -8 24 0" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${MOUTH.open}
    <path d="M84 132 q16 10 32 0" stroke="#fff" stroke-width="2.6" fill="none" opacity=".8"/>
    <g transform="rotate(-24 152 152)">
      <ellipse cx="152" cy="152" rx="22" ry="11" fill="#c0392b" stroke="#3a2b33" stroke-width="2.4"/>
      <ellipse cx="152" cy="152" rx="6" ry="11" fill="#fff" opacity=".55"/>
      <path d="M152 141 v22" stroke="#fff" stroke-width="1.8"/>
    </g>
    <path d="M34 132 l14 4 l-4 11 l-11 -4z" fill="#ffd166"/>
    <text x="26" y="86" font-size="16" fill="#ff7a59">✧</text>
  </svg>`,

  ESFP: () => `<svg ${SVG_HEAD}>
    ${body('#ff5d8f')}${neck}
    <path d="M52 114 q-2 -62 48 -62 q50 0 48 62 q-2 22 -10 36 q-2 -30 4 -50 q-16 14 -42 14 q-26 0 -42 -14 q6 20 4 50 q-8 -14 -10 -36z" fill="#ffd166"/>
    <ellipse cx="100" cy="112" rx="40" ry="38" fill="#ffd9c2"/>
    <path d="M60 100 q8 -34 40 -34 q32 0 40 34 q-12 -14 -26 -8 q-16 6 -28 0 q-14 -6 -26 8z" fill="#ffd166"/>
    ${face()}
    ${MOUTH.open}
    <circle cx="100" cy="54" r="8" fill="#ffd166" stroke="#e0a92e" stroke-width="2"/>
    <path d="M94 54 h12 M100 48 v12" stroke="#fff" stroke-width="2"/>
    <g transform="rotate(16 152 148)">
      <rect x="144" y="140" width="18" height="8" rx="4" fill="#a98bff"/>
      <path d="M150 148 l6 0" stroke="#7a5cf0" stroke-width="2.6"/>
      <circle cx="150" cy="152" r="5" fill="#a98bff"/>
    </g>
    <text x="32" y="78" font-size="16" fill="#a98bff">♪</text>
    <text x="40" y="152" font-size="12" fill="#ffd166">★</text>
  </svg>`,

  ENFP: () => `<svg ${SVG_HEAD}>
    ${body('#ffd166')}${neck}
    <path d="M52 112 q-2 -58 48 -58 q50 0 48 58 q-2 26 -12 40 q-4 -28 4 -48 q-16 14 -40 14 q-24 0 -40 -14 q8 20 4 48 q-10 -14 -12 -40z" fill="#ff8fb1"/>
    <ellipse cx="100" cy="112" rx="41" ry="39" fill="#ffd9c2"/>
    <path d="M58 100 q8 -34 42 -34 q34 0 42 34 q-14 -14 -28 -8 q-14 6 -28 0 q-14 -6 -28 8z" fill="#ff8fb1"/>
    ${face()}
    ${MOUTH.open}
    <text x="30" y="74" font-size="18" fill="#ffd166">✦</text>
    <text x="152" y="66" font-size="15" fill="#a98bff">✦</text>
    <text x="146" y="120" font-size="12" fill="#7ec8a9">✦</text>
    <text x="36" y="136" font-size="12" fill="#ff8fb1">✦</text>
    <path d="M144 150 q14 -6 12 8 q-10 4 -12 -8z" fill="#7ec8a9"/>
  </svg>`,

  ESTJ: () => `<svg ${SVG_HEAD}>
    ${body('#c0392b')}${neck}
    <ellipse cx="100" cy="112" rx="43" ry="41" fill="#ffd9c2"/>
    <path d="M56 102 q6 -42 44 -42 q38 0 44 42 q-10 -16 -26 -16 q-8 10 -18 8 q-14 -3 -22 4 q-12 2 -22 4z" fill="#2b2a36"/>
    ${face()}
    <path d="M64 96 q12 -8 24 -2" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M112 94 q12 -6 24 2" stroke="#3a2b33" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${MOUTH.smirk}
    <path d="M70 148 l30 -6 l30 6 l-4 22 l-26 -4 l-26 4z" fill="#fff" opacity=".55"/>
    <path d="M100 142 v26" stroke="#c0392b" stroke-width="2"/>
    <circle cx="148" cy="152" r="14" fill="#ffd166" stroke="#e0a92e" stroke-width="2.5"/>
    <path d="M148 144 l3 6 l6 1 l-5 4 l1 6 l-5 -3 l-5 3 l1 -6 l-5 -4 l6 -1z" fill="#e0a92e"/>
    <path d="M36 152 l16 -4" stroke="#3a2b33" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  ESFJ: () => `<svg ${SVG_HEAD}>
    ${body('#7ec8a9')}${neck}
    <path d="M52 112 q0 -58 48 -58 q48 0 48 58 q0 20 -8 34 q-4 -24 2 -44 q-16 12 -42 12 q-26 0 -42 -12 q6 20 2 44 q-8 -14 -8 -34z" fill="#a0522d"/>
    <ellipse cx="100" cy="112" rx="41" ry="39" fill="#ffd9c2"/>
    <path d="M58 100 q8 -34 42 -34 q34 0 42 34 q-14 -14 -28 -8 q-14 6 -28 0 q-14 -6 -28 8z" fill="#a0522d"/>
    ${face()}
    ${MOUTH.smile}
    <path d="M56 116 q-8 16 6 22" stroke="#a0522d" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M144 116 q8 16 -6 22" stroke="#a0522d" stroke-width="7" fill="none" stroke-linecap="round"/>
    <g transform="rotate(-10 150 150)"><path d="M138 144 h26 v10 q-13 10 -26 0z" fill="#ffefc2" stroke="#e0c9a0" stroke-width="2"/>
    <path d="M138 144 l-4 -4 M164 144 l4 -4" stroke="#3a2b33" stroke-width="2"/></g>
    <path d="M78 48 q10 -10 18 -2 M104 46 q10 -8 16 0" stroke="#a0522d" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,

  ENFJ: null, /* 占位，下面覆盖 */
};

/* ENFJ 上面已定义，这里修正个别键 */
MASCOTS.ENFJ = () => `<svg ${SVG_HEAD}>
  ${body('#ff8fb1')}${neck}
  <path d="M54 110 q0 -56 46 -56 q46 0 46 56 q0 22 -8 34 q-6 -22 2 -40 q-16 12 -40 12 q-24 0 -40 -12 q8 18 2 40 q-8 -12 -8 -34z" fill="#e7a04d"/>
  <ellipse cx="100" cy="112" rx="41" ry="39" fill="#ffd9c2"/>
  <path d="M59 100 q8 -34 41 -34 q33 0 41 34 q-14 -16 -28 -8 q-14 8 -26 0 q-12 -8 -28 8z" fill="#e7a04d"/>
  ${face()}
  ${MOUTH.open}
  <path d="M62 66 q10 -12 18 -4 q-4 10 -10 12z" fill="#7ec8a9" opacity=".85"/>
  <path d="M78 68 q8 -10 14 -2 q-3 8 -8 10z" fill="#7ec8a9" opacity=".7"/>
  <g transform="rotate(-10 150 150)"><path d="M144 148 q10 -12 18 -2 q-6 12 -18 2z" fill="#ff5d8f"/>
  <path d="M144 148 q8 4 16 0" stroke="#fff" stroke-width="1.6" fill="none"/></g>
  <text x="34" y="150" font-size="15" fill="#ff8fb1">❤</text>
</svg>`;

/* 结果类型 → 形象主色（用于卡片背景） */
const MASCOT_COLORS = {
  INTJ:'#e8e2ff', INTP:'#dff0fb', ENTJ:'#dfe6f7', ENTP:'#fff2cf',
  INFJ:'#dff3ec', INFP:'#f0e8ff', ENFJ:'#ffe3ec', ENFP:'#fff6d6',
  ISTJ:'#e0ecfb', ISFJ:'#ffe8ee', ISTP:'#e6edf1', ISFP:'#fff6d6',
  ESTP:'#ffe3d9', ESFP:'#ffe3ec', ESTJ:'#ffe0dc', ESFJ:'#dff3ec'
};
const MASCOT_ACCENT = {
  INTJ:'#8b7bd8', INTP:'#4a9fd8', ENTJ:'#3a4a6b', ENTP:'#e0a92e',
  INFJ:'#4f9c8b', INFP:'#b39ddb', ENFJ:'#ff8fb1', ENFP:'#e0a92e',
  ISTJ:'#4a6fa5', ISFJ:'#e0899f', ISTP:'#5d6b73', ISFP:'#e0a92e',
  ESTP:'#ff7a59', ESFP:'#ff5d8f', ESTJ:'#c0392b', ESFJ:'#4f9c8b'
};
const MASCOT_PERSONA = {
  INTJ:'戴眼镜的小谋士', INTP:'抱放大镜的小博士', ENTJ:'举旗的小队长', ENTP:'吐舌头的小杠精',
  INFJ:'戴月光的小先知', INFP:'抱花的小诗人', ENFJ:'捧爱心的小暖炉', ENFP:'满身星星的小火苗',
  ISTJ:'拿清单的小管家', ISFJ:'拎药箱的小护士', ISTP:'扛扳手的小工程师', ISFP:'握画笔的小画家',
  ESTP:'顶橄榄球的小疯子', ESFP:'戴麦克风的小明星', ESTJ:'拿哨子的小指挥', ESFJ:'端点心的小班长'
};

function mascot(id, cls=''){
  const fn = MASCOTS[id];
  return fn ? fn().replace('<svg ', `<svg class="${cls}" `) : '';
}

/* =========================================================
   16 种结果
   ========================================================= */