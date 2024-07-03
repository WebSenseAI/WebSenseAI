import { __decorate } from "tslib";
import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
export class ChatBubble extends LitElement {
    scrollChat() {
        console.log('scrolling', this.items);
        setTimeout(() => {
            var _a, _b;
            (_a = this.renderRoot.querySelector('.chat-bubble--container')) === null || _a === void 0 ? void 0 : _a.scrollTo({ top: (_b = this.renderRoot.querySelector('.chat-bubble--container')) === null || _b === void 0 ? void 0 : _b.scrollHeight, behavior: 'smooth' });
        }, 100);
    }
    splitString(input) {
        const parts = input.split('/n/');
        return parts;
    }
    async processMessage(m, delay) {
        this.isBotTyping = true;
        this.requestUpdate();
        return new Promise(resolve => {
            setTimeout(() => {
                this.items.push({
                    id: this.items.length + 1,
                    text: m,
                    sender: 'bot',
                });
                resolve(null);
                this.isBotTyping = false;
                this.scrollChat();
                this.requestUpdate();
            }, delay); // 1000 ms delay
        });
    }
    constructor() {
        super();
        this.firstmessage = "";
        this.items = [];
        this.isBotTyping = false;
        window.addEventListener('send-message', (e) => {
            this.isBotTyping = true;
            this.items.push({
                id: this.items.length + 1,
                text: e.detail.message,
                sender: 'user',
            });
            this.scrollChat();
            this.requestUpdate();
        });
        window.addEventListener('add-response', async (e) => {
            const messages = this.splitString(e.detail.message);
            for (let i = 0; i < messages.length; i++) {
                const delay = i === 0 ? 0 : 1000;
                await this.processMessage(messages[i], delay);
            }
        });
    }
    render() {
        return html `
        <div class="chat-bubble--container">
            <div class="chat-bubble left">
                <p>${this.firstmessage}</p>
            </div>  
            ${map(this.items, (i) => html `
                <div class="chat-bubble ${i.sender === 'user' ? 'rigth' : 'left'}">
                    <p>${i.text}</p>
                </div>  
            `)}
            ${this.isBotTyping ? html `
                <div class="full">
                    <div class="chat-bubble left">
                        <chat-bubble-typing></chat-bubble-typing>
                    </div>
                </div>
            ` : html ``}
        </div>
    `;
    }
}
ChatBubble.styles = css `
    .full {
        width: 100%;
        display: flex;
    }
    .chat-bubble--container {
        height: 400px;
        overflow: auto;
        padding-top: 10px;
    }
    .chat-bubble--container::-webkit-scrollbar {
        display: none;
    }
    .chat-bubble.rigth{
        background-color: #4629F2;
        color: white;
        width: fit-content;    
        padding: 10px 15px;
        margin: 10px 15px;
        border-radius: 20px 20px 0px 20px;
        float: right;
        max-width: 70%;
        text-align: right;
        font-size: 14px;
    }
    .chat-bubble.left{
        background-color: #F1F7FF;
        color: black;
        width: fit-content;    
        padding: 10px 15px;
        margin: 5px 15px;
        border-radius: 0px 20px 20px 20px;
        float: left;
        font-size: 14px;
        max-width: 70%;
        text-align: left;
    }
    p {
        margin: 0;
    }
    `;
__decorate([
    property({ type: String })
], ChatBubble.prototype, "firstmessage", void 0);
//# sourceMappingURL=ChatBubble.js.map