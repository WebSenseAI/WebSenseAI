import { html, css, LitElement } from "lit";

export class ChatInput extends LitElement {
    static styles = css`
    .chat-input {
        width: 100%;
        box-sizing: border-box;
        display: flex;
    }
    .chat-input--input {
        width: 100%;
        height: 50px;
        border: none;
        border-top: 1px solid #E0E0E0;
        padding: 0 20px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 0 0 0 20px;
    }
    .chat-input--input:focus-visible {
        outline-offset: 0px;
        outline: none;
    }
    .chat-input--button {
        width: 50px;
        height: 50px;
        background: #FF5A5F;
        color: #FFFFFF;
        border: none;
        border-radius: 0 0 20px 0;
        font-size: 20px;
        cursor: pointer;
    }
  `;

    render() {
        return html`
      <div class="chat-input">
        <input class="chat-input--input" type="text" placeholder="Reply...">
        <button class="chat-input--button">></button>
      </div>
    `;
    }
}
