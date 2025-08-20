import { Divider } from '@douyinfe/semi-ui'

export function SemiDivider() {
  return (
    <div>
      <h3>水平线</h3>
      <span>Semi Design 是一个设计系统。</span>
      <Divider margin="12px"/>
      <span>它定义了一套中后台设计与前端基础组件。</span>

      <h3 style={{ marginTop: '40px' }}>水平虚线</h3>
      <span>Semi Design 是一个设计系统。</span>
      <Divider dashed={true} margin="12px"/>
      <span>它定义了一套中后台设计与前端基础组件。</span>

      <h3 style={{ marginTop: '40px' }}>垂直实线</h3>
      <div>
        <span>左</span>
        <Divider layout="vertical" margin="12px"/>
        <span>中</span>
        <Divider layout="vertical" margin="12px"/>
        <span>右</span>
        <Divider layout="vertical" margin="12px"/>
      </div>
      <Divider>
        分割线中包含文字，文字会被加粗
      </Divider>

      <Divider align="left">
        分割线中包含文字, algin 属性可以控制对齐方式
      </Divider>

      <Divider style={{ fontSize: '30px', color: 'red' }}>
        自定义样式
      </Divider>

      <Divider dashed={true}>
        虚线使用 dashed 属性控制
      </Divider>
      <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
      }}>
        <span> 嘻嘻嘻</span>
        <Divider layout="vertical" margin={20} style={{
          border: '1px solid black'
        }}>
          layout 控制方向 (垂直方向的分割线无法添加文字)
        </Divider>
      </div>
    </div>
  )
}