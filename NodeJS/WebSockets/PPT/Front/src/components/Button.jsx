/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button className="btn btn-primary" {...props}>
      {props.text}
    </button>
  );
}
