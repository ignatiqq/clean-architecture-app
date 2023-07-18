Models - отвечает за описание структур с которыми работает приложение. Такое описание очень помогает новым разработчикам проекта понять с чем работает приложение. Кроме того его очень удобно использовать для построения баз данных или проведений валидаций данных хранящихся в модели.

Модели в зависимости от типа использования делятся на разные паттерны:

1. Entities - отвечают за работу с базой данных и представляют из себя структуру повторяющую таблицу или документ в базе данных.
2. DTO (Data Transfer Object) - служат для переноса данных между разными слоями приложения.
3. ViewModel - содержат заранее подготовленную информацию необходимую для отображении в представлении. тоесть какойто маппер.