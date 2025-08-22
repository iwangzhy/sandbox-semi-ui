import { TextArea, useFormState } from '@douyinfe/semi-ui'
import React from 'react'

export default function ComponentUsingFormState() {
  const formState = useFormState()
  return (
    <TextArea
      style={{ marginTop: 10 }}
      value={JSON.stringify(formState, null, 2)}
      autosize
    />
  )
}

export const CustomSleep = ms => new Promise(resolve => setTimeout(resolve, ms))