export const colors = {
    white: {
        default_white: '#f5f6f8',
        white_pink:
            'linear-gradient(to right, #f5f6f8, rgb(239 217 217), rgb(255 253 227))',
        white_pink2:
            'linear-gradient(to right, rgb(243, 244, 246), rgb(209, 213, 219))',
    },
    gray: {
        darkGray: 'rgba(31, 41, 55, 1)',
        lightGray: 'rgba(107, 114, 128, 1)',
    },
    blue: {
        defaultBlue: '#5156f7',
        darkBlue: '#0f0c22',
    },
    dark: {
        dark: '#232529',
        textDark: '#e2e3e7',
        lightDark: '#696e79',
    },
    green: {
        codeGreen: '#77ffba',
    },
};

export const shadows = {
    light: '0px 3px 6px #d9c5c596',
};

export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};
