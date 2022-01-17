import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};
/* body {
min-width: 320px;
} */
* {
box-sizing: border-box;
}
html {
/* background: rgba(255,153,0,1); */
background: #ff9900;
}
h1 {
margin: 0;
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
}
`;
