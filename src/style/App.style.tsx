/**
 *
 * * main style and common  style for the application
 */
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
/**
 * color theme from coolor.co
 * for the whole application
 */
export const AppTheme = {
  colors: {
    dark: "#202020",
    lessDark: "#333533",
    medium: "#ffd100",
    lessLight: "#ffee32",
    light: "#d6d6d6",
  },
  font: {
    regular: "Sora,sans-serif",
    extra: "Sora,sans-serif",
    Logo: "Sora,sans-serif",
  },
  BorderRadius: "0.6rem",
};

export const App = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
`;

/**
 * Contient le style globale de l'application
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    background-color:${AppTheme.colors.light}
  }
  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }
  * {
    box-sizing: border-box;
  }
  .hide{
    display: none;
  }
`;



export const MenuBurger = styled.div`
  position : absolute;
  bottom: 0rem;
  left: 0rem;
  cursor: pointer;

`