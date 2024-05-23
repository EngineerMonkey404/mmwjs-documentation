# Controllers 

[[
Controller creation
]](./random-url)

## Controller creation

Controller implements [Controller](./api/interface/controller-interface) interface.

You can create controller instance with next line of code.

```ts
export const myController = createController('controller')
```
[`createController`](./api/functions/create-controller) function accepts as an argument a string which starts with '/'. For more info see
[createController](./api/functions/create-controller) API documentation.

<br>
Once controller is created, you need to register in the App instance.


For only one controller you can use: 
```ts
app.useController(myController)
//or app.useControlllers([myController])
```
<br>
For multiple controllers you can use: 

```ts
app.useControlllers([myController1, myController2])
```





## Controller routing

MMWJS provides realization of next HTTP methods:

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


## Controller usage

After we specified controller we can use it.

Basic usage example:

```ts
const app = createApp()
app.listen(3000)

const myController = createController('controller')

myController.get('controller').go(state)

```





