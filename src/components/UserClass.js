import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo",
      },
    };
    console.log(this.props.name + " Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/abhishekwacky");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.setState({ count: count + 1 });
    }
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("Render");
    return (
      <div className="user-card">
        <h1> Class :{this.state.count}</h1>
        <img src={avatar_url}></img>
        <h2>Name - {name}</h2>
        <h3>Location - {location}</h3>
        <h4>Contact - @abhishekwacky</h4>
      </div>
    );
  }
}
export default UserClass;
