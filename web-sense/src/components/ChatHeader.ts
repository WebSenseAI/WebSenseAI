import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
export class ChatHeader extends LitElement {
    
    static styles = css`
    .chat-header {
        width: 100%;
        height: 168px;
        background-color: #1a1a1a;
        background-image: url("../../assets/header-bg.png");
        border-radius: 20px 20px 0 0;
        padding: 40px 30px;
        box-sizing: border-box;
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

    render() {
        return html`
      <div class="chat-header">
        <img class="chat-header__close" src="../../assets/close-icon.svg" alt="WebSense AI Logo" />
        <h1 class="chat-header__title" >${this.header}</h1>
        <p class="chat-header__sub-title">A live chat interface that allows for seamless, natural communication and connection.</p>
      </div>
    `;
    }
}
