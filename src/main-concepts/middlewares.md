# Middlewares 

Контроллеры служат для обработки запросов по определенным маршрутам. 
В этой секции вы научитесь создавать контроллеры, регистрировать их в приложении, создавать обработчики маршрутов, объединять маршруты контроллеров.

## Использование middleware
Вы можете добавить middleware при создании контроллера:

```ts
const myController = createController('controller').use(useReq())
```
Функция [`createController`](./api/functions/create-controller)  принимает аргумент типа `string`, который начинается с '/'. Для большей информации вы можете обратиться к API-документации
[createController](./api/functions/create-controller).
::: info App Interface 

`createController()` возвращает объект реализующий [Controller](/api/interfaces/controller-interface) интерфейс. 
:::
<br>
После создания контроллера его необходимо зарегистрировать в приложении.


Для одного контроллера вы можете использовать: 
```ts
app.useController(myController)
//or app.useControlllers([myController])
```
<br>
Для нескольких контроллеров вы можете использовать: 

```ts
app.useControlllers([myController1, myController2])
```


## Доступные middlewares

MMWJS предоставляет реализацию следующих HTTP методов:

### GET
```ts
myController.get('/test-path')
```

### POST
```ts
myController.post('/test-path')
```

### PUT
```ts
myController.put('/test-path')
```

### DELETE
```ts
myController.delete('/test-path')
```

### PATCH
```ts
myController.patch('/test-path')
```
### HEAD
```ts
myController.head('/test-path')
```
### ALL
```ts
myController.all('/test-path')
```


## Использование контроллера

После того как контроллер был определен, его можно использовать.

Пример использования:

```ts
const app = createApp()
app.listen(3000)

const myController = createController('controller')

myController.get('controller').go(state)

```





