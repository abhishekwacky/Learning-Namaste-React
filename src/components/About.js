import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor() {
    super();
    this.state = {};
    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent ComponentDidMount");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div>
        <h1>About Page</h1>
        <h2>This is About page of Namaste React</h2>
        <User />
        <UserClass name={"First"} location={"Dehradun class"} />
      </div>
    );
  }
}

export default About;
