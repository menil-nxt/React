import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      first: 1,
    };

    console.log("child constructor");
  }

  componentDidMount() {
    console.log("child component Did mount called");
  }

  render() {
    const { name, Locality } = this.props;
    const { count } = this.state;

    console.log("child Render");
    return (
      <div className="user-class">
        <h1>count :- {count}</h1>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1;   // Naver UPDATE stare variable Directly

            this.setState({
              count: this.state.count + 1,
            });
            console.log(count);
          }}
        >
          Count Increase
        </button>
        <h3>Name : {name}</h3>
        <h3>Locality : {Locality}</h3>
      </div>
    );
  }
}

export default UserClass;
