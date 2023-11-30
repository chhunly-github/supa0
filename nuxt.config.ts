// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@nuxt/ui'],
  css: ['@/assets/main.css'],
  ssr: true,
  // supabase: {
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY
  // }
})
