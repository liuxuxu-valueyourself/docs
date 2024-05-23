module.exports = {
    title: '测试',
    description: '凌览，微信搜索「程序员凌览」关注我，长期交流学习。不知名前端，Node.js爱好者',
    themeConfig: {
        logo: '/avatar.png',
        //顶部导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: 'https://linglan01.cn/' },
            { text: '掘金', link: 'https://juejin.cn/user/3350967174565198' },
            { text: 'Github', link: 'https://github.com/CatsAndMice' }
        ],
        sidebar: 'auto',
        theme: 'reco',
        locales: {
            '/': {
                lang: 'zh-CN'
            }
         },
    }
 }