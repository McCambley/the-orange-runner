import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
/* sample font to test imports from google fonts */
/* @import url('https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;600;700&display=swap'); */

${normalize};
/* body {
min-width: 320px;
} */
* {
box-sizing: border-box;
}
body {
/* background: rgba(255,153,0,1); */

/* temporary */
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
padding: 16px;
/* default Next font taken from tutorial */
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

h1 {
font-weight: 700;
line-height: 1.4em;
margin: 0;
font-weight: 900;


}
h2 {
    margin: 0;
    font-weight: 900;
}
h3 {
    margin: 0;
    opacity: .5;
}
h5 {
    margin: 0;
}
h6 {
    margin: 0;
}
p {
    margin: 0;
    font-weight: 400;
 
}
a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    opacity: 1;
    transition: opacity .3s ease;

    &:hover {
        opacity: .7;
    }
}

h1, h2, h3, h4, h5, h6, p {
/* temp */
text-align: center;
width: 100%;
margin-bottom: 12px;
}
`;
