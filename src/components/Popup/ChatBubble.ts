import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';


interface ChatBubbleItem {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

export class ChatBubble extends LitElement {
    static styles = css`
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
    @property({ type: String }) firstmessage = "";


    items: ChatBubbleItem[] = [];
    isBotTyping = false;

    scrollChat() {
        console.log('scrolling', this.items);
        setTimeout(() => {
            this.renderRoot.querySelector('.chat-bubble--container')?.scrollTo({ top: this.renderRoot.querySelector('.chat-bubble--container')?.scrollHeight, behavior: 'smooth' })
        }, 100);
    }

    splitString(input: string) {
        const parts = input.split('/n/');
        return parts;
    }


    async processMessage(m: string, delay: number) {
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
        window.addEventListener('send-message', (e: any) => {
            this.isBotTyping = true;
            this.items.push({
                id: this.items.length + 1,
                text: e.detail.message,
                sender: 'user',
            });

            this.scrollChat();
            this.requestUpdate();
        })
        window.addEventListener('add-response', async (e: any) => {
            const messages = this.splitString(e.detail.message);
            for (let i = 0; i < messages.length; i++) {
                const delay = i === 0 ? 0 : 1000;
                await this.processMessage(messages[i], delay);
            }
        });
    }

    render() {
        return html`
        <div class="chat-bubble--container">
            <div class="chat-bubble left">
                <p>${this.firstmessage}</p>
            </div>  
            ${map(this.items, (i) => html`
                <div class="chat-bubble ${i.sender === 'user' ? 'rigth' : 'left'}">
                    <p>${i.text}</p>
                </div>  
            `)}
            ${this.isBotTyping ? html`
                <div class="full">
                    <div class="chat-bubble left">
                        <chat-bubble-typing></chat-bubble-typing>
                    </div>
                </div>
            ` : html``
            }
        </div>
    `;
    }
}
