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
- 间距 space: https://semi.design/zh-CN/basic/space
    - algin 设置对其方式，`start`, `center`, `end`, `baseline`
    - spacing 设置间距，`tight`, `medium`, `loose`, `{[10,16]}`
    - wrap, 自动换行，要求间距是水平方向。
- 版式 typography： https://semi.design/zh-CN/basic/typography
    - Title 标题
    - Text 文本
        - size `small`, `normal`, `inherit`
        - ellipsis 省略文本
            - 仅支持存文本的截断
            - 要有明确的 width/maxWidth
            - 自身或父级存在 display:none 会导致缩略失效
    - Paragraph 段落
        - spacing `extended`, 宽松行间距
        - copyable 可复制
            - content 复制的文本
            - render 自定义复制按钮的渲染逻辑
    - Numeral 数值组件
        - precision 精度，保留的小数位
        - truncate 小数截取方式，`ceil`,`floor`, `round`
        - rule 解析规则
            - percentages 百分比
            - bytes-decimal 转换为字节，B, KB, MB, GB, TB, PB, EB, ZB, YB
            - bytes-binary
            - text
            - numbers
            - exponential 科学计数法
- 按钮 button: https://semi.design/zh-CN/basic/button
    - theme 主题
        - solid 深色背景
        - light 浅色背景
        - borderless 无背景
        - outline 边框模式
    - size 大小
        - large
        - default
        - small
    - block 块级按钮
    - icon 图标按钮
    - disabled
- 伸缩框 resizable: https://semi.design/zh-CN/basic/resizable
    - defaultSize 初始大小
        - width
        - height
    - enable 控制伸缩方向，默认均为 true
        - top
        - left
        - right
        - bottom
        - topLeft
        - topRight
        - bottomLeft
        - bottomRight
    - ratio 拖动和实际变化的比例
    - lockAspectRatio 锁定横纵比
    - scale 整体缩放
    - boundElement 限制宽高的元素（宽高不允许超过指定的元素）
        - parent
        - window
    - snap 阶段性调整宽高

## 输入类

- 自动补全 autocomplete: https://semi.design/zh-CN/input/autocomplete
    - data, 数组类型
        - 如果元素是一个 Object， 必须有 value、label 字段
    - prefix 选择框的前缀标签
    - position 下拉菜单的显示位置
    - loading 下拉列表是否展示加载动画
    - disabled
    - onSearch 输入变化时的回调
    - renderItem 控制下拉列表候选项的渲染
    - renderSelectedItem 通过 renderSelectedItem 自定义下拉列表候选项被点击选中后，在选择框中的渲染内容
    - onSelect 下拉菜单候选项被选中时的回调
    - emptyContent data 为空时自定义下拉内容
    - autoFocus 是否自动聚焦
    - showClear 是否展示清除按钮
- 级联选择 cascader: https://semi.design/zh-CN/input/cascader
    - treeData 数据结构是一个 tree 型，label、value、children
    - multiple 多选
    - filterTreeNode 可搜索节点，默认根据 label 属性搜索，使用 includes 方法匹配
    - treeNodeFilterProp 指定 filterTreeNode 所匹配的属性
    - filterLeafOnly 只搜索叶子节点
    - maxTagCount 标签展示的数量
    - max
    - leafOnly 只能选择叶子节点
    - bottomSlot 底部插槽
    - topSlot 顶部插槽
    - showNext 设置展开 Dropdown 子菜单的方式，默认是 click
- 复选框 checkbox: https://semi.design/zh-CN/input/checkbox
- 颜色选择器 ColorPicker: https://semi.design/zh-CN/input/colorpicker
    - onChange
    - alpha 是否开启透明度选择
    - bottomSlot
    - topSlot
    - defaultValue
    - eyeDropper 滴管拾色器
    - usePopover 是否放入 Popover 渲染
- 日期选择器 DatePicker: https://semi.design/zh-CN/input/datepicker
    - onChange， 参数是 date,dateString
    - density, 控制日期面板的尺寸， compact, default
    - multiple, 可选择多个日期
    - type
        - date
        - dateRange 日期范围选择
        - dateTime , 选择 `日期 + 时间`
            - 当 type 设置为 `dateTime` 时，如果想要设置 0-24 小时的选择是无限滚动的效果，需要指定 `timePickerOpts`
        - dateTimeRange 日期+时间 范围选择
        - month
        - monthRange
    - insetInput
    - syncSwitchMonth 时间范围组件，是否允许双面板同步切换, 默认 false
    - onPanelChange 在面板的月份或年份切换时被调用。
    - 周选择，通过 weekStartsOn + startDateOffset + endDateOffset
    - needConfirm 确认按钮，`type=dateRange|dateTimeRange` 时有效
        - 可以搭配 onConfirm, onCancel 使用
    - presets 带快捷方式的日期选择
    - disabled
    - placeholder
    - disabledTime, disabledDate 禁用部分日期时间
    - format 自定义格式化
    - triggerRender 触发器
        - 点击触发器，出现日期选择面板
    - renderDate 自定义面板日期显示内容
    - renderFullDate 自定义面板日期格子渲染
