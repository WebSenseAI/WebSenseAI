import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import './component.js';
import axios from "axios";
import { SERVER_URL } from './utils';
console.log('WebSense component script loaded WEBSENSE');
export class WebSense extends LitElement {
    constructor() {
        super(...arguments);
        this.id = '';
        // add data for the bot
        this.botInfo = {
            description: "",
            id: "",
            key: "",
            message: "",
            name: "",
            website: ""
        };
    }
    /* Fetch info */
    async firstUpdated() {
        const response = await axios.get(`${SERVER_URL}/api/info/bot/${this.id}`); // Add the URL of the backend
        const data = response.data;
        this.botInfo = data;
        console.log(this.botInfo);
    }
    render() {
        console.log('WebSense component script loaded RENDER');
        return html `
    <div>
      <chat-popup key=${this.id}>
        <chat-header header=${this.botInfo.name} description=${this.botInfo.description}></chat-header>
        <chat-bubble firstmessage=${this.botInfo.message}></chat-bubble>
        <chat-input></chat-input>
      </chat-popup>
      <open-button>
      </open-button>
    </div>
    `;
    }
}
WebSense.styles = css `
    * {
      font-family: source-sans-pro, sans-serif;
    }
  `;
__decorate([
    property({ type: String })
], WebSense.prototype, "id", void 0);
__decorate([
    property({ type: String })
], WebSense.prototype, "botInfo", void 0);
window.customElements.define('web-sense', WebSense);
//# sourceMappingURL=WebSense.js.map