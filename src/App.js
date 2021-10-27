import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter'

class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      count: 0,
      countBis: 0,
    }
  }

  handlePlusClick = () => {
    if (this.state.count < 100) {
      this.setState({ count: this.state.count + 1 })
      if( this.state.count === this.state.countBis){
        this.setState({ countBis: this.state.countBis + 1 })
      }
    }
  }
  
  handleMoinsClick = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }

  handlePlusClickBis = () => {
    if (this.state.countBis < 100) {
      this.setState({ countBis: this.state.countBis + 1 })
    }
  }

  handleMoinsClickBis = () => {
    if (this.state.countBis > 0) {
      this.setState({ countBis: this.state.countBis - 1 })
      if( this.state.count === this.state.countBis){
        this.setState({ count: this.state.count - 1 })
      }
    }
  }
  
   render() {
   return (
      <div className="container">
        <h1>Counter</h1>
         <Counter count={this.state.count} substract={this.handleMoinsClick} increment={this.handlePlusClick} />
         <Counter countBis={this.state.countBis} substract={this.handleMoinsClickBis} increment={this.handlePlusClickBis} />
      </div>
    )
  }
}

export default App
