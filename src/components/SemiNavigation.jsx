import { Nav } from '@douyinfe/semi-ui'
import { IconAvatar, IconDescriptions, IconTree } from '@douyinfe/semi-icons-lab'
import { IconSemiLogo } from '@douyinfe/semi-icons'

export function SemiNavigation() {
  return (
    <>
      <Nav
        items={[
          { itemKey: 'user', text: '用户管理', icon: <IconAvatar/> },
          { itemKey: 'union', text: '活动管理', icon: <IconDescriptions/> },
          { itemKey: 'job', items: ['任务管理', '用户任务查询'], text: '任务平台', icon: <IconTree/> },
        ]}
        header={{
          logo: <IconSemiLogo style={{ height: '36px', fontSize: 36 }}/>,
          text: '运营后台'
        }}
        footer={{
          collapseButton: true
        }}
        style={{ height: 520 }}
        bodyStyle={{ height: 300 }}
      />
    </>
  )
}