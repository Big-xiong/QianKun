import 'normalize.css/normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { registerMicroApps, start } from 'qiankun';

// 注册微应用
registerMicroApps([
    {
        name: 'vue',
        entry: '//localhost:3000',
        container: '#vue-app',  // 和app.vue配置的节点
        activeRule: '/vue',
        props: {
            msg: "我是来自主应用的值-vue"  // 主应用向微应用传递参数
        }
    },
    {
        name: 'react',
        entry: '//localhost:5174',
        container: '#react-app',  // 和app.vue配置的节点
        activeRule: '/react',
        props: {
            msg: "我是来自主应用的值-react"  // 主应用向微应用传递参数
        }
    }
]);
// 启动 qiankun
start();
