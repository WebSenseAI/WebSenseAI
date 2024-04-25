import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import './component.js';
import axios from "axios";
import { SERVER_URL } from './utils';
export class WebSense extends LitElement {
  static styles = css`
    * {
      font-family: source-sans-pro, sans-serif;
    }
  `;

  @property({ type: String }) id = '';

  // add data for the bot
  @property({ type: String }) botInfo = {
    description: "",
    id: "",
    key: "",
    message: "",
    name: "",
    website: ""
  };


  /* Fetch info */
  async firstUpdated() {
    const response = await axios.get(`${SERVER_URL}/api/info/bot/${this.id}`); // Add the URL of the backend
    const data = response.data;
    this.botInfo = data;
    console.log(this.botInfo);
  }


  render() {
    return html`
      <chat-popup key=${this.id} >
        <chat-header header=${this.botInfo.name} description=${this.botInfo.description}></chat-header>
        <chat-bubble firstmessage=${this.botInfo.message}></chat-bubble>
        <chat-input></chat-input>
      </chat-popup>
      <open-button></open-button>
    `;
  }
}
