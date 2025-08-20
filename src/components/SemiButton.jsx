import { Button, ButtonGroup, Divider, Dropdown, SplitButtonGroup } from '@douyinfe/semi-ui'
import { IconCamera, IconChevronDown, IconSidebar, IconTreeTriangleDown } from '@douyinfe/semi-icons'
import { useState } from 'react'

export function SemiButton() {
  const menu = [
    { node: 'item', name: '编辑项目', onClick: () => alert('编辑项目点击') },
    { node: 'item', name: '重置项目' },
    { node: 'divider' },
    { node: 'item', name: '复制项目' },
    { node: 'item', name: '从项目创建模版' },
    { node: 'divider' },
    { node: 'item', name: '删除项目', type: 'danger' },
  ]

  const [btnVisible, setBtnVisible] = useState({
    1: false,
    2: false,
    3: false
  })

  const handleVisibleChange = (key, visible) => {
    setBtnVisible({
      ...btnVisible,
      [key]: visible
    })
  }

  return (
    <>
      <div className="btn-margin-right">
        <strong style={{
          color: 'var(--semi-color-primary)'
        }}>
          主要按钮
        </strong>
        <br/>
        <Button
          onClick={() => alert(1)}
          // theme="light" /*浅色背景*/
          // theme="solid" /*深色背景*/
          // theme="borderless" /* 无背景 */
          theme="outline" /* 边框模式 */
        >主要按钮</Button>

        <Button
          type="secondary"
          size="large"
        >次要按钮</Button>
        <Button
          type="tertiary"
          size="small"
        >第三按钮</Button>
        <Button
          type="warning"
          block
        >警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <br/> <br/> <br/>
        <Button icon={<IconCamera/>}/>
        <Button disabled icon={<IconCamera/>}/>
        <Button type="warning" icon={<IconCamera/>}/>
        <Button type="danger" icon={<IconCamera/>}/>

        <Button type="danger" theme="solid" icon={<IconCamera/>}/>

        <br/> <br/> <br/>
        <Button icon={<IconSidebar/>} theme="solid" style={{ marginRight: 10 }}>收起</Button>
        <Button icon={<IconChevronDown/>} theme="solid" iconPosition="right">展开选项</Button>
        <br/> <br/> <br/>
        <Button loading={false}>加载按钮</Button>
        <Button loading={true} type="danger" theme="solid">加载按钮</Button>
        <br/> <br/> <br/>
        <ButtonGroup size="large" disabled type="danger">
          <Button>拷贝</Button>
          <Button>查询</Button>
          <Button>剪切</Button>
        </ButtonGroup>
        <ButtonGroup size="large" type="danger">
          <Button>拷贝</Button>
          <Button>查询</Button>
          <Button>剪切</Button>
        </ButtonGroup>
        <br/> <br/> <br/>
        <Divider>分裂按钮</Divider>
        <div>
          <SplitButtonGroup style={{ marginRight: 10 }} aria-label="项目操作按钮组">
            <Button theme="solid" type="primary">分裂按钮</Button>
            <Dropdown onVisibleChange={(v) => handleVisibleChange(1, v)} menu={menu} trigger="click"
                      position="bottomRight">
              <Button
                style={
                  btnVisible[1]
                    ? {
                      background: 'var(--semi-color-primary-hover)',
                      padding: '8px 4px'
                    }
                    : { padding: '8px 4px' }}
                theme="solid"
                type="primary"
                icon={<IconTreeTriangleDown/>}
              ></Button>
            </Dropdown>
          </SplitButtonGroup>

          <SplitButtonGroup aria-label="项目操作按钮组">
            <Button style={btnVisible[3] ? { background: 'var(--semi-color-fill-0)' } : {}} theme="borderless" type="primary">分裂按钮</Button>
            <Dropdown onVisibleChange={(v) => handleVisibleChange(3, v)} menu={menu} trigger="click" position="bottomRight">
              <Button style={btnVisible[3] ? {
                background: 'var(--semi-color-fill-1)',
                padding: '8px 4px'
              } : { padding: '8px 4px' }} theme="borderless" type="primary" icon={<IconTreeTriangleDown/>}></Button>
            </Dropdown>
          </SplitButtonGroup>
        </div>
      </div>
    </>
  )
}