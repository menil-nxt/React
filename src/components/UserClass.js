import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="user-class">
        <h3>Name : {this.props.name}</h3>
        <h3>Locality : {this.props.Locality}</h3>
      </div>
    );
  }
}

export default UserClass;
