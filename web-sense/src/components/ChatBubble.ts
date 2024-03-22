import { html, css, LitElement } from "lit";
import { map } from 'lit/directives/map.js';

export class ChatBubble extends LitElement {
    static styles = css`
    .chat-bubble--container {
        height: 400px;
        overflow: auto;
        padding-top: 10px;
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
    }
    p {
        margin: 0;
    }
    `;

    items = [
        {
            id: 1,
            text: 'Hello, how are you doing?',
            sender: 'user',
        },
        {
            id: 2,
            text: "I'm doing well, thank you! How can I help you today?",
            sender: 'bot',
        },
        {
            id: 3,
            text: "I'm looking for a new laptop. Can you help me with that?",
            sender: 'user',
        },
        {
            id: 4,
            text: "Of course! What's your budget?",
            sender: 'bot',
        },
        {
            id: 5,
            text: "I'm looking for something around $1000.",
            sender: 'user',
        },
        {
            id: 6,
            text: "Great! I'll find some options for you. Give me a second.",
            sender: 'bot',
        },
    ];

    render() {
        return html`
        <div class="chat-bubble--container">
            <div class="chat-bubble left">
                <p>👋 Welcome! I'm here to help you with any questions you have. Just ask away!</p>
            </div>
            ${map(this.items, (i) => html`
                <div class="chat-bubble ${i.sender === 'user' ? 'rigth' : 'left'}">
                    <p>${i.text}</p>
                </div>  
            `)}
        </div>
    `;
    }
}
