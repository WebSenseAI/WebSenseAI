import axios from "axios";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { SERVER_URL } from "../../utils";
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
        transform: translateY(50px);
    }

    .chat-popup.open{
        display: block;
        animation: myAnimation .5s forwards; 
    }

    @keyframes myAnimation {
      0% {
        transform: translateY(-50);
        opacity: 0;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  `;

  @property({ type: Object })
  chatData = {};

  @property({ type: Boolean }) // Declare isPopupOpen as a property
  isPopupOpen: boolean = false; // Initialize isPopupOpen

  @property({ type: String }) // Declare isPopupOpen as a property
  key: string = ''; // Initialize isPopupOpen

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  async sendMessage(questions: string, key: string) {
    // Messagge sende to the server add animation of thinking


    const result = await axios.get(
      `${SERVER_URL}/chat/bot/answer`,
      {
        params: {
          id: key,
          question: questions
        }
      }
    );
    const data: string = (<any>result).data;
    this.chatData = data;
    this.requestUpdate();

    const event = new CustomEvent('add-response', {
      detail: {
        message: data
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    super.connectedCallback();
  }

  constructor() {
    super();
    window.addEventListener('toggle-open-popup', () => {
      this.togglePopup();
    })
    window.addEventListener('send-message', (e: any) => {
      this.sendMessage(e.detail.message, this.key);
    })
    this.isPopupOpen = false;
  }

  render() {
    return html`
      <div class="chat-popup ${this.isPopupOpen === true ? 'open' : 'close'}">
        <slot></slot>
      </div>
    `;
  }
}
