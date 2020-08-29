export interface Typography {
  fontFamily: {
    'sans-serif': string;
    monospace: string;
  };
  fontSize: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const typography: Typography = {
  fontFamily: {
    'sans-serif': "'Poppins', sans-serif",
    monospace: "'Fira Code', monospace",
  },
  fontSize: {
    mobile: '12px',
    tablet: '14px',
    desktop: '16px',
  },
};

export default typography;
