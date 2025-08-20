import { useState } from 'react'
import { Resizable, Toast } from '@douyinfe/semi-ui'

export const SemiResizable = () => {

  const [text, setText] = useState('Drag edge to resize')

  const opts1 = {
    content: 'resize start',
    duration: 1,
    stack: true
  }
  const opts2 = {
    content: 'resize end',
    duration: 1,
    stack: true
  }

  return (
    <>
      <div style={{ width: '500px' }}>
        <Resizable
          style={{ backgroundColor: 'rgba(var(--semi-grey-1), 1)' }}
          enable={{
            right: false
          }}

          ratio={2}
          defaultSize={{
            width: 100,
            height: 100,
          }}
          onChange={() => {
            setText('resizing')
          }}
          onResizeStart={() => Toast.info(opts1)}
          onResizeEnd={() => {
            Toast.info(opts2)
            setText('Drag edge to resize')
          }}
          lockAspectRatio
          maxWidth={200}
          maxHeight={300}
          minWidth={100}
          minHeight={100}
          scale={0.5}
        >
          <div style={{ marginLeft: '20px', marginTop: '20px' }}>{text}</div>
        </Resizable>
      </div>
    </>
  )
}