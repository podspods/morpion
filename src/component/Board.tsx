import React from "react";
import { Square } from "./Square";



function calculateWinner(squares : number[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export class Board extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { squares: Array(9).fill(null), status : 10 };
    xIsNext: true;
  }
  
  handleClick(i: number) {
    this.state.status +=1;
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares });
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }

  renderSquare(i: number) {
    return (
      <Square
        // value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        value = {this.state.status}
      />
    );
  }

  render() {
    let status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    const winner = calculateWinner(this.state.squares);
     status;
    if (winner) {
      status = winner + " a gagné";
    } else {
      status = "Prochain joueur : " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
