import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Wait for DOM to be ready
window.addEventListener('DOMContentLoaded', () => {
  const appElement = document.getElementById('world-time-app')
  if (appElement) {
    createApp(App).mount('#world-time-app')
  }
})
