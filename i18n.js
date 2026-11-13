// Переводы страницы. Русский зашит в HTML, английский — здесь.
// Ключи соответствуют атрибутам data-i18n в index.html.
window.I18N = {
  ru: {
    'nav.projects': 'Сценарии',
    'nav.how': 'Как сделано',
    'nav.contact': 'Контакт',

    'hero.status': 'готов взять задачу на автоматизацию',
    'hero.title': 'Заявки с сайта больше не теряются по дороге',
    'hero.sub':
      'Я настраиваю так, чтобы заявки, посты и утренние сводки делались сами. Работаю один, беру небольшие задачи, цену называю до начала работы.',
    'hero.cta1': 'Обсудить мою задачу',
    'hero.cta2': 'Посмотреть цены',
    'hero.caption': 'приём заявок с сайта',
    'hero.graphDrawing': 'рисуется',
    'hero.graphFlowing': 'данные идут',
    'hero.graphStatic': 'статично',

    'jobs.title': 'Четыре задачи, которые я уже решил',
    'jobs.text':
      'Ниже — четыре задачи с моего сервера. У каждой есть схема, реальные запуски и проверка на тестовых данных: так видно, что решение работает, а не нарисовано.',
    'console.title': 'журнал запусков',
    'console.instance': 'инстанс n8n 2.47.4',

    'spec.before': 'Было',
    'spec.after': 'Стало',
    'spec.result': 'Результат',
    'gets.label': 'Что получает клиент',

    'p1.title': 'Заявки с сайта сразу попадают в таблицу',
    'p1.kind': 'сайт, таблица, уведомление менеджеру',
    'p1.before':
      'Заявки с сайта приходили в почту, менеджер отвечал вручную. Часть заявок терялась.',
    'p1.after':
      'Заявка с сайта сразу попадает в таблицу, менеджер получает уведомление. Клиенту отвечают: «свяжемся в течение 15 минут». Если в имени, телефоне или почте ошибка, заявка не пропадает. Она попадает в отдельный список с пометкой, что исправить.',
    'p1.result':
      'Проверил на двух заявках: правильной и заведомо испорченной. Первая попала в таблицу, вторая в список ошибок.',
    'p1.get1': 'Таблица, куда заявки попадают сразу с сайта',
    'p1.get2': 'Уведомление менеджеру о каждой новой заявке',
    'p1.get3': 'Отдельный список заявок с ошибками и подсказкой, что исправить',
    'p1.cap1': '7 шагов',
    'p1.cap2': '2 ветки',
    'p1.cap3': 'таблица заявок и список уведомлений',

    'p2.title': 'Посты сами выходят в Telegram-канал',
    'p2.kind': 'Google Таблицы и Telegram',
    'p2.before':
      'Посты из таблицы копировали в канал вручную. Черновики иногда попадали в эфир, а одни и те же посты выходили дважды.',
    'p2.after':
      'Каждые 5 минут система сама берёт готовые, одобренные посты. Она собирает текст с хештегами и публикует его в канале. Черновики и отклонённые посты она не трогает.',
    'p2.result': 'В проверке стояло 4 поста, ушли ровно 2: только одобренные.',
    'p2.get1': 'Публикация одобренных постов каждые 5 минут',
    'p2.get2': 'Текст с хештегами, собранный автоматически',
    'p2.get3': 'Защита черновиков и отклонённых постов от случайного выхода',
    'p2.cap1': '6 шагов',
    'p2.cap2': '1 ветка',
    'p2.cap3': 'очередь постов и список опубликованных',

    'p3.title': 'Повторные заявки больше не попадают в базу',
    'p3.kind': 'заявки, таблица, ответ клиенту',
    'p3.before':
      'Один клиент оставлял заявку несколько раз. Отдел продаж тратил время на ручную проверку.',
    'p3.after':
      'Система узнаёт повтор по почте или телефону и не создаёт вторую запись. Новой заявке отвечает «заявка зарегистрирована», повторной «такая заявка уже была, статус прежний». Заявки с пометкой «нужен прайс» и телефоном сразу уходят отдельному человеку.',
    'p3.result':
      'Одна запись на клиента вместо нескольких, ручной проверки повторов больше нет.',
    'p3.get1': 'Одна запись на клиента, даже если он писал несколько раз',
    'p3.get2': 'Разные ответы для новой и повторной заявки',
    'p3.get3': 'Передача заявок с пометкой «нужен прайс» отдельному человеку',
    'p3.cap1': '9 шагов',
    'p3.cap2': '2 ветки',
    'p3.cap3': 'база заявок и список уведомлений',

    'p4.title': 'Утренняя сводка по заявкам в 9:00',
    'p4.kind': 'таблица, сообщение в чат',
    'p4.before':
      'Каждое утро менеджер сводил цифры в таблице и пересылал сводку в чат. Считал каждый раз по-разному.',
    'p4.after':
      'Каждое утро в 9:00 система сама собирает заявки за сутки. Она присылает одно сообщение: всего заявок, сколько срочных, средний приоритет, сумма бюджетов и откуда пришли. Сводки сохраняются, поэтому прошлый день можно сравнить с сегодняшним.',
    'p4.result':
      'В последней сводке: 6 заявок, 5 срочных, средний приоритет 77 из 100, бюджеты на 580 000 ₽.',
    'p4.get1': 'Сообщение в чат каждое утро в 9:00',
    'p4.get2': 'Одинаковый подсчёт каждый день без ручной работы',
    'p4.get3': 'Сохранённая история сводок для сравнения дней',
    'p4.cap1': '6 шагов',
    'p4.cap2': '1 расписание',
    'p4.cap3': 'таблица заявок и история сводок',

    'deck.chrome': 'система n8n на моём сервере',
    'deck.s1.step': 'шаг 1',
    'deck.s1.title': 'Заявка приходит и сразу идёт в работу',
    'deck.s1.text':
      'Форма на сайте отправляет заявку прямо в систему, а не в почту, где она лежит до конца дня и половина теряется.',
    'deck.s2.step': 'шаг 2',
    'deck.s2.title': 'Данные проверяются, а не теряются',
    'deck.s2.text':
      'Имя, телефон и почта сверяются. Если человек ошибся, заявка не исчезает: она попадает в отдельный список с пометкой, что исправить.',
    'deck.s3.step': 'шаг 3',
    'deck.s3.title': 'Заявка лежит в таблице и расходится дальше',
    'deck.s3.text':
      'Из одной таблицы заявка уходит менеджеру в уведомление, попадает в контент-план и учитывается в утренней сводке.',
    'deck.s4.step': 'шаг 4',
    'deck.s4.title': 'Утром приходит одна сводка',
    'deck.s4.text':
      'В 9:00 система закрывает день одним сообщением: сколько заявок, сколько из них срочных, откуда они пришли и какие бюджеты. Дальше это просто таблица, в которой видно динамику.',

    'node.site': 'Сайт',
    'node.check': 'Проверка',
    'node.table': 'Таблица',
    'node.manager': 'Менеджеру',
    'node.channel': 'В канал',
    'node.report': 'Сводка',
    'node.valid': 'Всё',
    'node.customer': 'Клиенту',
    'node.condition': 'Условие',
    'node.gather': 'Свод данных',

    'how.title': 'Как я работаю',
    'how.text':
      'Три шага от вашего описания задачи до работающего решения, которое можно показать и потрогать.',
    'how.s1.title': 'Разбираем вашу задачу',
    'how.s1.text':
      'Вы рассказываете, что сейчас делаете вручную. Я уточняю детали и называю цену до начала работы.',
    'how.s2.title': 'Собираю и проверяю',
    'how.s2.text':
      'Я собираю схему работы и прогоняю её на тестовых данных. Вы видите, как всё работает.',
    'how.s3.title': 'Передаю и показываю',
    'how.s3.text':
      'Вы получаете готовое решение и короткую инструкцию. Если что-то сломалось, помогу бесплатно.',

    'delivery.title': 'Как вы это получите',
    'delivery.text':
      'Два способа. Разница — в том, есть ли у вас уже своя копия n8n и свой сервер.',
    'delivery.1.title': 'Файлы',
    'delivery.1.text':
      'Я отдаю готовые файлы сценария и короткую инструкцию. Вы или ваш технический человек загружаете их в свою копию n8n и создаёте таблицы с указанными именами. Подходит, если n8n у вас уже есть.',
    'delivery.2.title': 'Полная настройка',
    'delivery.2.text':
      'Я сам запускаю n8n на вашем сервере или на свободном сервере под ваш проект. Создаю таблицы, подключаю Telegram, Google Таблицы или базу заявок и показываю работу на тестовых данных. Подходит, если своего сервера нет. Дальше остаётся поддержка, и пока она бесплатная.',

    'price.title': 'Сколько стоит работа',
    'price.lead':
      'Цена «от» включает саму схему, проверку на тестовых данных и короткую инструкцию. Поддержка после сдачи — бесплатно.',
    'price.1': 'Простая автоматизация с одним сервисом',
    'price.2': 'Связка двух-трёх сервисов, например заявки с сайта в Telegram',
    'price.3': 'Многошаговый сценарий с расписанием и отчётами',
    'price.4': 'Полная настройка на вашем сервере с проверкой и обучением',

    'faq.title': 'Частые вопросы',
    'faq.text': 'Те, что задают чаще всего, когда решаются автоматизировать что-то впервые.',
    'faq.1.q': 'Я ничего не понимаю в автоматизации. Мне это подойдёт?',
    'faq.1.a':
      'Да. Вы рассказываете, что делаете вручную, а я предлагаю решение простыми словами и называю цену до начала работы.',
    'faq.2.q': 'А если у меня нет своего сервера?',
    'faq.2.a':
      'Тогда я сам запущу n8n на вашем сервере или на свободном под ваш проект. Это вариант «Полная настройка», от 2 500 ₽.',
    'faq.3.q': 'Что будет, если что-то сломается?',
    'faq.3.a':
      'Пока поддержка бесплатная: если что-то сломалось, неполадками занимаюсь я. Если вы взяли только файлы, поможет короткая инструкция.',
    'faq.4.q': 'Можно ли сначала проверить, как это работает?',
    'faq.4.a':
      'Да. Перед сдачей я прогоняю сценарий на тестовых данных и показываю результат. Например, из 4 тестовых постов ушли ровно 2.',

    'contact.title': 'Расскажите, что вы делаете вручную',
    'contact.text':
      'Напишите, какую задачу хотите убрать из ручной работы. Я отвечу, подойдёт ли автоматизация и сколько она будет стоить.',
    'contact.cta1': 'Написать',
    'contact.cta2': 'Посмотреть цены',
    'contact.line1': 'n8n 2.47.4, self-hosted',
    'contact.line2': 'Приём заявок, посты, сводки',
    'contact.line4': 'Ответ придёт от меня лично',

    'footer.1': 'Я работаю один и беру небольшие задачи для малого бизнеса',
    'footer.2': 'Собрано на локальном инстансе, все запуски проверены',

    'alt.enquiry': 'Канва n8n: заявка с сайта, проверка данных, условие с двумя ветками, запись в таблицу, уведомление менеджеру и ответ клиенту',
    'alt.content': 'Канва n8n: расписание, чтение очереди контента, проверка статуса, сборка текста поста, публикация в канал и отметка опубликовано',
    'alt.landing': 'Канва n8n: заявка с лендинга, проверка и поиск повтора, условие с ветками создания записи и ответа о повторе',
    'alt.report': 'Канва n8n: расписание на 9:00, чтение заявок, сведение данных в одно число, сборка текста сводки, отправка и сохранение в историю',
    'nav.counter': 'сценарий',
    'nav.of': 'из',
  },

  en: {
    'nav.projects': 'Jobs',
    'nav.how': 'How I work',
    'nav.contact': 'Contact',

    'hero.status': 'ready to take on an automation task',
    'hero.title': 'Website enquiries no longer get lost on the way',
    'hero.sub':
      'I set things up so that enquiries, posts and morning reports happen on their own. I work solo, take on small jobs, and give you the price before I start.',
    'hero.cta1': 'Talk about my task',
    'hero.cta2': 'See prices',
    'hero.caption': 'enquiry intake',
    'hero.graphDrawing': 'drawing',
    'hero.graphFlowing': 'data flowing',
    'hero.graphStatic': 'static',

    'jobs.title': 'Four jobs I have already solved',
    'jobs.text':
      'Below are four jobs from my own server. Each one has the workflow, real runs and a check on test data, so you can see it works rather than being drawn.',
    'console.title': 'run log',
    'console.instance': 'n8n 2.47.4 instance',

    'spec.before': 'Before',
    'spec.after': 'After',
    'spec.result': 'Result',
    'gets.label': 'What the client gets',

    'p1.title': 'Website enquiries land in a table straight away',
    'p1.kind': 'website, table, manager notification',
    'p1.before':
      'Enquiries came in by email and the manager replied by hand. Some of them got lost.',
    'p1.after':
      'An enquiry from the site lands in the table right away and the manager gets a notification. The customer is told we will call within 15 minutes. If the name, phone or email is wrong, the enquiry does not vanish: it goes to a separate list with a note of what to fix.',
    'p1.result':
      'Tested on two enquiries, one correct and one deliberately broken. The first landed in the table, the second in the error list.',
    'p1.get1': 'A table where enquiries from the site land immediately',
    'p1.get2': 'A notification to the manager for every new enquiry',
    'p1.get3': 'A separate list of enquiries with errors and what to fix',
    'p1.cap1': '7 steps',
    'p1.cap2': '2 branches',
    'p1.cap3': 'enquiry table and notification list',

    'p2.title': 'Posts publish themselves to the Telegram channel',
    'p2.kind': 'Google Sheets and Telegram',
    'p2.before':
      'Posts were copied from the table into the channel by hand. Drafts sometimes went live, and the same post went out twice.',
    'p2.after':
      'Every 5 minutes the system takes the finished, approved posts on its own. It builds the text with hashtags and publishes it to the channel. Drafts and rejected posts are left alone.',
    'p2.result': 'The test had 4 posts and exactly 2 went out: the approved ones only.',
    'p2.get1': 'Approved posts published every 5 minutes',
    'p2.get2': 'Text with hashtags, assembled automatically',
    'p2.get3': 'Drafts and rejected posts are kept out of the channel',
    'p2.cap1': '6 steps',
    'p2.cap2': '1 branch',
    'p2.cap3': 'post queue and published list',

    'p3.title': 'Repeat enquiries no longer reach the database',
    'p3.kind': 'enquiries, table, reply to the customer',
    'p3.before':
      'One customer kept sending the same enquiry. The sales team spent time checking by hand.',
    'p3.after':
      'The system recognises a repeat by email or phone and does not create a second record. A new enquiry gets "enquiry registered", a repeat gets "we already have this one, status unchanged". Enquiries marked "need a price" with a phone number go straight to one person.',
    'p3.result':
      'One record per customer instead of several, and no more checking repeats by hand.',
    'p3.get1': 'One record per customer, even if they wrote several times',
    'p3.get2': 'Different replies for a new and a repeat enquiry',
    'p3.get3': 'Enquiries marked "need a price" passed to one person',
    'p3.cap1': '9 steps',
    'p3.cap2': '2 branches',
    'p3.cap3': 'enquiry database and notification list',

    'p4.title': 'A morning summary of enquiries at 9:00',
    'p4.kind': 'table, message in chat',
    'p4.before':
      'Every morning the manager added up the numbers in a sheet and pasted the summary into a chat, counting differently each time.',
    'p4.after':
      'At 9:00 the system collects the enquiries from the past day on its own. It sends one message: how many enquiries, how many are urgent, the average priority, the total budget and where they came from. Summaries are kept, so yesterday can be compared with today.',
    'p4.result':
      'The last summary: 6 enquiries, 5 urgent, average priority 77 out of 100, budgets of 580,000 ₽.',
    'p4.get1': 'A message in chat every morning at 9:00',
    'p4.get2': 'The same count every day with no manual work',
    'p4.get3': 'A saved history of summaries to compare days',
    'p4.cap1': '6 steps',
    'p4.cap2': '1 schedule',
    'p4.cap3': 'enquiry table and summary history',

    'deck.chrome': 'the n8n system on my own server',
    'deck.s1.step': 'step 1',
    'deck.s1.title': 'An enquiry arrives and goes straight to work',
    'deck.s1.text':
      'The form on the site sends the enquiry straight into the system, not into an inbox where it sits until the end of the day and half of it is lost.',
    'deck.s2.step': 'step 2',
    'deck.s2.title': 'The details are checked, not lost',
    'deck.s2.text':
      'Name, phone and email are verified. If someone made a mistake the enquiry does not disappear: it goes into a separate list with a note of what to fix.',
    'deck.s3.step': 'step 3',
    'deck.s3.title': 'It sits in the table and spreads from there',
    'deck.s3.text':
      'From one table the enquiry reaches the manager as a notification, lands in the content plan and is counted in the morning summary.',
    'deck.s4.step': 'step 4',
    'deck.s4.title': 'One summary arrives in the morning',
    'deck.s4.text':
      'At 9:00 the system closes the day with a single message: how many enquiries, how many are urgent, where they came from and what the budgets are. After that it is just a table where you can see the trend.',

    'node.site': 'Site',
    'node.check': 'Check',
    'node.table': 'Table',
    'node.manager': 'Manager',
    'node.channel': 'Channel',
    'node.report': 'Summary',
    'node.valid': 'Valid',
    'node.customer': 'Reply',
    'node.condition': 'Condition',
    'node.gather': 'Summary',

    'how.title': 'How I work',
    'how.text':
      'Three steps from your description of the job to a working solution you can look at and try.',
    'how.s1.title': 'We sort out your job',
    'how.s1.text':
      'You describe what you do by hand today. I ask the details and give you the price before I start.',
    'how.s2.title': 'I build and test it',
    'how.s2.text':
      'I put the workflow together and run it on test data. You see how it all works.',
    'how.s3.title': 'I hand it over and show it',
    'how.s3.text':
      'You get a working solution and a short guide. If anything breaks, I will fix it for free.',

    'delivery.title': 'How you get it',
    'delivery.text':
      'Two ways. The difference is whether you already have your own copy of n8n and your own server.',
    'delivery.1.title': 'Files',
    'delivery.1.text':
      'I hand over the ready workflow files and a short guide. You or your technical person loads them into your own copy of n8n and creates the tables with the given names. Works if you already have n8n.',
    'delivery.2.title': 'Full setup',
    'delivery.2.text':
      'I start n8n on your server, or on a spare one for your project. I create the tables, connect Telegram, Google Sheets or your enquiry database, and show it running on test data. Works if you have no server of your own. Support comes after, and it is free for now.',

    'price.title': 'What the work costs',
    'price.lead':
      'The starting price covers the workflow itself, testing it on sample data and a short guide. Support after handover is free.',
    'price.1': 'A simple automation with one service',
    'price.2': 'Two or three services joined up, for example website enquiries into Telegram',
    'price.3': 'A multi-step workflow with a schedule and reports',
    'price.4': 'Full setup on your server with testing and training',

    'faq.title': 'Common questions',
    'faq.text': 'The ones asked most often by people automating something for the first time.',
    'faq.1.q': 'I know nothing about automation. Will this work for me?',
    'faq.1.a':
      'Yes. You describe what you do by hand, and I suggest a solution in plain words and give you the price before I start.',
    'faq.2.q': 'What if I do not have my own server?',
    'faq.2.a':
      'Then I will start n8n on your server, or on a spare one for your project. That is the "Full setup" option, from 2,500 ₽.',
    'faq.3.q': 'What happens if something breaks?',
    'faq.3.a':
      'Support is free for now: if anything breaks, I deal with it. If you only took the files, the short guide will help.',
    'faq.4.q': 'Can I see how it works before I commit?',
    'faq.4.a':
      'Yes. Before handover I run the workflow on test data and show you the result. For example, out of 4 test posts exactly 2 went out.',

    'contact.title': 'Tell me what you do by hand',
    'contact.text':
      'Write which job you would like to take off your hands. I will reply with whether automation fits and what it will cost.',
    'contact.cta1': 'Write to me',
    'contact.cta2': 'See prices',
    'contact.line1': 'n8n 2.47.4, self-hosted',
    'contact.line2': 'Enquiries, posts, morning summaries',
    'contact.line4': 'You will get an answer from me personally',

    'footer.1': 'I work solo and take on small jobs for small business',
    'footer.2': 'Built on a local instance, every run checked',

    'alt.enquiry': 'n8n canvas: an enquiry from the site, a data check, a condition with two branches, writing to a table, a notification to the manager and a reply to the customer',
    'alt.content': 'n8n canvas: a schedule, reading the content queue, checking the status, building the post text, publishing to the channel and marking it published',
    'alt.landing': 'n8n canvas: an enquiry from a landing page, a check and a search for a repeat, a condition branching into creating a record and answering a duplicate',
    'alt.report': 'n8n canvas: a 9:00 schedule, reading the enquiries, reducing the data to one number, building the summary text, sending it and saving the history',
    'nav.counter': 'job',
    'nav.of': 'of',
  },
};
