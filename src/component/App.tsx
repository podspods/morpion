import { StrictMode } from 'react'
import { AppGlobalStyle } from './../style/App.style'
import { Game } from './Game'
/**
 * main component for the application
 * @returns 
 * 
 */

export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <Game />
    </StrictMode>

  )
}