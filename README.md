# semi-ui

Semi 由抖音出品.

- 主题化
- 国际化
- 跨框架技术方案,将组件的 js 拆分为 2 部分.
    - Foundation - foundation.js 与框架无关的 UI 组件行为逻辑
    - Adapter - .jsx, .vue, .js
        - 组件 DOM 结构声明
        - 所有跟 DOM 操作相关的逻辑
    - ![](https://minio.wangzhy.com/picgo/202508200906539.png)

## 工程搭建

搭建 react 工程

```shell
npx create-react-app sandbox-semi-ui
```

按照 semi-ui

```shell
npm i @douyinfe/semi-ui
```

semi-ui 目前只支持react 16~18,( react 最新版本为 19,目前不支持)

## 暗黑模式

**推荐设置**

```css
body {
    color: var(--semi-color-text-0);
    background-color: var(--semi-color-bg-0);
}
```

**切换**

通过 js 给 body 移除或者添加 `[theme-mode='dark]` 来实现暗黑模式的切换。

```js
const body = document.body;
if (body.hasAttribute('theme-mode')) {
  body.removeAttribute('theme-mode');
} else {
  body.setAttribute('theme-mode', 'dark');
}
```

**和系统主题保持一致**

通过 [`prefers-color-scheme`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme) 属性来与系统主题保持一致。

```js
const mql = window.matchMedia('(prefers-color-scheme: dark)')

function matchMode(e) {
  const body = document.body
  if (e.matches) {
    if (!body.hasAttribute('theme-mode')) {
      body.setAttribute('theme-mode', 'dark')
    }
  } else {
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
    }
  }
}

// 添加监听器，当切换系统主题时，调用 matchMode 方法
mql.addListener(matchMode)
```

**局部暗黑模式**

Semi 支持局部暗黑/亮色模式，在需要暗黑模式的顶级元素加上 `.semi-always-dark` 或者 `.semi-always-light` 的 css class.

## 文案规范

https://semi.design/zh-CN/start/content-guidelines