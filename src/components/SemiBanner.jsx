import { Banner, Button, Layout } from '@douyinfe/semi-ui'
import { useState } from 'react'
import { IconLikeHeart } from '@douyinfe/semi-icons'

export function SemiBanner() {
  const [visiable, setVisiable] = useState(false)
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  }
  const { Header, Content, Footer } = Layout
  return (
    <>
      <Layout>
        <Header style={commonStyle}>Header</Header>
        {visiable && <Banner
          onClose={() => {
            setVisiable(false)
          }}
          description="Semi D2C 现已支持 Figma DevMode, 安装插件，随时查阅图层对应的前端代码"
          type="success"
          fullMode={true}
          icon={<IconLikeHeart/>}
          bordered>
          <div className="semi-modal-footer">
            <button className="semi-button semi-button-tertiary semi-button-light" type="button">No, thanks.</button>
            <button className="semi-button semi-button-warning" type="button">Sounds great!</button>
          </div>
        </Banner>
        }

        <Content
          style={{
            height: 300,
            lineHeight: '300px'
          }}
        >
          Content
        </Content>
        <Footer style={commonStyle}>
          Footer
        </Footer>
      </Layout>
      <Button
        onClick={() => {
          setVisiable(!visiable)
        }}
      >
        {visiable ? 'Hide Banner' : 'Show Banner'}
      </Button>
    </>
  )
}