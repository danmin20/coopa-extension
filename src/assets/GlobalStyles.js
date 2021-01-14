import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    html{
        font-size: 8px;
        letter-spacing: -0.02em;
    }
    body{
        font-family: 'Spoqa Han Sans Neo',sans-serif;
    }
`;
