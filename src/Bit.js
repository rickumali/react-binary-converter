import React from 'react';

class Bit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input className="Bit" type='checkbox' checked={this.props.seton}/>;
  }
}

export default Bit;
