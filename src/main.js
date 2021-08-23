import { createApp } from 'vue'
import App from './App.vue'

//Nếu muốn nhúng file style cho global thì import kiểu này khi tách riêng ra ấy xem trong RHP Team 

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//Chưa hỗ trợ trong Vue 3
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// createApp.use(BootstrapVue)
// createApp.use(IconsPlugin)


createApp(App).mount('#app')
