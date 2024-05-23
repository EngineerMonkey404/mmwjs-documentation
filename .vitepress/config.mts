import {defineConfig} from 'vitepress'
import {englishThemeConfig } from './english-theme'
import { russianThemeConfig } from './russian-theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MMWJS Documentation",
    description: "Documentation for MMWJS framework",
    themeConfig: {
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
    locales: {
        root: {
          label: 'Russian',
          lang: 'ru',
          themeConfig: russianThemeConfig
        },
        en: {
          label: 'English',
          lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
          themeConfig: englishThemeConfig
        }
      },
    srcDir: './src'
})
