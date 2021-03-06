import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize};
* {
    box-sizing: border-box;
    font-family: "PT Serif", serif;
    font-weight: 900;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    min-width: 320px
}
    
h1 {
    font-size: 36px;
    line-height: 1.1em;
    margin: 0;
    margin-bottom: 20px;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
    
    @media (max-width: 600px) {
        font-size: 28px;
        margin-bottom: 12px;
    }
}

h2 {
    margin: 0;
    margin-bottom: 8px;
    font-family: "Source Sans Pro", sans-serif; 
    font-weight: 900;
    
    @media (max-width: 600px) {
        font-size: 20px;
    }
}

h3 {
    margin: 0;
    margin-bottom: 8px;
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
    font-size: 16px;
    line-height: 1.6em;
    margin-bottom: 20px;
    max-width: 65vh;

    @media (orientation: landscape) and (max-width: 768px) {
        max-width: none;
    }
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

time {
    display: block;
    margin: 0;
    font-family: "Source Sans Pro", sans-serif; 
    /* font-family: "PT Serif", serif; */
    font-weight: 700;
    /* margin-bottom: 4px; */
    font-size: 12px;
    color: #ff9900;
    width: 100%;
    /* text-align: right; */
}
`;
