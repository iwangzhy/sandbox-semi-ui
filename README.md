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

通过 [`prefers-color-scheme`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)
属性来与系统主题保持一致。

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

## Design Token

将设计中的基础元素与具体的样式进行解耦。

### 基础色

因为**风格样式是在不断迭代的**，在迭代的过程中只需要修改 **变量对象的属性值** 。

`--semi-{color}-x`

### 功能色

- --semi-color-xxx
- --semi-color-xxx-hover
- --semi-color-xxx-active
- --semi-color-xxx-disabled
- --semi-color-xxx-light-default 浅版主要颜色（多用于背景）。**仅**在需要非常强调的情况下使用。
- --semi-color-xxx-light-hover
- --semi-color-xxx-light-active

1. 主要颜色 - primary， 主要颜色，**仅**在需要非常强调的情况下使用。
2. 次要颜色 - secondary
3. 第三颜色 - tertiary，用户界面中非强调色及各种交互态颜色，通常用于常规、非强调功能操作按钮。
4. 信息 - info， 表达客观、中立信息
5. 成功 - success, 成功、完成、开启状态
6. 警示 - warning, 警告、不安全状态
7. 危险 - danger
8. 文本与图标颜色 - text
9. 链接颜色 - link
10. 背景色 - bg  `--semi-color-bg-0` 数字越大越靠近上层
11. 填充色 - fill
12. 描边色 - border `--semi-corlor-border`
13. 禁用态 - disabled `--semi-color-disabled-text`, `--semi-color-disabled-border`, `--semi-color-disabled-bg`,
    `--semi-color-disabled-fill`
14. 常量色 - static
15. 拟阴影色 - shadow `--semi-corlor-shadow`

### 字体排版

1. 字号 `$font-size-header-x`(x 级标题字体，1-6), `$font-size-small`(小号字体), `$font-size-regular`(常规字体)
2. 字重 `$font-weight-light`, `$font-weight-regualr`, `$font-weight-weight`
3. 字体

### 圆角

![](https://minio.wangzhy.com/picgo/202508201118699.png)

### 阴影

![](https://minio.wangzhy.com/picgo/202508201118666.png)

### 尺寸

![](https://minio.wangzhy.com/picgo/202508201118394.png)
![](https://minio.wangzhy.com/picgo/202508201118790.png)
![](https://minio.wangzhy.com/picgo/202508201118717.png)

### 间距

![](https://minio.wangzhy.com/picgo/202508201118321.png)

### z-index

![](https://minio.wangzhy.com/picgo/202508201119053.png)
![](https://minio.wangzhy.com/picgo/202508201119013.png)

### 动画

https://semi.design/zh-CN/basic/tokens

## 基础组件

- 分割线 divider：https://semi.design/zh-CN/basic/divider
- 栅格 grid: https://semi.design/zh-CN/basic/grid
    - 基于 row、col
    - 支持 flex 布局
    - 支持使用 order 来定义元素的排列顺序
- 图标 icon: https://semi.design/zh-CN/basic/icon
    - 默认图标集 `@douyinfe/semi-icons`
    - 彩色图标集 `@douyinfe/semi-icons-lab`
    - 可以通过改变 size 属性来调整 icon 的大小， `extra-small`, `small`, `default`, `large`, `extra-large`, `inherit`,
    - 颜色，会自动继承外部容器 css 的 color 属性，可以通过 style 来指定。
    - 自定义图标，（svg）
- 布局 layout: https://semi.design/zh-CN/basic/layout
    - Layout: 布局容器，可以嵌套Header、Sider、Content、Footer
    - Header：顶部布局
    - Sider：侧边栏
    - Content：内容部分
    - Footer：底部布局
    - 布局模式采用 flex 布局实现。