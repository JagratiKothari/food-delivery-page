import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  
  .header {
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

 .searchSection {
    width: 96%;
    vertical-align: center;
    margin: 0.4rem;
 }
 
 .searchInput {
    padding: 0.5rem;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 4px;
    border: 2px solid yellowgreen;
 }
 
 .searchButton {
    padding: 7px 20px;
    background-color: yellowgreen;
    color: white;
    margin-left: 20px;
 }
 
 .foodCategory {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 14px;
    margin-right: 4px;
    margin-left: 4px;
    border-top: 2px solid yellowgreen;
 }
 
 .filterSection {
    border-top: 2px solid yellowgreen;
    margin-top: 15px;
 }
 
 .selectBox {
    margin-left: 20px;
    margin-top: 10px;
    border: 2px solid yellowgreen;
 }
 
 .itemName {
    margin-left: 4px;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 2px;
    margin-top: 18px;
 }
 
 .imageSize {
    width: 60px;
    height: 60px;
    border-radius: 2px;
 
 }
 
 .imageSection {
    padding-left: 10px;
    padding-right: 4px;
 }
 
 .detailsSection {
    display: flex;
 }
 
 .itemDescription {
    margin-left: 4px;
    font-size: 0.9rem;
    margin-bottom: 3px;
    margin-top:1px;
 }
 
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
