import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
const bgSvgUrl = new URL('/wp/wp-content/uploads/2024/06/open-button.png', import.meta.url).toString();

export class OpenButton extends LitElement {
  static styles = css`
    .open-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background-size: cover;
        cursor: pointer;
    }
    .open-button--counter {
      float: right;
      background: #B53E3E;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      border: 2px solid white;
      transform: translate(20%, -20%);
    }
    .open {
      display: none;
    } 
  `;

  @property({ type: String }) isOpen = false;

  handleClick() {
    const event = new CustomEvent('toggle-open-popup', {
      detail: { /* Optional event details */ },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }
  constructor() {
    super();
    window.addEventListener('toggle-open-popup', () => {
      this.isOpen = !this.isOpen;
    })
  }


  render() {
    return html`
      <style> .open-button { background-image: url(${bgSvgUrl}) } </style> 
      <div @click="${this.handleClick}" class="open-button ${this.isOpen ? 'open' : ''}">
        <!-- <span class="open-button--counter">1</span> -->
      </div>
    `;
  }
}
