/**
 * Misho Bonsai Design Tokens
 * Estética Wabi-Sabi / Botânica Artesanal
 * Evita gradientes clichês de IA e foca em materiais naturais, tipografia equilibrada e legibilidade.
 */

export const MISHO_TOKENS = {
  colors: {
    // Linho cru / Pergaminho (fundos naturais)
    linen: {
      50: '#FDFCF9',
      100: '#F7F5F0',
      200: '#EBE6DE',
      300: '#DED7CB',
    },
    // Musgo / Agulhas de pinheiro (tons primários)
    moss: {
      100: '#E2E8E2',
      300: '#8FA592',
      500: '#557058',
      700: '#384D3B',
      800: '#2A3A2C',
      900: '#1F2B20',
    },
    // Argila / Cerâmica de Bonsai (destaques e acentos)
    clay: {
      100: '#F5EBE6',
      300: '#C88E70',
      500: '#A36647',
      700: '#7B4B32',
      900: '#4D2918',
    },
    // Tinta Sumi-e / Carvão (textos de alto contraste e bordas sutis)
    sumi: {
      50: '#F4F4F3',
      100: '#E4E4E2',
      300: '#A2A19D',
      500: '#646360',
      700: '#383936',
      900: '#181918',
    },
    // Feedback semântico harmonizado
    status: {
      success: '#2E5A36',
      warning: '#9E6722',
      error: '#8C2D2D',
      info: '#2C4E65',
    },
  },
  typography: {
    fontFamily: {
      serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
  },
  radii: {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    full: '9999px',
  },
  shadows: {
    subtle: '0 1px 3px rgba(24, 25, 24, 0.05), 0 1px 2px rgba(24, 25, 24, 0.03)',
    card: '0 4px 6px -1px rgba(24, 25, 24, 0.05), 0 2px 4px -2px rgba(24, 25, 24, 0.03)',
    elevated: '0 10px 15px -3px rgba(24, 25, 24, 0.08), 0 4px 6px -4px rgba(24, 25, 24, 0.03)',
  },
} as const;
