import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

const closeIcon = new URL('../../../assets/close-icon.svg', import.meta.url).toString();
const headerBg = new URL('../../../assets/header-bg.png', import.meta.url).toString();

export class ChatHeader extends LitElement {
  static styles = css`
    .chat-header {
        width: 100%;
        height: 168px;
        background-color: #1a1a1a;
        border-radius: 20px 20px 0 0;
        padding: 40px 30px;
        box-sizing: border-box;
        text-align: left;
    }
    .chat-header__title {
        font-size: 24px;
        color: #fff;
        margin: 0;
        padding: 0;
        font-weight: bold;
    }
    .chat-header__sub-title {
        font-size: 15px;
        color: #fff;
        margin: 0;
        margin-top: 15px;
        padding: 0;
        line-height: 1.5;
    }
    .chat-header__close {
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
    }
  `;

  @property({ type: String }) header = "";

  handleClick() {
    const event = new CustomEvent('toggle-open-popup', {
      detail: { /* Optional event details */ },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }


  render() {
    return html`
     <style> .chat-header { background-image: url(${headerBg}) } </style> 
      <div class="chat-header">
        <img @click="${this.handleClick}" class="chat-header__close" src="${closeIcon}" alt="WebSense AI Logo" />
        <h1 class="chat-header__title" >${this.header}</h1>
        <p class="chat-header__sub-title">A live chat interface, here to help you get to know our blog better, in a funny way! 😄</p>
      </div>
    `;
  }
}
