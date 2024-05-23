

export const russianThemeConfig  = {
    nav: [
        {text: 'Главная', link: '/'},
        {text: 'Примеры', link: '/markdown-examples'}
    ],

    sidebar: [
        {
            text: 'Начало',
            collapsed: true,
            items: [
                {
                   text: "Установка", link: "/getting-started/installation"
                },
                {text: "Создание приложения", link: "/getting-started/creating-app" },
            ]

        },
        {
            text: 'Основные концепты',
            collapsed: true,
            items: [{
                text: 'Контроллеры',
                link: '/main-concepts/controllers'
            },
            {
                text: 'Middlewares',
                link: '/main-concepts/middlewares'
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
                text: 'Интерфейсы',
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