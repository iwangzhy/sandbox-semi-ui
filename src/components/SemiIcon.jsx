import {
  IconAlertCircle,
  IconEmoji,
  IconFlag,
  IconHelpCircle,
  IconHome,
  IconLikeHeart,
  IconLock,
  IconMinusCircle,
  IconPlus,
  IconPlusCircle,
  IconRefresh,
  IconSearch,
  IconSpin,
  IconUnlock
} from '@douyinfe/semi-icons'
import React from 'react'
import { Icon } from '@douyinfe/semi-ui'

export function SemiIcon() {
  const types =
    [<IconSearch/>, <IconHelpCircle/>, <IconAlertCircle/>, <IconMinusCircle/>, <IconPlusCircle/>, <IconPlus/>,
      <IconRefresh/>]
  const sizes = ['extra-small', 'small', 'default', 'large', 'extra-large']
  let icons = types.map((type, i) => {
      return (<div key={i} style={{ marginBottom: '4' }}>
        {
          sizes.map(size => {
            /*
              React.cloneElement(element,props,...children) 使用 element 作为初始值创建一个新的 react 元素
              {size, key: size} js 的字面量写法。等同于 { size: size, key: size}
            */
            return React.cloneElement(type, { size, key: size })
          })
        }
      </div>)
    }
  )

  function CustomIcon() {
    return <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" fill="#FBCD2C"/>
      <mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
        <circle cx="12" cy="12" r="11" fill="#A2845E"/>
      </mask>
      <g mask="url(#mask0)">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M11.9996 17.7963C13.7184 17.7963 15.2479 16.3561 16.0881 14.2048C16.6103 13.9909 17.1072 13.3424 17.334 12.4957C17.629 11.3948 17.5705 10.4118 16.7665 10.1059C16.6885 6.27115 15.1754 4.78714 11.9996 4.78714C8.82412 4.78714 7.31097 6.27097 7.2328 10.1052C6.42711 10.4103 6.36828 11.394 6.66349 12.4957C6.89064 13.3435 7.38849 13.9926 7.91145 14.2056C8.7518 16.3565 10.2811 17.7963 11.9996 17.7963ZM20.0126 23C20.34 23 20.5906 22.7037 20.4686 22.3999C19.6099 20.2625 16.1444 18.6636 12 18.6636C7.85555 18.6636 4.39008 20.2625 3.53142 22.3999C3.40937 22.7037 3.65999 23 3.9874 23H20.0126Z"
              fill="white"/>
      </g>
    </svg>
  }

  return (
    <>
      <IconHome size="large"/>
      <IconEmoji/>
      <IconSpin spin={true}/>
      {/*可以通过修改 font-size 来改变图标大小*/}
      {icons}
      {/* color */}
      <div style={{ color: '#e91e36' }}>
        <IconLikeHeart size={'large'}/>
        <IconFlag size={'large'}/>
        <IconLock style={{ color: '#6a3ac7' }} size={'large'}/>
        <IconUnlock style={{ color: '#6a3ac7' }} size={'large'}/>
      </div>
      <div>
        <Icon svg={<CustomIcon/>} size={'extra-large'}/>
        <Icon
          svg={<CustomIcon/>}
          size={'extra-large'}
          // spin={true}
          onClick={() => { alert(1) }}
          rotate={90}

        />
      </div>
    </>
  )
}