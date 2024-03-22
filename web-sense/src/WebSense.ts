import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import './component.js';

export class WebSense extends LitElement {
  static styles = css`
    * {
      font-family: source-sans-pro, sans-serif;
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <chat-popup>
        <chat-header header="WebSenseAI"></chat-header>
        <chat-bubble></chat-bubble>
        <chat-input></chat-input>
      </chat-popup>
    `;
  }
}
