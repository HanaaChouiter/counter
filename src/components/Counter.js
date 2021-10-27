import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"


class Counter extends React.Component{

    render() {
    return (
      <div>
        <div className="">
            <h2>{this.props.count}</h2>
            <Button variant="danger" onClick={this.props.substract}>-</Button>
            <Button className="ms-4" variant="success" onClick={this.props.increment}>+</Button>
            <h2>{this.props.countBis}</h2>
        </div>
      </div>
    )
  }
}

export default Counter