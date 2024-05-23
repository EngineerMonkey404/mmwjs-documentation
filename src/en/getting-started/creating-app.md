# Creating first app

You can create instance of app using:

```js
const port = 3000;
const app = createApp();

app.listen(port);
```

In this example, app will be listening on port 3000. You can specify port whatever you want.


::: info App Interface 

`createApp()` returns object that implements [App](/api/interfaces/app) interface. 
:::