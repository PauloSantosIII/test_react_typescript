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
        font-family: 'Roboto', sans-serif;
    }
    :root{
        --primary: #9d4fae;
        --secondary: #3a3d73;
        --font-color: #383e71;
        --color: #989fdb;
        --bgcolor: #fff;
    }
`;
