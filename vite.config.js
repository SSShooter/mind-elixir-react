import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode', mode)
  const config = {
    plugins: [react()],
  }
  if (mode === 'production') {
    config.build = {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/MindElixirReact.jsx'),
        name: 'MindElixirReact',
        // the proper extensions will be added
        fileName: 'mind-elixir-react',
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['react', 'react-dom', 'mind-elixir'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {},
        },
      },
    }
  }
  return config
})
