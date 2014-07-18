# bem-examples

Эксперименты по созданию БЭМ-блоков.

    git clone git@github.com:ilyar/bem-examples.git
    cd bem-examples
    npm install
    npm run build
    open desktop.bundles/index/index.html

В bem-examples по умолчанию подключены основные БЭМ-библиотеки:

* [bem-core](https://github.com/bem/bem-core)  
* [bem-components](https://github.com/bem/bem-components)  

## Переменные окружения

```bash
YENV=development|production
BEMTREE_ENV=production|development
BEMTREE_CACHE=off|on
BEMHTML_ENV=production|development
BEMHTML_CACHE=off|on
```

## Требования к установке

* [Node.js](http://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.

## Установка

Вы даже не представляете, насколько легко создать свой БЭМ-проект? *Очень легко*!

Начнем...

    git clone git@github.com:ilyar/bem-examples.git
    cd bem-examples
    npm install

## Практическое применение 

Теперь вызов всех команд [bem-tools](http://ru.bem.info/tools/bem/bem-tools/) возможен так `./node_modules/bem/bin/bem`. Чтоб каждый раз не указывать путь к исполняемому файлу (./node_modules/bem/bin/bem), необходимо установить npm-пакет bem-cli:

`npm install -g bem-cli` или использовать альтернативный метод `export PATH=./node_modules/.bin:$PATH`


### Базовые команды

**Старт сервера**

```bash
bem server # bem server -p 8080 -v info|silly|debug|verbose|warn|error
```

> **подсказка** все команды необходимо выполнять в терминале локально

На вашем компьютере запустился БЭМ-сервер, чтобы проверить это:

    Откройте в браузере http://localhost:8080/desktop.bundles/index/index.html

Остановить сервер также просто: комбинация клавиш `Ctrl` + `C` в активном окне терминала остановит сервер.

**Создание блока**  

    bem create -l desktop.blocks -b newBlock

**Создание страницы**

    bem create -l desktop.bundles -b page

> **совет** Вы можете еще больше упростить работу с сервером, прописав альтернативные имена:
```bash
echo "alias 'bemblock'='bem create -l desktop.blocks -b'" >> ~/.bashrc
echo "alias 'bempage'='bem create -l desktop.bundles -b'" >> ~/.bashrc
````

## Полезные статьи

* [Попробуй БЭМ на вкус](http://ru.bem.info/articles/start-with-project-stub/)  
* [Руководство пользователя по BEMHTML](http://ru.bem.info/libs/bem-core/2.0.0/bemhtml/reference/)  
* [Пошаговое руководство по bem-js](http://ru.bem.info/tutorials/bem-js-tutorial/)  
* [Команды bem-tools](http://ru.bem.info/tools/bem/bem-tools/commands/)
