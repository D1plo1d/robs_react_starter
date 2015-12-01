import React from "react"

export default class CommentList extends React.Component {
  // Workaround for https://github.com/babel/babel/pull/3113
  constructor(...args) { super(...args) }

  static defaultProps = {
    comments: [
      {
        content: "Whatever n00b./ I can totally hax u to sn4fu!!!1111",
        author: "coolguy420",
      },
      {
        content: "Oh you are so 2012",
        author: "gormenghast_lover64",
      },
      {
        content: "YOLO!",
        author: "coolguy420",
      },
    ]
  }

  // render() {
  //   return (
  //     <div>
  //       <h1>And this is being rendered by my CommentList component</h1>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div>
        <h1>Other People's Comments</h1>
        <div>
          {
            this.props.comments.map(function (comment, i) {
              return (
                <div key={i}>
                  <h4>{comment.author} says</h4>
                  <p>{comment.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}
