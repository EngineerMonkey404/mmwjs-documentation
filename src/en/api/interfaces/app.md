
# App Interface

```ts
interface App {
  kapp: Koa;
  listen(port: number): this;

  use(fn: (app: App) => void): this;

  useController(controller: Controller): this;
  useControllers(controllers: Controller[]): this;
}
```

References: [Controller](./controller.md)

::: info Koa
Koa is koa app interface from [@types/koa](https://www.npmjs.com/package/@types/koa)
:::