import React from "react"
import Form from "."

export default {
  title: "Form",
  component: Form,
}

const Template = args => <Form {...args} />

export const Index = Template.bind({})
Index.args = {
  getDatas: () => {},
}
