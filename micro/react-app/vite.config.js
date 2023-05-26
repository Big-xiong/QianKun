import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vite react qiankun下开发者模式需要把这个注释，否则会报错无法启动
    // react(),
    qiankun('react', { // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true
    })
  ],
})
