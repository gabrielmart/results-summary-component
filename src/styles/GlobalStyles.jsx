import { createGlobalStyle } from 'styled-components';
import HakenGrotesk from '../assets/fonts/HankenGrotesk-VariableFont_wght.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Hanken Grotesk';
        src: url(${HakenGrotesk}) format('truetype');
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${({ theme }) => theme.fonts.family.default};
    }
`;
