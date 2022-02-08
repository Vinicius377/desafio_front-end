import React from "react"
import alert from "../../../assets/error_outline_black_24dp.svg"
import Tooltip from "."

export default {
  title: "Form/Tooltip",
  component: Tooltip,
}

const Template = args => (
  <>
    <Tooltip {...args} />
  </>
)

export const Default = Template.bind({})

Default.args = {
  children: "lorem Ipsolum",
}
