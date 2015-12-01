import React from "react"

export default class CommentBox extends React.Component {
  // Workaround for https://github.com/babel/babel/pull/3113
  constructor(...args) { super(...args) }

  render() {
    return (
      <div>
        <h1>So this is being rendered by my CommentBox component</h1>
        <h1>...</h1>
      </div>
    )
  }

}
