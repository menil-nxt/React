export const User = (props) => {
  return (
    <div className="user-class">
      <h3>Name : {props.name}</h3>
      <h3>Locality : {props.Locality}</h3>
    </div>
  );
};
