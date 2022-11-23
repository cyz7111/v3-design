import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 使用 vite 启动组件测试的本地服务
export default defineConfig({
    plugins:[vue()]
})