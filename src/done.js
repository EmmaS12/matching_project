import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

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
    let text = "you haven't won"
    if (this.state.won){
      text = "you win"
    }
    return (
      <div class="game">
        <Board
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

class Board extends React.Component{
  constructor(props ){
    super(props);
    this.state = {
      order: this.props.order,
      cur_card: 0
    }
  }

  handleclick (i){
    if(i === this.state.cur_card){
      this.state.cur_card++
      //alert(this.state.cur_card)
      if(this.state.cur_card>7){
        alert("you win")
        this.props.onClick()
      }
    }
    else {
      this.state.cur_card = 0;
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

class Card extends React.Component{
  constructor(props ){
    super(props);
  }
  handleClick(){
    //alert(this.props.order_num)
    this.props.onClick(this.props.order_num)
  }
  render(){

    return (
        <button onClick={this.handleClick.bind(this)}class="card">{this.props.order_num}</button>
    );
  }
}



render(<App />, document.getElementById('root'))
