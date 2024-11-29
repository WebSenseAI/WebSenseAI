import axios from "axios";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { SERVER_URL } from "../../utils";

interface ChatMessage {
  sender: 'user' | 'bot';
  message: string;
  timestamp: number;
}

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

  @property({ type: Array })
  chatHistory: ChatMessage[] = [];

  @property({ type: Object })
  chatData = {};

  @property({ type: Boolean })
  isPopupOpen: boolean = false;

  @property({ type: String })
  key: string = '';

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  private loadChatHistory() {
    const storedHistory = localStorage.getItem(`chat_history_${this.key}`);
    if (storedHistory) {
      this.chatHistory = JSON.parse(storedHistory);
    }
  }

  private saveChatHistory() {
    localStorage.setItem(`chat_history_${this.key}`, JSON.stringify(this.chatHistory));
  }

  async sendMessage(question: string, key: string) {
    // Add user message to history
    this.chatHistory.push({
      sender: 'user',
      message: question,
      timestamp: Date.now()
    });
    this.saveChatHistory();

    
    let result;
    try {
      result = await axios.post(
        `${SERVER_URL}/chat/bot/answer`,
        {
          params: {
            botid: key,
            chatid: null,
            question: question,
            history: this.chatHistory
          }
        }
      );
    } catch (error) {
      console.error('Error getting chat response:', error);
      return;
    }


    const data: string = (<any>result).data;
    
    // Add bot response to history
    this.chatHistory.push({
      sender: 'bot',
      message: data,
      timestamp: Date.now()
    });
    this.saveChatHistory();

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
    this.loadChatHistory();
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
