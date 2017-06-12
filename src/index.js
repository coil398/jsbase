import Vue from 'vue'
import App from './App.vue'

window.onload = () => {
    new Vue({
        el: 'body',
        render: h => h(App)
    })
}

console.log('Hello Vue');
