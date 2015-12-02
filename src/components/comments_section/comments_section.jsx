import React from "react"
import CommentBox from "./_comment_box.jsx"
import CommentList from "./_comment_list.jsx"

export default class CommentSection extends React.Component {
  // Workaround for https://github.com/babel/babel/pull/3113
  constructor(...args) { super(...args) }

  render() {
    var myComments = [{
      author: "Me",
      content: "Hello World!"
    }]
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Hello World</h1>
            <CommentBox/>
            <CommentList comments={myComments}/>
          </div>
        </div>
      </div>
    )
  }

}
