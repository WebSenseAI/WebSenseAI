import { html, css, LitElement } from "lit";
import { ref, createRef, Ref } from 'lit/directives/ref.js';

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
        background: #FFFFFF;
        padding: 0 20px;
        font-size: 16px;
        box-sizing: border-box;
        border-radius: 0 0 0 20px;
        color: #000000;
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

  inputChatRef: Ref<HTMLInputElement> = createRef();

  handleClick() {
    if (this.inputChatRef.value?.value === '') return;
    const event = new CustomEvent('send-message', {
      detail: { 
        message: this.inputChatRef.value?.value
       },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
    this.inputChatRef.value!.value = '';
  }

  // send message on click of return key
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return html`
      <div class="chat-input">
        <input class="chat-input--input" type="text" placeholder="Reply..."  ${ref(this.inputChatRef)} @keydown=${this.handleKeyPress}>
        <button @click="${this.handleClick}" class="chat-input--button">></button>
      </div>
    `;
  }
}
