import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = { Lists: [] };

  getOneuser = () =>
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?postsId=${this.props.match.params.id}`
      )
      .then(res =>
        this.setState({
          Lists: res.data
        })
      );

  componentDidMount() {
    this.getOneuser();
  }

  render() {
    return (
      <div className="motherpost">
        {this.state.Lists.map((el, key) => (
          <div key={key} className="postCard">
            <div className="postcontent">
              <img src="https://thumbs.dreamstime.com/t/k-el-circuito-el%C3%A9ctrico-virtual-l%C3%ADneas-de-la-tecnolog%C3%ADa-de-la-ciencia-matriz-puntea-el-fondo-de-la-part%C3%ADcula-80586108.jpg"></img>
              <span>
                <h3>{el.title}</h3>
                <h4>{el.body}</h4>
              </span>
            </div>
              <Link to={`/Comments/${el.id}`} className="link">Comments</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
