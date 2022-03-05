import { createApp } from 'vue'
// import App from './App.vue'
import TestApp from './Test.vue'

// createApp(App).mount('#app')


const app = createApp(TestApp)

app.mount('#app')