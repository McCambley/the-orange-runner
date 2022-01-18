import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};
* {
    box-sizing: border-box;
    font-family: "PT Serif", serif;
    font-weight: 900;
}
    
h1 {
    font-weight: 700;
    line-height: 1.4em;
    margin: 0;
    font-weight: 700;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

h2 {
    margin: 0;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

h3 {
    margin: 0;
    opacity: .5;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

h4 {
    margin: 0;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

h5 {
    margin: 0;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

h6 {
    margin: 0;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
}

p {
    margin: 0;
    font-weight: 400;
    font-family: "PT Serif", serif;
}

a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
    transition: opacity .3s ease;
    font-family: "PT Serif", serif;
    font-weight: 400;
    transition: color .15s ease;
    
    &:hover {
        color: #FF9900;
    }
}
`;
