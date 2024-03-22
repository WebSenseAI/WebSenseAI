import { ChatPopup } from './components/ChatPopup.js';
import { ChatHeader } from './components/ChatHeader.js';
import { ChatBubble } from './components/ChatBubble.js';
import { ChatInput } from './components/ChatInput.js';

window.customElements.define('chat-popup', ChatPopup);
window.customElements.define('chat-header', ChatHeader);
window.customElements.define('chat-bubble', ChatBubble);
window.customElements.define('chat-input', ChatInput);