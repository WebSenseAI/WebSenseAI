import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class ChatPopup extends LitElement {
  static styles = css`
    .chat-popup {
        width: 360px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #FFFFFF;
        height: 627px;
        border-radius: 20px;
        display: none;
        z-index: 1000;
    }
    .chat-popup.open{
        display: block;
    }
  `;
  @property({ type: Boolean }) // Declare isPopupOpen as a property
  isPopupOpen: boolean = false; // Initialize isPopupOpen
  
  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  constructor() {
    super();
    window.addEventListener('toggle-open-popup', () => {
      this.togglePopup();
    })
    this.isPopupOpen = false;
  }

  render() {
    return html`
      <div class="chat-popup ${this.isPopupOpen === true ? 'open' : ''}">
        <slot></slot>
      </div>
    `;
  }
}
