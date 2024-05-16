import { OpenButton } from './components/OpenButton';
import { ChatPopup } from './components/Popup/ChatPopup';
import { ChatHeader } from './components/Popup/ChatHeader';
import { ChatBubble } from './components/Popup/ChatBubble';
import { ChatBubbleTyping } from './components/Popup/ChatBubbleTyping';
import { ChatInput } from './components/Popup/ChatInput';

window.customElements.define('chat-popup', ChatPopup);
window.customElements.define('chat-header', ChatHeader);
window.customElements.define('chat-bubble', ChatBubble);
window.customElements.define('chat-bubble-typing', ChatBubbleTyping);
window.customElements.define('chat-input', ChatInput);
window.customElements.define('open-button', OpenButton);