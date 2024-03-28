import { html, css, LitElement } from "lit";
import { map } from 'lit/directives/map.js';

export class ChatBubble extends LitElement {
    static styles = css`
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
        font-size: 14px;
    }
    .chat-bubble.left{
        background-color: #F1F7FF;
        color: black;
        width: fit-content;    
        padding: 10px 15px;
        margin: 10px 15px;
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


    items = [
        {
            id: 1,
            text: '👋 Welcome! I\'m here to help you with any questions you have. Just ask away!',
            sender: 'bot',
        }
    ];


    constructor() {
        super();
        window.addEventListener('send-message', (e: any) => {
            this.items.push({
                id: this.items.length + 1,
                text: e.detail.message,
                sender: 'user',
            });
            this.requestUpdate();
        })
        window.addEventListener('add-response', (e: any) => {
            this.items.push({
                id: this.items.length + 1,
                text: e.detail.message,
                sender: 'bot',
            });
            this.requestUpdate();
        });
    }

    render() {
        return html`
        <div class="chat-bubble--container">
            ${map(this.items, (i) => html`
                <div class="chat-bubble ${i.sender === 'user' ? 'rigth' : 'left'}">
                    <p>${i.text}</p>
                </div>  
            `)}
        </div>
    `;
    }
}
