import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"


class Counter extends React.Component{

    render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <Button variant="danger" onClick={this.props.substract}>-</Button>
        <Button variant="success" onClick={this.props.increment}>+</Button>
        <h2>{this.props.countBis}</h2>
        <Button variant="danger" onClick={this.props.substractBis}>-</Button>
        <Button variant="success" onClick={this.props.incrementBis}>+</Button>
      </div>
    )
  }
}

export default Counter