- 时间选择器 timepicker https://semi.design/zh-CN/input/timepicker
    - open, 显示时间选择面板
    - format 展示的时间格式
    - houtStep, secondStep, minuteStep 步长
    - use12Hours
    - type, `time|timeRange`
    - triggerRender
    - panelHeader, panelFooter
    - prefix, suffix
- 表单 form: https://semi.design/zh-CN/input/form
    - 表单内的组件需要使用 Form.xxx
    - onValueChange
    - render, 返回 jsx 代码，通过 jsx 代码渲染 Form 表单
    - 在 From 内部可以访问到 `formState`, `values`, `formApi`
    - component 直接将整个内部结构以 ReactNode 形式传入
    - initValues Form 表单内组件的默认值
    - layout, `horizontal|vertical`
    - labelPosition, 控制 label 的文字
    - labelAlign，控制 label 对齐的方向
    - wrapperCol, labelCol
    - noLabel, 隐藏 label
    - labelPosition='inset' 表示内嵌 label
    - validateFields, 一个函数，参数是 values，返回值是一个对象，字段是 field ，值是错误信息。
    - Form.Field
        - field 字段名称 **每个表单控件都需要以 field 属性绑定一个字段名称，用于将表单项的值正确映射到 `FormState`
          values / errors / touched 中**
        - label
            - text
            - extraText
    - Form.Section 表单分组，对 Fields 进行分组，仅影响布局，不会影响数据结构
    - Form.Slot 放置自定义组件，可以让自定义组件与 Form.Field 保持同样的布局样式。
    - InputGroup 组合多个 Form.Field
    - hooks
        - useFormApi
        - useFormState
        - useFieldApi
        - useFieldState
- 输入框 input: https://semi.design/zh-CN/input/input
    - Input
        - addOnBefore 前置标签
        - addOnAfter 后置标签
        - defaultValue 默认值
        - value 受控组件
        - mode, password
        - size large,default,small
        - onEnterPress 回车键的回调
        - prefix
        - suffix 后缀标签
        - validateStatus 校验状态
    - TextArea
        - autoSize 高度根据输入的文字确定
        - maxCount 设置最大字数限制，并显示字数统计
        - rows 默认行数
- 数字输入框 InputNumber https://semi.design/zh-CN/input/inputnumber
    - formatter, parser 搭配使用,用于格式化展示值
    - hideButtons, innerButtons 显示步进按钮
    - max, min
    - precision 精度
    - prefix, suffix
    - step 步长
    - shiftStep 按住 shift 同时点击按钮的步长
- 验证码输入 pincode https://semi.design/zh-CN/input/pincode
    - onComplete
    - onChange
    - count
    - format, number, mixed,正则表达式
- 单选框 radio https://semi.design/zh-CN/input/radio
    - name
    - value
    - onChange
    - extra 辅助文本
    - mode , 可选值, advanced (可取消勾选)
    - RadioGroup 单选框组
        - direction 方向, vertical|horizontal
        - type
            - default
            - button, buttonSize='large|small|middle', type=button 时不支持 extra, direction
            - card
            - purecard
        - options , 通过 options 参数渲染单选框
- 评分 rating https://semi.design/zh-CN/input/rating
    - size, `small|default`
    - allowHalf 半选
    - allowClean 再次点击清除
    - tooltips 提示信息
    - character 自定义字符， 一般会搭配 style 使用
- 选择器 select https://semi.design/zh-CN/input/select
    - **直接子元素必须是 Select.Option 或 Select.OptGroup**
    - 每个 Option 必须包含 value 属性
    - optionList
        - 必须包含 value，label 字段
        - 其他字段也可以通过此方法传入
        - multiple 多选，通常搭配 maxTagCount 使用
    - validateStatus 校验状态， `default|warning|error`
    - prefix, suffix
    - innerBottomSlot，outerBottomSlot
    - filter
        - true: 开启搜索功能,
        - function: 根据返回值判断是否显示
    - autoClearSearchValue=false, 需要 multiple=true， 多选选择后保留搜索值
    - searchPosition
        - dropdown 位于选项上方
        - trigger
    - renderSelectedItem 渲染选择 option
        - 单选，返回 option
        - 多选，返回一个对象 { isRenderInTag:bool, content:ReactNode }
    - onChange
    - allowCreate 创建选项， 通常搭配 defaultActiveFirstOption 使用
        - allowCreate=true 时，不响应 optionList 的变更
    - triggerRender
