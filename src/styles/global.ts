import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html, body{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    body {
        background-color: #fff;
        color: var(--primary-dark);
    }
    :root{
        --primary: #9d4fae;
        --font-color: #a5a5c1;
        --secondary: #3a3d73;
    }
`;
