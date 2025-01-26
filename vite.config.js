import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "/netflix",

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
    publicPath: '/netflix/', // Adjust this to your repo name  
  },  

})