- 树选择器 treeselect https://semi.design/zh-CN/input/treeselect
    - arrowIcon 自定义右侧下拉 icon
    - clickToHide, 单选模式下，选择之后是否自动关闭下拉弹层
    - expandAll 展开所有节点
    - multiple
    - maxTagCount
    - filterTreeNode 过滤
    - showFilteredOnly 只显示过滤之后的节点
    - showClear
    - leafOnly
    - loadData 异步加载
    - showLine 选项面板中选项显示连接线
    - prefix, suffix
    - triggerRender
- 滑动选择器 slider https://semi.design/zh-CN/input/slider
    - showBoundary 是否在 hover 时展示最大值最小值
    - handleDot , 滑块是否带有圆点
    - marks 刻度
    - max, min
    - railStyle 滑块轨道的样式
    - step 步长
    - tripFormatter tooltip 的展示格式
    - tooltipVisible
    - value
    - vertical
    - onChange
- 开关 switch https://semi.design/zh-CN/input/switch
    - checked, defaultChecked
    - checkedText, uncheckedText
    - loading
    - size
    - disabled
    - onChange, 通常与 checked 搭配使用
- 标签输入框 taginput https://semi.design/zh-CN/input/taginput
    - `输入 + 回车` 就能创建一个新的 tag
    - separator, 用于批量添加 tag
    - showClear
    - disabled
    - suffix, prefix
    - validateStatus
    - addOnBlur, boolean 类型，失去焦点自动创建标签。
    - allowDuplicates, boolean 类型，是否允许创建相同的 tag ，默认 true
    - max, tag 数量超过 max 配置时，会触发 onExceed
    - maxTagCount， 限制 tag 显示的数量
    - renderTagItem 自定义标签渲染
    - draggable 允许拖拽排序
- 穿梭框 transfer https://semi.design/zh-CN/input/transfer
    - 数据项： `{value, label, key}`
    - dataSource 数据来源
    - type `list|groupList|treeList`
        - list, 数组，`{value, label, key}`
        - groupList, 数据源的结构：一级子元素必须拥有 `title`、`children` 属性，二级结构 `{value, label, key}`
        - treeList, `{value, label, key, children}`
    - filter 自定义搜索逻辑
    - renderSelectedItem
    - renderSourceItem
    - draggle 允许拖拽已选择的 item 进行排序
- 上传 upload  https://semi.design/zh-CN/input/upload
    - showTooltip, （文件名较长时）鼠标悬浮，是否显示文件名
        - boolean，控制是否显示
        - {renderTooltip} , 控制如何渲染
    - listType="picture"
    - prompt 提示文本插槽
    - data， **payload**
    - header **自定义请求头**
    - accept 上传文件类型限制
        - `.pdf,.png,.jpeg`
        - `image/*`
        - `video/*`
    - directory 上传文件夹
    - multiple 上传多个文件
    - limit 最大可上传的文件数
    - minSize, maxSize 文件大小限制
    - listType='list',
        - 通过 renderFileOperation 来自定义列表操作区
        - 通过 previewFile 来设置预览逻辑
    - uploadTrigger='custom' 手动触发上传，通过 useRef, 调用 `ref.current.upload();` 来实现手动上传
    - draggable, dragMainText, dragSubText, dragIcon 实现拖拽上传
    - beforeUpload 上传前自定义检验
    - afterUpload 上传后操作
    - customRequest 自定义请求

## 国际化

https://semi.design/zh-CN/other/locale

- LocaleProvider
- 自定义国际化组件
    - LocaleProvider
    - LocaleConsumer

## 导航类

- 锚点 anchor https://semi.design/zh-CN/navigation/anchor
    - getContainer 设置滚动内容的容器，默认是 window
    - targetOffset 文档滚动结束时，锚点距离容器顶部的距离
    - 默认定位方式通过 style 进行定义
    - offsetTop 在滚动内容距离容器顶部达到指定偏移量时触发当前 Link 切换
    - size  `default|small`
    - railTheme `primary|tertiary|muted`
    - autoCollapse 动态展示下级锚点
    - showTooltip 文字超长时，鼠标悬浮，显示完整内容。通常搭配 position 使用
    - defaultAnchor 默认高亮锚点
- 回到顶部 backtop https://semi.design/zh-CN/navigation/backtop
    - BackTop 预设了基本的返回按钮，可以直接调用
    - style 来定义 BackTop 按钮的样式
    - children 定义图标
    - duration 滚动到顶部的时间
    - visibilityHeight 出现 BackTop 按钮需要达到的滚动高度
    - onClick
