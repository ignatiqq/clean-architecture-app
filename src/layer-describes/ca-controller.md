Controller - отвечает за взаимодействие пользователя с приложением. Это может быть клик по элеенту на странице консольная команда и т.д. Тоесть IO событие происходящее в приложении.

Задача контроллера получить от пользователя событие и запустить бизнес процессы.

Контроллер не должен знать про View и его можно переиспользовать между платформами, например React, ReactNative, Серверное приложение и т.д.

Simple controller:

```
export class SimpleController { // extends React.Component<object, object>

    public todos: string[] = []; // состояние контроллера

    public addTodo(todo: string): void { // вызывает событие от пользователя
        this.todos.push(todo);
    }

    public removeTodo(index: number): void { // вызывает событие от пользователя
        this.todos.splice(index, 1);
    }

    // public render(): JSX.Element {...} // view injection
}
```

Controller - контроллер в конструктор должен получить абстракции - интерфейсы и соответственно реализации этих интерфейсов в качестве сервисов, к которым он будет обращаться:


```
export class UserPageController {

    // внедряем сервисы в контроллер
    private readonly cartService: CartService = new CartService();
```