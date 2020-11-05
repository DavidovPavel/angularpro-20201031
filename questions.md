# Дополнительные вопросы


1. Angular Elements: А как-то можно типизировать CustomEvent, который прилетает при клике?
2. Angular Elements: как передать динамически ng-content (не innerHTML)

    Специфика ng-content.
    В данном случае, чтобы правильно отработало необходимоиспользовать slot вместо ng-content, предварительно переключившись на ViewEncapsulation.ShadowDom (иначе slot не заработает)
    это было добавлено тут - https://github.com/angular/angular/pull/24861
    о slot можно почитать тут - https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots
    Пример обновлен - ./2-angular-elements/angular-elements/

3. Service Workers: А можно service worker использовать без добавления pwa? (нужны апдейты, но не нужен офлайн)
