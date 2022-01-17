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
background: #ff9900;

/* temporary */
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
/* default Next font taken from tutorial */
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
h1 {
font-weight: 700;
line-height: 1.4em;
margin: 0;
font-weight: 900;

/* temp */
text-align: center;
width: 100%;
}
h2 {
    margin: 0;
}
h3 {
    margin: 0;
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
    /* temp */
    text-align: center;
    width: 100%;
}
`;
