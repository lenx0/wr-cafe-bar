import { createTheme } from '@mui/material/styles';

// Paleta inspirada em café: torrado profundo + dourado quente + creme
export const palette = {
  bg: '#0d0907',
  bgSoft: '#1a120b',
  bgElevated: '#221610',
  surface: 'rgba(26, 18, 11, 0.72)',
  border: 'rgba(232, 184, 109, 0.18)',
  primary: '#e8b86d',      // dourado quente (espresso crema)
  primaryDark: '#c69049',
  primaryLight: '#f4d29a',
  secondary: '#b8451f',    // terracota / cobre
  cream: '#f5ebe0',
  text: '#f5ebe0',
  textSoft: '#cdbfae',
  textMuted: '#8a7a68',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: palette.primary, dark: palette.primaryDark, light: palette.primaryLight, contrastText: '#1a120b' },
    secondary: { main: palette.secondary, contrastText: '#fff' },
    background: { default: palette.bg, paper: palette.bgElevated },
    text: { primary: palette.text, secondary: palette.textSoft },
    divider: palette.border,
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: '"Inter", "Roboto", system-ui, sans-serif',
    h1: { fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 600 },
    h5: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.02em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 26,
          paddingBlock: 12,
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'transform .25s ease, box-shadow .25s ease, background-color .25s ease',
          '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 14px 30px -10px rgba(232,184,109,0.45)' },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${palette.primary} 0%, ${palette.primaryDark} 100%)`,
          color: '#1a120b',
        },
        outlinedPrimary: {
          borderColor: palette.primary,
          color: palette.primary,
          '&:hover': { borderColor: palette.primaryLight, backgroundColor: 'rgba(232,184,109,0.08)' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: palette.bgElevated,
        },
      },
    },
  },
});

export default theme;
