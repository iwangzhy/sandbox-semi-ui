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

