import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        email: "",
      },
    };

    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("MJ food");
    // }, 1000);
    const data = await fetch("https://api.github.com/users/menil-nxt");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will mount");
  }

  render() {
    const { name, location, email, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "child Render");
    return (
      <div className="user-class">
        <h3>Name : {name}</h3>
        <h3>Locality : {location}</h3>
        <h3>Email - ID : {email}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
