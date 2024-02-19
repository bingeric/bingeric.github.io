import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  lang: 'zh-CN',
  title: 'bingericの小站',
  author: {
    name: 'bingeric',
  },
  description: '',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/bingeric',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/626565508',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'Eric18526403730@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },

  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: true,
    title: '.',
    methods: [

    ],
  },
})
