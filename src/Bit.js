import React from "react";

class Bit extends React.Component {
  render() {
    return (
      <input
        className="Bit"
        type="checkbox"
        readOnly={false}
        checked={this.props.seton}
        onChange={() => this.props.onChange()}
      />
    );
  }
}

export default Bit;
