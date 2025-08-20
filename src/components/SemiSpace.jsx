import { Button, Divider, Space, Switch, TabPane, Tabs, Tag } from '@douyinfe/semi-ui'

export function SemiSpace() {
  const divStyle = {
    width: 80,
    height: 100,
    lineHeight: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--semi-color-border)',
    borderRadius: 3
  }

  return (
    <>
      <Space>
        <Switch defaultChecked={true}/>
        <Button type="primary">首要</Button>
        <Button type="secondary">次要</Button>
        <Button type="tertiary">第三</Button>
        <Button type="warning">警告</Button>
      </Space>
      <Divider>对齐方式</Divider>
      <Space vertical>
        <Space align={'start'}>
          <div style={divStyle}>文本</div>
          <Button theme="solid" type="primary">按钮</Button>
          <Tag color="green" size="large">标签</Tag>
        </Space>
        <Space align={'center'}>
          <div style={divStyle}>文本</div>
          <Button theme="solid" type="primary">按钮</Button>
          <Tag color="green" size="large">标签</Tag>
        </Space>
        <Space align="end">
          <div style={divStyle}>文本</div>
          <Button theme="solid" type="primary">按钮</Button>
          <Tag color="green" size="large">标签</Tag>
        </Space>
        <Space align="baseline">
          <div style={divStyle}>文本</div>
          <Button theme="solid" type="primary">按钮</Button>
          <Tag color="green" size="large">标签</Tag>
        </Space>
      </Space>
      <Divider>间距</Divider>
      <Tabs type={'line'}>
        <TabPane tab={'tight'} itemKey={'1'}>
          <Space spacing="tight" style={{ marginTop: '15px' }}>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
          </Space>
        </TabPane>
        <TabPane tab={'medium'} itemKey={'2'}>
          <Space spacing="medium" style={{ marginTop: '15px' }}>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
          </Space>
        </TabPane>
        <TabPane tab={'loose'} itemKey={'3'}>
          <Space spacing="loose" style={{ marginTop: '15px' }}>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
          </Space>
        </TabPane>
        <TabPane tab={'array'} itemKey={'4'}>
          <Space spacing={[10, 10]} wrap style={{ marginTop: '15px' }} vertical={true}>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
            <Button theme="solid" type="primary">按钮</Button>
          </Space>
        </TabPane>
      </Tabs>
    </>
  )
}