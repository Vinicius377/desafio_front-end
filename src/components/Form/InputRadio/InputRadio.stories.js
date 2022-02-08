import React from "react"
import InputRadio from "."

export default {
  title: "form/InputRadio",
  component: InputRadio,
}

const Template = args => <InputRadio {...args} />

export const Two = Template.bind({})
Two.args = {
  buttons: ["Value1", "Value2"],
  name: "input",
  onSetValue: () => false,
}
export const Three = Template.bind({})
Three.args = {
  buttons: ["Value1", "Value2", "Value3"],
  name: "input",
  onSetValue: () => false,
}
