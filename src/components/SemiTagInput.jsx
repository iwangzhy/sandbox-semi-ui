import { TagInput } from '@douyinfe/semi-ui'

export function SemiTagInput() {
  return (
    <>
      <TagInput
        // defaultValue={['douyin', 'houshan', 'xiguashipin']}
        placeholder="enter favorite products..."
        showClear
        // disabled
        onChange={(v) => {
          console.log(v)
        }}
        separator="-"
        size="large"
        validateStatus="warning"
        prefix="prefix"
        suffix="suffix"
        addOnBlur={true}
        allowDuplicates={false}
        // max={2}
        onExceed={(v) => {
          console.log('onExceed', v)
        }}
        maxTagCount={1}
        draggable
      />
    </>
  )
}