- 面包屑 breadcrumb https://semi.design/zh-CN/navigation/breadcrumb
    - compact, 尺寸， 默认为 true
    - separator 分隔符，默认为 `/`
    - showTooltip 长文本内容的出来情况
        - boolean , 鼠标悬浮是否显示完整内容
        - `showTooltip={{ width: 'auto' }}` 不截断
        - `showTooltip={{ ellipsisPos: 'middle' }}` 从中间省略
        - `showTooltip={{ opts: { position: 'topLeft' } }}`
    - maxItemCount 路径超过配置的层级之后，自动折叠。
    - moreType 定义点击省略的路径的展现形式 （内置的 `...` 区域的渲染类型，可选值为 'default'、'popover'）
        - default 点击展示, 鼠标悬浮并不会（弹框）展示
        - popover 点击展示, 鼠标悬浮（弹框）展示
    - renderMore 自定义省略路径的展现形式
        - 参数 restItem, 类型是一个 `ReactNode[]` , 表示隐藏的路径
        - 返回值需要是一个 jsx 代码
    - routers 路由对象
        - 可以是 `字符串` 组成的数组
        - 可以是 `{name, path, href, icon}` 组成的数组
            - name: 展示的名称
            - path： 路径路由
            - href 链接的目的地
            - icon 标签图标
    - autoCollapse 自动折叠，通常搭配 maxItemCount(默认值：4) 使用
    - onClick 点击事件
- 导航 navigation https://semi.design/zh-CN/navigation/navigation
    - items 导航项目列表
        - 可以是 `字符串` 组成的数组
        - 可以是 `{itemKey, items?, text, icon}` 组成的数组
            - itemKey key
            - text 文字
            - icon 图标
            - items ，可选， 下级节点
    - header
        - logo 系统 logo
        - text 系统名称
        - link
    - footer
        - collapseButton 是否显示 `收起侧边栏` 按钮
        - collapseText 收起按钮的文字
    - style 定义导航组件最外层样式（作用与 Nav 组件的跟容器，即最外层包裹整个导航的 DOM 元素）
    - bodyStyle 定义导航列表的样式( 导航列表的容器样式，不包含头部 header，底部 footer 两部分的区域)
    - renderWrapper 自定义渲染
    - mode
    - toggleIconPosition NavSub 展开收起箭头的位置，默认是 right
    - limitIndent 缩减限制
    - expandIcon 默认下拉箭头
- 翻页 Pagination https://semi.design/zh-CN/navigation/pagination
    - total
    - pageSize
    - showTotal
    - showSizeChanger
    - showQuickJumper
    - pageSizeOpts
    - size, hoverShowPageSelect
    - prevText, nextText 上一页，下一页的文本
- 步骤 step https://semi.design/zh-CN/navigation/steps
    - current 受控组件
    - direction
    - hasLine, 需要 type=basic
    - initial ， 起始序号
    - status 步骤的状态
        - wait
        - process
        - finish
        - error
        - warning
    - size
        - small
        - default
    - type
        - basic
        - fill
        - nav
    - onChange
- 标签栏 tabs https://semi.design/zh-CN/navigation/tabs
    - Tabs
        - type
            - `card`
            - `slash`
            - `line`
            - `button`
        - tabList `{tab, itemKey}` 组成的数组
        - more, 超过指定数量是，显示 `更多` 按钮
            - count
            - render
            - dropdownProps
        - collapsible 滚动折叠
        - renderArrow 滚动折叠模式下的切换按钮的渲染
        - arrowPosition 指定切换按钮的位置
        - tabBarExtraContent 附加操作区域。在tabs 的右侧
        - activeKey 激活的 tab 的 itemKey 的值
    - TabPane
        - itemKey 文档的 key
        - tab 一个 ReactNode, 可以带图标
        - closeable 允许关闭
- 树形控件 tree https://semi.design/zh-CN/navigation/tree
    - treeData
    - defaultExpandAll
    - multiple
    - filterTreeNode
    - blockNode 行高亮
    - directory 目录树模式
    - draggable 是否允许拖拽
    - icon 自定义图标
    - leafOnly 多选模式下是否开启 onChange 回调入参及展示标签只有叶子节点
    - showLine 连接线
    - loadDate 异步加载数据
    - showClear
    - onChange
    - onExpand 展开
    - onSelect 选中
    - onLoad
    - onSearch
    - onContextMenu 右键点击

## 反馈类

- 通知横幅 banner https://semi.design/zh-CN/feedback/banner
    - bordered 是否展示边框，需要 fullMode = false
    - closeIcon 自定义关闭 icon
    - onClose
    - description 秒数内容
    - icon 自定义 icon
    - type 类型
        - info
        - warning
        - danger
        - success
- 通知 notification https://semi.design/zh-CN/feedback/notification
    - 基本用法 `Notification.open({title, content, duration})`
    - Notification.success
    - content
    - duration, 默认 3 秒后自动关闭， 0 表示需要手动关闭
    - icon 左上角图标
    - position 弹出位置
    - showClose
    - theme, `normal|light`
    - title
    - zIndex
    - onClick, onClose, onCloseClick