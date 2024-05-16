import { html, css, LitElement } from "lit";


export class ChatBubbleTyping extends LitElement {
    static styles = css`
      .is-typing {
         margin-top: 0px;
         width: 34px;
         justify-content: space-around;
         display: flex;
      }

      .jump1,
      .jump2,
      .jump3,
      .jump4,
      .jump5 {
         width: 5px;
         height: 5px;
         border-radius: 100%;
         background-color: gray;
      }

      .jump1 {
         animation: typing 1.5s linear infinite;
         animation-delay: 0.1s;
      }

      .jump2 {
         animation: typing 1.5s linear infinite;
         animation-delay: 0.2s;
      }

      .jump3 {
         animation: typing 1.5s linear infinite;
         animation-delay: 0.3s;
      }

      .jump4 {
         animation: typing 1.5s linear infinite;
         animation-delay: 0.4s;
      }

      .jump5 {
         animation: typing 1.5s linear infinite;
         animation-delay: 0.5s;
      }

    @keyframes typing {
     0% {
        transform: translateY(0px);
     }

     25% {
        transform: translateY(0px);
     }

     35% {
        transform: translateY(5px);
     }

     45% {
        transform: translateY(0px);
     }

     60% {
        transform: translateY(-5px);
     }

     75% {
          background-color: white;
        transform: translateY(0px);
     }

     100% {
        transform: translateY(0px);
     }
    }
  `;

    render() {
        return html`
         <div class="is-typing">
            <div class="jump1"></div>
            <div class="jump2"></div>
            <div class="jump3"></div>
            <div class="jump4"></div>
            <div class="jump5"></div>
        </div>
    `;
    }
}
