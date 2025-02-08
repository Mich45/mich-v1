export const colors = {
    white: {
        default_white: '#f5f6f8',
        white_pink:
            'linear-gradient(to right, #f5f6f8, rgb(239 217 217), rgb(255 253 227))',
        white_pink2:
            'linear-gradient(to right, rgb(245, 246, 248), rgb(245 241 231), rgb(255, 253, 227));',
    },

    slate: {
        lightSlate: '#213c3c',
        darkSlate: '#142525',
        textSlate: '#8ba9a9'
    },

    gray: {
        grayPrimary: '#283344',
        darkGray: 'rgb(46 66 94)',
        lightGray: 'rgb(140 150 169)',
    },
    blue: {
        defaultBlue: '#5156f7',
        darkBlue: '#0f0c22',
    },
    dark: {
        bodyDark: '#040000',
        darkPrimary: '#0d1117',
        dark: '#232529',
        textDark: '#e2e3e7',
        lightDark: '#696e79',
    },
    green: {
        greenPrimary: 'rgb(51 251 149)',
        codeGreen: '#86908ed6',
        textGreen: 'rgb(83, 226, 197)'
    },
};

export const shadows = {
    light: '0px 3px 6px #d9c5c596',
};

const size = {
    mobile: '320px',
    mobileL: '480px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1280px',
};

export const device = {
    mobile: `(min-width: ${size.mobile}) and (max-width: ${size.mobileL})`,
    mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet})and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.laptopL})`,
};
