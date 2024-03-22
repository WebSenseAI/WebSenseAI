import { html, css, LitElement } from "lit";

export class ChatPopup extends LitElement {
    static styles = css`
    .chat-popup {
        width: 360px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        background: #FFFFFF;
        height: 627px;
        border-radius: 20px;

    }
    .chat-popup.open{
        display: block;
    }
  `;

    render() {
        return html`
      <div class="chat-popup open">
        <slot></slot>
      </div>
    `;
    }
}
