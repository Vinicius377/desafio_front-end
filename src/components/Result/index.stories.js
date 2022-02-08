import React from "react"

import Result from "."

export default {
  title: "Result",
  component: Result,
}

const Template = args => <Result {...args} />

export const Index = Template.bind({})

Index.args = {
  primary: true,
  label: "Result",
}
