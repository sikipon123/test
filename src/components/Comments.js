import React, { Component } from "react";
import axios from "axios";

class Comments extends Component {
  state = { details: [] };

  getAllComments = () =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?commentsId=${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          details: res.data
        })
      );

  componentDidMount() {
    this.getAllComments();
  }

  render() {
    return (
      <div className="details">
        {this.state.details.map((el, key) => (
          <div key={key}>
            <h4>{el.body}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
