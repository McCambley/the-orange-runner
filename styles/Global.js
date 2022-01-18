import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`

${normalize};

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
/* font-family: 'Source Sans Pro', sans-serif; */
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');
/* font-family: 'PT Serif', serif; */


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
