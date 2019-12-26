import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export class UsersList extends Component {
  state = { users: [] };

  getAllusers = () =>
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>
      this.setState({
        users: response.data
      })
    );

  componentDidMount() {
    this.getAllusers();
  }
  render() {
    return (
      <div className="motheruser">
        {this.state.users.map((el, key) => (
          <div key={key} className="userCard">
            <div>
              <img src="https://www.mentoring.org/new-site/wp-content/uploads/2019/05/default-user-300x300.png"></img>
              <span className="username">
                <h1>{el.name}</h1>
                <h3>{el.username}</h3>
              </span>
            </div>
            <div>
              <span role="img" area-label="mail">
                📧
              </span>
              <span>{el.email}</span>
            </div>
            
              <span role="img" area-label="mail">
                📱
              </span>
              <span>{el.website}</span>
              <Link to={`/posts/${el.id}`} className="link">
              Following
            </Link>
            
            
          </div>
        ))}
      </div>
    );
  }
}

export default UsersList;
