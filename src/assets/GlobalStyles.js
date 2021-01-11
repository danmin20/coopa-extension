import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    html{
        font-size: 7px;
    }
    body{
        font-family: 'Spoqa Han Sans Neo',sans-serif;
    }
`;
