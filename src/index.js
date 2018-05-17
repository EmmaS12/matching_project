import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
//Determining if user has won or lost game by correctly figuring out order of cards
class App extends React.Component{
  constructor(props ){
    super(props);
    this.state = {
      order: [0,4,7,6,2,3,1,5],
      won: false
    }
  }
  hasWon(){
  this.setState({
      order: [0,4,7,6,2,3,1,5],
      won: true
    })
  }
  render(){
    let text = "you haven't won yet"
    if (this.state.won){
      text = "you win!"
    }
    return (
      <div className="game">
        <Board className="cards"
          order={this.state.order}
          onClick={i => this.hasWon()}
        />
        <div>
        {text}
        </div>
      </div>
    );
  }
}
//figuring out order of cards
class Board extends React.Component{
  constructor(props ){
    super(props);
    this.state = {
      order: this.props.order,
      cur_card: 0
    }
  }

  handleclick(i){
    if (i === this.state.cur_card) {
      this.state.cur_card += 1
      if (this.state.cur_card === 8) {
        this.props.onClick()
      }
    } else {
      alert("Wrong! This is card #"+""+i)
      this.state.cur_card = 0
    }

  }
  render(){

    return (
    <div>
      <Card
        order_num={this.props.order[0]}
        onClick={i => this.handleclick(this.props.order[0])}
      />
      <Card
      order_num={this.props.order[1]}
      onClick={i => this.handleclick(this.props.order[1])}
      />
      <Card
      order_num={this.props.order[2]}
      onClick={i => this.handleclick(this.props.order[2])}
      />
      <Card
      order_num={this.props.order[3]}
      onClick={i => this.handleclick(this.props.order[3])}
      />
      <Card
      order_num={this.props.order[4]}
      onClick={i => this.handleclick(this.props.order[4])}
      />
      <Card
      order_num={this.props.order[5]}
      onClick={i => this.handleclick(this.props.order[5])}
      />
      <Card
      order_num={this.props.order[6]}
      onClick={i => this.handleclick(this.props.order[6])}
      />
      <Card
      order_num={this.props.order[7]}
      onClick={i => this.handleclick(this.props.order[7])}
      />
    </div>
    );
  }
}
//create card
class Card extends React.Component{
  constructor(props ){
    super(props);
  }
  handleClick(){
    this.props.onClick(this.props.order_num)
  }
  render(){

    return (
        <button onClick={this.handleClick.bind(this)}className="card">Card</button>
    );
  }
}



render(<App />, document.getElementById('root'))
