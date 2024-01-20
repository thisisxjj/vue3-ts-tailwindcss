import { createApp } from "vue"

import router from "./router"
import pinia from "./stores"
import { useTheme } from "./utils/theme"

import App from "./App.vue"

import "./assets/style.css"
import "./assets/modal.css"

const app = createApp(App)

app.use(pinia).use(router).mount("#app")

useTheme()
