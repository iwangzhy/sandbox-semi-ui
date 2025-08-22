import { Rating } from '@douyinfe/semi-ui'
import { useState } from 'react'
import { IconLikeHeart } from '@douyinfe/semi-icons'

export function SemiRating() {
  const [value, setValue] = useState(1)
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']
  return (
    <>
      <span>How was the help you received:{value ? <span>{desc[value - 1]}</span> : ''}</span>
      <br/>
      <Rating
        size="default"
        // defaultValue={4}
        // allowHalf
        // allowClear
        // disabled
        tooltips={desc}
        value={value}
        onChange={(v) => setValue(v)}
        character={<IconLikeHeart/>}
        style={{ color: 'red' }}
      />
    </>
  )
}