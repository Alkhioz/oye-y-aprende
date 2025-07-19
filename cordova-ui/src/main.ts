import './style.css'
import oyelogo from '/img/logo.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${oyelogo}" class="logo" alt="Vite logo" />
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
