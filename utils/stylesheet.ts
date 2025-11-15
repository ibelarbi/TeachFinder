const SPACING_UNIT = 2;
const MEASUREMENT_UNIT = 'px';
export const MAX_WIDTH = 1104;

export const colorPalette = {
  transparent: 'transparent',
  black: '#000000',
  cello: '#253E67',
  botticelli: '#D5E2EE',
  white: '#FFFFFF',
  poloBlue: '#83A9CE',
  sunsetOrange: '#FC4B4B',
  linkWater: '#D8E6F3',
  dodgerBlue: '#2895FF',
  potPourri: '#F6E6E7',
  solitude: '#E6F3FF',
  bisCay: '#1F3D6A',
  pigeonPost: '#ACC5DD',
  botticelliDark: '#D3E0EC',
  monaLisa: '#FF9898',
  zircon: '#F7FAFF',
  blackSqueeze: '#F2F6FA',
  bittersweet: '#FF6666',
  mantis: '#66C366',
  selectiveYellow: '#F7B500',
  lightPoloBlue: '#83a9ce80',
  hippieBlue: '#648BB1',
  craterBrown: '#4A2725',
  denim: '#147EE5',
  wedgewood: '#5878AC',
  cinderella: '#FCD4D7',
  froly: '#F17D7D',
  chabil: '#FFF2F3',
  periwinkle: '#C1D4E6',
};

export const fontWeight = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  normal: 400,
  extraBold: 800,
  ultraBold: 900,
};

export const fontSize = {
  xxSmall: '8px',
  xSmall: '10px',
  small: '12px',
  medium: '14px',
  large: '16px',
  xLarge: '18px',
  xxLarge: '20px',
  xxxLarge: '22px',
  xxxxLarge: '24px',
  x6Large: '28px',
};

export const fontFamily = {
  AvenirBlack: 'Avenir-Black',
  AvenirHeavy: 'Avenir-Heavy',
  AvenirMedium: 'Avenir-Medium',
  AvenirRoman: 'Avenir-Roman',
  SFProSemibold: 'SFProDisplay-Semibold',
  MontserratMedium: 'Montserrat-Medium',
  MontserratBold: 'Montserrat-Bold',
  MontserratSemiBold: 'Montserrat-SemiBold',
  SFProDisplay: 'SF Pro Display',
  SFProDisplayMedium: 'SFProDisplay-Medium',
  SFProDisplayBold: 'SFProDisplay-Bold',
  AvenirNextMedium: 'AvenirNextLTPRO-Medium',
  AvenirNextDemiBold: 'AvenirNextLTPRO-Demi',
  AvenirNextBold: 'AvenirNextLTPRO-Bold',
  JannaLTRegular: 'JannaLT-Regular',
  JannaLTBold: 'Janna-LT-Bold',
};

export const elevations = {
  one: '1',
  two: '10',
  three: '100',
};

export const shadow = {
  button: '0px 6px 58px rgba(68, 143, 255, 0.05)',
  container: '0px 6px 58px rgba(68, 143, 255, 0.05)',
};

export const letterSpacing = {
  xSmall: '0,25px',
  small: '0.29px',
  normal: '0.64px',
};

export const getSpacing = (multiplier: number): string => `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;

export const gridColumnSize = {
  fullColumnWidth: 12,
};

export const gridSpacing = {
  small: 2.5,
  medium: 3,
};

export const borderRadius = {
  xSmall: '4px',
};

export const lineHeight = {
  large: '19px',
  xlarge: '25px',
};
