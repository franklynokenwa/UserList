import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    overflow-x: hidden;
}
    body{
        margin: unset;
        padding: unset;
        box-sizing: border-box;  
        font-family: 'Sora', sans-serif;
        font-size: 16px;
        font-weight: 400;

    }
`

export default GlobalStyle;