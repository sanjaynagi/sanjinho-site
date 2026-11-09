// The site's colour palette. Every colour in the UI resolves to one of the
// semantic tokens built from this (see ./index.js), so this is the only place
// a colour is chosen.
//
// There is a light and a dark member. The teal that reads well on an off-white
// ground is too dark to read on a dark one, so `primary` is a different
// (lighter) teal in dark mode rather than one value for both.

const rgb = hex => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const alpha = (hex, a) => `rgba(${rgb(hex).join(', ')}, ${a})`;

// Expand the handful of hand-picked colours into the full token set. The
// translucent tokens are derived from `primary`/`ink` so they always sit in
// the same hue as the palette.
const mode = ({ ground, ink, primary, secondary, muted, plate }, { dark, wash }) => ({
  ground,
  ink,
  primary,
  secondary,
  muted,
  surface: alpha(primary, dark ? 0.1 : 0.07),
  surfaceHover: alpha(primary, dark ? 0.16 : 0.12),
  line: alpha(primary, dark ? 0.2 : 0.18),
  navBg: alpha(ground, 0.85),
  plate,
  plateLine: alpha(primary, dark ? 0.26 : 0.2),
  overlay: alpha(dark ? '#0a1211' : ink, 0.93),
  overlayText: dark ? ink : ground,
  shadow: alpha(primary, dark ? 0.3 : 0.22),
  toggleBg: alpha(ink, dark ? 0.1 : 0.06),
  toggleHover: alpha(ink, dark ? 0.16 : 0.1),
  inlineCode: alpha(primary, dark ? 0.18 : 0.1),
  quote: alpha(primary, dark ? 0.1 : 0.07),
  selection: alpha(primary, dark ? 0.35 : 0.22),
  wash: wash.map(([x, y, w, h, a]) => ({ x, y, w, h, color: alpha(primary, a) }))
});

// Soft radial washes of the primary teal: [x%, y%, width%, height%, alpha].
// Kept faint so the page reads as off-white with a hint of colour, not tinted.
const lightWash = [
  [50, -15, 95, 55, 0.07],
  [105, 105, 70, 45, 0.05],
  [-10, 55, 55, 40, 0.035]
];
const darkWash = [
  [50, -15, 95, 55, 0.07],
  [105, 105, 70, 45, 0.04],
  [-10, 55, 55, 40, 0.03]
];

const light = {
  ground: '#fbfbf8',
  ink: '#1f2a2a',
  primary: '#2b7673',
  secondary: '#7fb0ac',
  muted: '#5d6867',
  plate: '#ffffff'
};

const dark = {
  ground: '#121717',
  ink: '#e9eded',
  primary: '#7cc2bd',
  secondary: '#a1d2ce',
  muted: '#a4b1b0',
  plate: 'rgba(236, 242, 241, 0.94)'
};

const palette = {
  light: mode(light, { dark: false, wash: lightWash }),
  dark: mode(dark, { dark: true, wash: darkWash }),
  // Code blocks stay dark in both modes, as they do in most editors.
  code: {
    bg: dark.ground,
    fg: dark.ink,
    comment: '#62807c',
    string: '#e3c98d',
    punct: dark.muted,
    entity: '#9ad7cf',
    keyword: dark.primary,
    lineNo: '#3b504d'
  }
};

export default palette;
