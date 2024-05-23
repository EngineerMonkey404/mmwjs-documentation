export const englishThemeConfig = {
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Examples', link: '/markdown-examples'}
    ],

    sidebar: [
        {
            text: 'Getting started',
            collapsed: true,
            items: [
                {
                   text: "Installation", link: "/getting-started/installation"
                },
                {text: "Creating app", link: "/getting-started/creating-app" },
            ]

        },
        {
            text: 'Main Concepts',
            collapsed: true,
            items: [{
                text: 'Controllers',
                link: '/main-concepts/controllers'
            },]
        },

        {
            text: 'Examples',
            collapsed: true,
            items: [

                {text: 'Markdown Examples', link: '/markdown-examples'},
                {text: 'Runtime API Examples', link: '/api-examples'}
            ]
        },
        {
            text: 'API',
            collapsed: true,
            items: [{
                text: 'Interfaces',
                collapsed: true,
                items: [
                    {
                        text: "App",
                        link: '/api/interfaces/app'
                    },
                    {
                        text: "Controller",
                        link: '/api/interfaces/controller'
                    },
                ]
            },]
        },
    ],

    
}