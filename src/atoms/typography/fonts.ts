const fontFamily = "'Sohne', Helvetica, sans-serif";

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

export const fontSize = {
  display: {
    xs: {
      fontSize: '1.5rem',
      lineHeight: '1.1',
    },
    sm: {
      fontSize: '2rem',
      lineHeight: '1.1',
    },
    md: {
      fontSize: '2.5rem',
      lineHeight: '1.1',
    },
    lg: {
      fontSize: '3.125rem',
      lineHeight: '1.1',
    },
    xl: {
      fontSize: '3.75rem',
      lineHeight: '1.1',
    },
    xxl: {
      fontSize: '4.375rem',
      lineHeight: '1.1',
    },
  },
  text: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1.5',
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.5',
    },
    md: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
    lg: {
      fontSize: '1.125rem',
      lineHeight: '1.5',
    },
    xl: {
      fontSize: '1.25rem',
      lineHeight: '1.5',
    },
  },
  overline: {
    fontSize: '1rem',
    lineHeight: '1.1',
    textTransform: 'uppercase',
  },
} as const;

type FontStyle =
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-xxl'
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'overline';
type FontWeight = keyof typeof fontWeight;

export const font = (style: FontStyle, weight?: FontWeight) => {
  const sizeArr = style.split('-');
  const sizeObj = sizeArr.reduce((pointer, key) => pointer[key], fontSize);
  const fontString = `${weight ? fontWeight[weight] : ''} ${sizeObj.fontSize}/${sizeObj.lineHeight} ${fontFamily}${
    'textTransform' in sizeObj
      ? `;
  text-transform: ${sizeObj.textTransform}`
      : ''
  }
  `;

  return fontString;
};
