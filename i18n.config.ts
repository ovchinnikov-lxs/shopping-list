export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ru',
    availableLocales: ['en', 'ru'],
    messages: {
        en: {
            app: {
                title: 'Shopping List - create and share',
                description: 'Welcome to our web application for shopping lists! Here, you will find a convenient way to create and manage your shopping lists. Create lists for grocery shopping, plan your culinary experiments, or even organize your tasks.',
                keywords: 'Shopping list, share list',
                version: 'VERSION',
            },

            header: {
                button: {
                    share: 'Share',
                },
            },

            modal: {
                button: {
                    share: {
                        tg: 'Share in TG',
                        link: {
                            copy: 'Copy link',
                            copied: 'The link has been copied',
                        },
                    },
                },
            },

            pages: {
                index: {
                    title: 'Lists',
                    subtitle: 'Your lists',
                    button: {
                        add: 'Add',
                    },
                    list: {
                        item: {
                            title: 'List',
                        },
                        empty: 'You don\'t have any lists yet',
                    },
                },
                listDetail: {
                    title: 'List',
                    notFound: {
                        message: 'There is no such list',
                    },
                    input: {
                        placeholder: 'Enter title',
                    },
                    button: {
                        add: 'Add',
                    },
                },
                login: {
                    title: 'Sign in',
                    subtitle: 'Enter your email to log in',
                    input: {
                        placeholder: 'Enter e-mail',
                        title: 'Enter e-mail',
                    },
                    button: {
                        submit: 'Send the login code',
                    },
                    info: {
                        success: 'A login link has been sent to your email',
                        error: 'An error occurred while sending: ',
                        undefinedError: 'An unexpected error has occurred, please try again later',
                    },
                },
                confirm: {
                    subtitle: 'Authentication',
                },
                error: {
                    link: {
                        home: 'Go back home',
                    },
                },
            },

            button: {
                signOut: 'Log out',
            },
        },
        ru: {
            app: {
                title: 'Shopping List - создавай и делись',
                description: 'Добро пожаловать в наше веб-приложение для составления списков покупок! Здесь вы найдете удобный способ создания списков покупок и управления ими. Создавайте списки для покупок продуктов, планируйте свои кулинарные эксперименты или даже упорядочивайте свои задачи.',
                keywords: 'Список покупок, делиться списками',
                version: 'ВЕРСИЯ',
            },

            header: {
                button: {
                    share: 'Поделиться',
                },
            },

            modal: {
                button: {
                    share: {
                        tg: 'Поделиться в TG',
                        link: {
                            copy: 'Скопировать ссылку',
                            copied: 'Ссылка скопирована',
                        },
                    },
                },
            },

            pages: {
                index: {
                    title: 'Списки',
                    subtitle: 'Ваши списки',
                    button: {
                        add: 'Добавить',
                    },
                    list: {
                        item: {
                            title: 'Список',
                        },
                        empty: 'У вас еще нет ни одного списка',
                    },
                },
                listDetail: {
                    title: 'Список',
                    notFound: {
                        message: 'Такого списка не существует',
                    },
                    input: {
                        placeholder: 'Введите название',
                    },
                    button: {
                        add: 'Добавить',
                    },
                },
                login: {
                    title: 'Вход',
                    subtitle: 'Введите почту что бы войти',
                    input: {
                        placeholder: 'Введите e-mail',
                        title: 'Введите e-mail',
                    },
                    button: {
                        submit: 'Отправить код для входа',
                    },
                    info: {
                        success: 'На вашу почту отправлена ссылка для входа',
                        error: 'Произошла ошибка при отправке: ',
                        undefinedError: 'Произошла ошибка непредвиденная ошибка, попробуйте позже',
                    },
                },
                confirm: {
                    subtitle: 'Аутентификация',
                },
                error: {
                    link: {
                        home: 'На главную',
                    },
                },
            },

            button: {
                signOut: 'Выйти',
            },
        },
    },
}));
