import { Anchor } from '@douyinfe/semi-ui'

export function SemiAnchor() {
  return (
    <>
      <Anchor
        getContainer={() => document.querySelector('window')}
        offsetTop={100}
        targetOffset={100}
        size="default"
        style={{
          position: 'fixed',
          right: '20px',
          top: '100px',
          width: '200px',
          zIndex: 3
        }}
        // railTheme="muted"
        autoCollapse
        defaultAnchor="#尺寸"
      >
        <Anchor.Link href="#基本示例" title="我是固定的 Anchor"/>
        <Anchor.Link href="#综合使用" title="综合使用"/>
        <Anchor.Link href="#尺寸" title="尺寸"/>
        <Anchor.Link href="#滑轨主题" title="滑轨主题"/>
        <Anchor.Link href="#动态展示" title="动态展示"/>
        <Anchor.Link href="#显示工具提示" title="显示工具提示"/>
        <Anchor.Link href="#工具提示位置" title="工具提示位置"/>
        <Anchor.Link href="#API参考" title="API参考">
          <Anchor.Link href="#Anchor" title="Anchor"/>
          <Anchor.Link href="#Anchor.Link" title="Anchor.Link"/>
        </Anchor.Link>
      </Anchor>

    </>
  )
}