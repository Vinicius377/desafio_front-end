import React from "react"

import Graph from "."

export default {
  title: "Result/Graph",
  component: Graph,
}

const Template = args => <Graph {...args} />

export const Default = Template.bind({})

Default.args = {
  valuesGraph: {
    comAporte: [100, 101, 102, 104],
    semAporte: ["100", "101", "102", "104"],
  },
}
