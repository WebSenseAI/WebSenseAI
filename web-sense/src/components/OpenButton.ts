import { html, css, LitElement } from "lit";

export class OpenButton extends LitElement {
  static styles = css`
    .open-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 70px;
        height: 70px;
        background-image: url(../../assets/open-button.png);
        background-size: cover;
    }
    .open-button--counter {
      float: right;
      background: #B53E3E;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
      border: 2px solid white;
      transform: translate(20%, -20%);
    }
  `;


  handleClick() {
    const event = new CustomEvent('toggle-open-popup', {
      detail: { /* Optional event details */ },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(event);
  }


  render() {
    return html`
      <div @click="${this.handleClick}" class="open-button">
        <span class="open-button--counter">1</span>
      </div>
    `;
  }
}
