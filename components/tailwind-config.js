window.tailwind = window.tailwind || {};
window.tailwind.config = window.tailwind.config || {};
window.tailwind.config.darkMode = 'class';
window.tailwind.config.theme = window.tailwind.config.theme || {};
window.tailwind.config.theme.extend = {
  colors: {
    'on-tertiary-fixed': '#101b30',
    'surface-container-high': '#282b28',
    'tertiary-container': '#0f1a2e',
    'on-error': '#690005',
    'on-secondary': '#3d2e00',
    background: '#111412',
    secondary: '#e6c364',
    'surface-variant': '#333533',
    'inverse-on-surface': '#2f312e',
    'inverse-primary': '#525f71',
    'on-tertiary': '#263046',
    tertiary: '#bbc6e2',
    'surface-container': '#1e201e',
    'outline-variant': '#44474c',
    'on-error-container': '#ffdad6',
    error: '#ffb4ab',
    'secondary-fixed-dim': '#e6c364',
    'on-primary-fixed-variant': '#3a4859',
    'on-primary-container': '#768497',
    'error-container': '#93000a',
    'surface-bright': '#373a37',
    'on-primary': '#243141',
    'on-tertiary-container': '#78839c',
    'on-secondary-fixed': '#241a00',
    'surface-container-highest': '#333533',
    'surface-container-lowest': '#0c0f0d',
    'primary-fixed': '#d6e4f9',
    'surface-dim': '#111412',
    'primary-container': '#0d1b2a',
    'secondary-container': '#785d00',
    'on-surface': '#e2e3df',
    'surface-tint': '#bac8dc',
    surface: '#111412',
    'inverse-surface': '#e2e3df',
    'surface-container-low': '#1a1c1a',
    'primary-fixed-dim': '#bac8dc',
    'tertiary-fixed-dim': '#bbc6e2',
    'on-secondary-container': '#fdd977',
    'secondary-fixed': '#ffe08f',
    'on-primary-fixed': '#0f1c2c',
    'outline': '#8e9196',
    'on-surface-variant': '#c4c6cc',
    'tertiary-fixed': '#d7e2ff',
    'on-tertiary-fixed-variant': '#3c475d',
    'on-secondary-fixed-variant': '#584400',
    'on-background': '#e2e3df'
  },
  borderRadius: {
    DEFAULT: '0.125rem',
    lg: '0.25rem',
    xl: '0.5rem',
    full: '0.75rem'
  },
  spacing: {
    'margin-mobile': '16px',
    gutter: '24px',
    'container-max': '1200px',
    'margin-desktop': '64px',
    unit: '8px'
  },
  fontFamily: {
    'body-md': ['"Source Serif 4"'],
    'headline-lg-mobile': ['Noto Serif'],
    'body-lg': ['"Source Serif 4"'],
    'label-sm': ['"Source Sans 3"'],
    'headline-lg': ['Noto Serif'],
    'headline-md': ['Noto Serif'],
    'display-lg': ['Noto Serif']
  },
  fontSize: {
    'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
    'headline-lg-mobile': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
    'body-lg': ['18px', { lineHeight: '1.8', fontWeight: '400' }],
    'label-sm': ['14px', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '500' }],
    'headline-lg': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
    'headline-md': ['24px', { lineHeight: '1.4', fontWeight: '500' }],
    'display-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }]
  }
};
