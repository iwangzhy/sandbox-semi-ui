import { Breadcrumb, Divider, Popover } from '@douyinfe/semi-ui'
import React from 'react'
import { IconArticle, IconBookmark, IconHome, IconMore } from '@douyinfe/semi-icons'

export function SemiBreadcrumb() {
  const separator = '-' // 用于拼接 restItem 数组项的分隔符
  const renderMore = restItem => {
    console.log(restItem)
    const content = (
      <>
        {
          restItem.map((item, idx) => (
            <React.Fragment key={`restItem-${idx}`}>
              {item}
              {idx !== restItem.length - 1 &&
                <span style={{ color: 'var(--semi-color-text-2)', marginRight: '6px' }}>
                                    {separator}
                                </span>
              }
            </React.Fragment>
          ))
        }
      </>
    )
    return (
      <Popover
        content={content}
        style={{ padding: 12 }}
        showArrow
      >
        <IconMore/>
      </Popover>
    )
  }

  return (
    <>
      <Breadcrumb
        separator=" -> "
        compact={false}
        maxItemCount={2}
        moreType={'popover'}
        style={{ display: 'none' }}
      >
        <Breadcrumb.Item icon={<IconHome/>}>Semi-ui</Breadcrumb.Item>
        <Breadcrumb.Item icon={<IconBookmark/>}>Semi-ui1</Breadcrumb.Item>
        <Breadcrumb.Item>Semi-ui2</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb
        renderMore={restItem => renderMore(restItem)}
        onClick={(item, e) => console.log(item, e)}
        // style={{ display: 'none' }}
        autoCollapse={false}
      >
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>当层级很多的时候</Breadcrumb.Item>
        <Breadcrumb.Item>又一层</Breadcrumb.Item>
        <Breadcrumb.Item>再一层</Breadcrumb.Item>
        <Breadcrumb.Item>上上一层</Breadcrumb.Item>
        <Breadcrumb.Item>上一层</Breadcrumb.Item>
        <Breadcrumb.Item>详情页</Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb
        routes={['Semi-ui', 'Semi-ui', 'Semi-ui', 'Semi-ui']}
      />
      <Divider/>
      <Breadcrumb routes={
        [
          {
            path: '/',
            href: '/',
            icon: <IconHome size="small"/>
          },
          {
            path: '/breadcrumb',
            href: '/zh-CN/navigation/breadcrumb',
            name: 'breadcrumb',
            icon: <IconArticle size="small"/>
          },
          'with icon'
        ]
      }/>
    </>
  )
}