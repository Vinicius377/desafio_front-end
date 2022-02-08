import React from "react"

import InputNumber from "."

export default {
  title: "Form/InputNumber",
  component: InputNumber,
}

const Template = args => <InputNumber {...args} />

export const Default = Template.bind({})

Default.args = {
  name: "Teste",
  isDone: () => false,
}
