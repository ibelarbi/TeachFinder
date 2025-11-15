import { createGlobalStyle } from 'styled-components';
import { down } from 'styled-breakpoints';
import { colorPalette, fontFamily, fontSize, getSpacing } from '@utils/stylesheet';

import 'react-phone-input-2/lib/material.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvenirNextLTPRO-Bold';
    src: url("/assets/fonts/AvenirNextLTPro-Bold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'AvenirNextLTPRO-Demi';
    src: url("/assets/fonts/AvenirNextLTPro-Demi.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'AvenirNextLTPRO-Medium';
    src: url("/assets/fonts/AvenirNextLTPro-Medium.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'Avenir-Black';
    src: url("/assets/fonts/avenir_black.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir-Heavy';
    src: url("/assets/fonts/avenir_heavy.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir-Medium';
    src: url("/assets/fonts/avenir_medium.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Avenir-Roman';
    src: url("/assets/fonts/avenir_roman.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-Black';
    src: url("/assets/fonts/montserrat_black.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Montserrat-Bold';
    src: url("/assets/fonts/montserrat_bold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-Medium';
    src: url("/assets/fonts/montserrat_medium.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url("/assets/fonts/montserrat_semibold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'SFProDisplay-Bold';
    src: url("/assets/fonts/sfprodisplay_bold.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'SFProDisplay-Medium';
    src: url("/assets/fonts/sfprodisplay_medium.ttf") format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'SFProDisplay-SemiBold';
    src: url("/assets/fonts/sfprodisplay_semibold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'Janna-LT-Bold';
    src: url("/assets/fonts/Janna-LT-Bold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: 'JannaLT-Regular';
    src: url("/assets/fonts/JannaLT-Regular.ttf") format("truetype");
    font-display: swap;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color:  ${colorPalette.pigeonPost} ${colorPalette.transparent};

    ::-webkit-scrollbar {
    width: ${getSpacing(5)};
  }
  ::-webkit-scrollbar-track {
    background: ${colorPalette.transparent};
    border-radius: ${getSpacing(10)};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colorPalette.pigeonPost};
    border-radius: ${getSpacing(10)};
    border: ${getSpacing(1)} solid ${colorPalette.white};
  }
  }

  body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(to bottom, rgba(243, 249, 255, 0) 75%, rgba(228, 241, 255, 0.97) 100%);
    background-color: ${colorPalette.white};
    width: 100%;
    letter-spacing:normal;
    -webkit-tap-highlight-color: transparent;
  }
  body[dir=rtl] {
    *{
      font-family: ${fontFamily.JannaLTRegular};

    }
    svg[class$="directional"]{
      transform: rotateY(180deg);
    }
  }
  a {
    text-decoration: none;
  }
  .react-tel-input{
    direction: ltr;
  }
  .react-tel-input .flag-dropdown {
    padding-right: ${getSpacing(5)};
  }
  .react-tel-input .form-control:focus {
    box-shadow: none;
    border: solid 1px ${colorPalette.botticelli};
  }
  .react-tel-input .form-control:hover {
    box-shadow: none;
    border: solid 1px ${colorPalette.botticelli};
  } 
  .react-tel-input .form-control {
    padding: ${getSpacing(9)} ${getSpacing(27)} ${getSpacing(9)} ${getSpacing(29)};
    outline: none;
    font-family: ${fontFamily.AvenirNextMedium};
    color: ${colorPalette.poloBlue};
    font-size: ${fontSize.small};
    width: ${getSpacing(245)};
    border: solid 1px ${colorPalette.botticelli};
    background-color: ${colorPalette.white};
    border-radius: ${getSpacing(2)};
    height: ${getSpacing(20)};
    box-sizing: border-box;

    ::placeholder {
      color: ${colorPalette.periwinkle};
    }
  
    :-ms-input-placeholder {
      color: ${colorPalette.periwinkle};
    }
  
    ::-ms-input-placeholder {
      color: ${colorPalette.periwinkle};
    }
    ${down('sm')} {
      width: 100%;
    }
  }
  .react-tel-input .country-list {
    width: ${getSpacing(245)};
    ${down('sm')} {
      width: 100%;
    }
  }
  .react-tel-input .flag-dropdown {
    ${down('sm')} {
      position:static;
    }
  }
  .react-tel-input .selected-flag {
    ${down('sm')} {
      position:absolute;
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
    }
  }
  .react-tel-input .selected-flag .arrow {
    margin-right: ${getSpacing(30)};
  }
  .SnackbarContainer-bottom {
    ${down('sm')}{
      bottom: ${getSpacing(120)}!important;
    }
  }
  .SnackbarContent-root.SnackbarItem-contentRoot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: ${getSpacing(173)};
    padding: ${getSpacing(5)} ${getSpacing(7.5)};
    border-radius: ${getSpacing(3)};
    box-shadow: none;
    height: ${getSpacing(20)};
    box-sizing: border-box;
    margin-inline: auto;
    ${down('sm')}{
      width: 100%;
      max-width: ${getSpacing(173)};
    }
  }
  .SnackbarContent-root.SnackbarItem-contentRoot[dir=rtl] {
    flex-direction: row-reverse;
  }
  .SnackbarContent-root.SnackbarItem-contentRoot.SnackbarItem-variantError{
    background: ${colorPalette.chabil};
    border: solid 1px ${colorPalette.sunsetOrange};
    color:${colorPalette.sunsetOrange}!important;
    padding-left: ${getSpacing(0)};
    .SnackbarItem-action {
      svg > g{
        fill:${colorPalette.sunsetOrange}!important;
      }
    }
  }
  .SnackbarContent-root.SnackbarItem-contentRoot.SnackbarItem-variantInfo{
    background: ${colorPalette.solitude};
    border: solid 1px ${colorPalette.dodgerBlue};
    color:${colorPalette.dodgerBlue}!important;
    .SnackbarItem-action {
      svg > g{
        fill:${colorPalette.dodgerBlue}!important;
      }
    }
  }
  .SnackbarItem-message{
    font-family: ${fontFamily.AvenirNextMedium};
    padding: unset!important;
    font-size: ${fontSize.small};
    font-weight: unset;
    padding-inline-start:${getSpacing(5)}!important
  }
  .SnackbarItem-action{
    padding-inline-start:${getSpacing(1)}!important;
    margin: unset!important;

  }
`;

export default GlobalStyle;
