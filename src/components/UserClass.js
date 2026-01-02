import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
      first: 1,
    };
  }
  render() {
    const { name, Locality } = this.props;
    const { count, first } = this.state;
    return (
      <div className="user-class">
        <h1>count :- {count}</h1>
        <h1>count :- {first}</h1>
        <h3>Name : {name}</h3>
        <h3>Locality : {Locality}</h3>
      </div>
    );
  }
}

export default UserClass;
