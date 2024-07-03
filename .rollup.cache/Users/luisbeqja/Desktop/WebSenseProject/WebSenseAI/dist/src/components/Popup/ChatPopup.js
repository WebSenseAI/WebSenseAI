import { __decorate } from "tslib";
import axios from "axios";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { SERVER_URL } from "../../utils";
export class ChatPopup extends LitElement {
    togglePopup() {
        this.isPopupOpen = !this.isPopupOpen;
    }
    async sendMessage(questions, key) {
        // Messagge sende to the server add animation of thinking
        const result = await axios.get(`${SERVER_URL}/api/response/get/${key}`, {
            params: {
                question: questions
            }
        });
        const data = result.data;
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
        this.chatData = {};
        this.isPopupOpen = false; // Initialize isPopupOpen
        this.key = ''; // Initialize isPopupOpen
        window.addEventListener('toggle-open-popup', () => {
            this.togglePopup();
        });
        window.addEventListener('send-message', (e) => {
            this.sendMessage(e.detail.message, this.key);
        });
        this.isPopupOpen = false;
    }
    render() {
        return html `
      <div class="chat-popup ${this.isPopupOpen === true ? 'open' : 'close'}">
        <slot></slot>
      </div>
    `;
    }
}
ChatPopup.styles = css `
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
__decorate([
    property({ type: Object })
], ChatPopup.prototype, "chatData", void 0);
__decorate([
    property({ type: Boolean }) // Declare isPopupOpen as a property
], ChatPopup.prototype, "isPopupOpen", void 0);
__decorate([
    property({ type: String }) // Declare isPopupOpen as a property
], ChatPopup.prototype, "key", void 0);
//# sourceMappingURL=ChatPopup.js.map