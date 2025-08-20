import { Button, Divider, Typography } from '@douyinfe/semi-ui'

function Iconlink() {
  return null
}

export const SemiTypography = () => {
  const { Title, Text, Paragraph, Numeral } = Typography
  return (
    <>
      <Divider>Title</Divider>
      <div>
        <Title style={{ margin: '8px 0' }}>h1. semi design</Title>
        <Title heading={2} style={{ margin: '8px 0' }}>h2. Semi Design</Title>
        <Title heading={3} style={{ margin: '8px 0' }}>h3. Semi Design</Title>
        <Title heading={4} style={{ margin: '8px 0' }}>h4. Semi Design</Title>
        <Title heading={5} style={{ margin: '8px 0' }}>h5. Semi Design</Title>
        <Title heading={6} style={{ margin: '8px 0' }}>h6. Semi Design</Title>
      </div>
      <Divider>Text</Divider>
      <div>
        <Text>Text</Text>
        <br/>
        <br/>
        <Text type="secondary">Secondary</Text>
        <br/>
        <br/>
        <Text type="tertiary">{`Tertiary v>=1.2.0`}</Text>
        <br/>
        <br/>
        <Text type="quaternary">{`Quaternary v>=1.2.0`}</Text>
        <br/>
        <br/>
        <Text type="warning">Warning</Text>
        <br/>
        <br/>
        <Text type="danger">Danger</Text>
        <br/>
        <br/>
        <Text type="success">{`Success v>=1.7.0`}</Text>
        <br/>
        <br/>
        <Text disabled>Disabled</Text>
        <br/>
        <br/>
        <Text mark>Default Mark</Text>
        <br/>
        <br/>
        <Text code>
          this is code
        </Text>
        <br/>
        <br/>
        <Text underline>Underline</Text>
        <br/>
        <br/>
        <Text delete>Deleted</Text>
        <br/>
        <br/>
        <Text strong>Strong</Text>
        <br/>
        <br/>
        <Text link={{ href: 'https://baidu.com' }}>链接文本</Text>
        <br/>
        <br/>
        <Text link={{ href: 'https://baidu.com' }}>BLog</Text>
        <br/>
        <br/>
        <Text link icon={<Iconlink/>} underline>带下划线的链接</Text>
      </div>
      <Divider>段落 paragraph</Divider>
      <Paragraph
        spacing={'extended'}
      >
        Semi Design 是由抖音前端团队与 UED 团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
        Web 应用。
      </Paragraph>
      <Divider>数值组件 Numeral</Divider>
      <div>
        <Numeral precision={1}> 1221.1231 </Numeral> <br/><br/>
        <Numeral precision={2} rule="numbers">asda 1221.1231 </Numeral> <br/><br/>
        <Numeral precision={2} rule="percentages">asda 1221.1231 </Numeral> <br/><br/>
        <Numeral rule="bytes-decimal" precision={2} truncate="floor">
          <p>已使用: 1000</p>
          <p>未使用: {1024 * 1000}</p>
        </Numeral>

        <Numeral rule="bytes-binary" precision={2} truncate="floor">
          <p>已使用: 1024</p>
          <p>未使用: {2e12}</p>
        </Numeral>
      </div>
      <Paragraph copyable style={{
        border: '1px solid gray'
      }}>
        可复制文本
      </Paragraph>
      <Paragraph copyable={{
        content: 'fuzhi'
      }} style={{
        border: '1px solid gray'
      }}>
        指定复制文本
      </Paragraph>
      <Paragraph copyable={{
        content: 'fuzhi',
        /* 渲染复制按钮 */
        render: (copied, doCopy, config) => {
          return (
            <Button size="small" onClick={doCopy}>
              <span>{copied ? '复制成功' : `点击复制:${config.content}`}</span>
            </Button>
          )
        }
      }} style={{
        border: '1px solid gray'
      }}>
        指定复制文本
      </Paragraph>
    </>
  )
}