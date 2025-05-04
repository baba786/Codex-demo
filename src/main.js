import { createApp } from 'vue';
import App from './App.vue';

// Import Codex styles
import '@wikimedia/codex/dist/codex.style.css';
import '@wikimedia/codex-design-tokens/dist/theme-wikimedia-ui.css';

const app = createApp(App);
app.mount('#app');
