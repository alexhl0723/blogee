// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
// import clerk from '@clerk/astro';
// import { dark } from '@clerk/themes'

//import netlify from '@astrojs/netlify';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite:{
      plugins:[tailwindcss()],
  },

  integrations: 
  [
    //clerk({
    //appearance: {
      //baseTheme: dark,  
      //signIn:{ baseTheme: dark},
      //signUp:{ baseTheme: dark},
      //userButton:{ baseTheme: dark},
    //}
  //}),
  react(), mdx()
],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
});