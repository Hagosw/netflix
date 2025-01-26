import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/netflix",
})

module.exports = {  
  // Other configurations...  
  module: {  
    rules: [  
      {  
        test: /\.css$/,  
        use: ['style-loader', 'css-loader']  
      },  
    ],  
  },  
  output: {  
    // Ensure correct path for GitHub Pages  
    path: path.resolve(__dirname, 'dist'), // or your designated output folder  
    publicPath: '/your-repo-name/', // Adjust this to your repo name  
  },  
};  