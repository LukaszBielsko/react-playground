/* 
data reusability 
we can share data between components 
*/
import React from "react";

class User extends React.Component {
  state = {
    name: "user",
    city: "City user"
  };

  render() {
    return <div>{this.props.children(this.state)}</div>;
  }
}

const Name = props => {
  return <p>user name: {props.name}</p>;
};
const City = ({ city }) => {
  return <p>user city: {city}</p>;
};

const RenderProp = () => {
  return (
    <User>
      {user => {
        return (
          <div>
            <Name name={user.name} />
            <City {...user} />
          </div>
        );
      }}
    </User>
  );
};

export default RenderProp;
