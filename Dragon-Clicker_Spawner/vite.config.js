import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: "/DRAGON-CLICKER_SPAWNER",
build: {
outDir: 'docs'
}
})