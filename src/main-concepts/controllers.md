# Контроллеры 

Контроллеры служат для обработки запросов по определенным маршрутам. 
В этой секции вы научитесь создавать контроллеры, регистрировать их в приложении, создавать обработчики маршрутов, объединять маршруты контроллеров.

## Создание контроллера


Вы можете создать объект контроллера с помощью следующего кода:

```ts
const myController = createController('/controller')
```
Функция [`createController()`](./api/functions/create-controller)  принимает аргумент типа `string`, который начинается с '/'. Для большей информации вы можете обратиться к API-документации
[createController()](./api/functions/create-controller).
::: info Интерфейс Controller

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
app.useControllers([myController1, myController2])
```


## Маршрутизация контроллера

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

const myController = createController('/controller')

myController.get().go((state) => { console.log(state)})

app.useController(myController)

```
Метод `go()` принимает в себя callback-функция с единственным аргументом `state`. Аргумент `state` является объектом, хранящим в себе данные о результатах работы всех middlewares. Метод `go()` используется как конечная точка обработки маршрута. Значение, возвращаемое из callback-функции, является ответом на запрос.

## Объединение контроллеров

Для объединения двух контроллеров доступен метод `join()`. Метод принимает два аргумента: 
- controller - объект типа `Controller`.
- prefix - строка, начинающаяся со "/". Префикс для маршрутов объединяемого контроллера.

Пример: 

```ts
const app = createApp()
app.listen(3000)

const innerController = createController('/innerController')
innerController.post('/create').go((state) => {console.log(state)})

const myController = createController('/controller')
myController.get().go((state) => { console.log(state)})
myController.join(innerController, '/prefix')

app.useController(myController)

```

В данном примере создан контроллер для объединения `innerController`. Контроллер `innerController` обладает обработчиком одного запроса по маршруту `/innerController/create` HTTP-метода POST. После объединения контроллеров обработчик по маршруту `/innerController/create` будет доступе по маршруту `/controller/prefix/innerController/create/`. 


При объединении
