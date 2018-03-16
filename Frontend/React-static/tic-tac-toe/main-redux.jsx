const { createStore, combineReducers } = Redux;
const { Provider, connect } = ReactRedux;

const setMark = squareIndex => ({
  type: 'SET_MARK',
  squareIndex: squareIndex
});

const game = (
  state = {
    historyOperation: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  },
  action
) => {
  switch (action.type) {
    case 'SET_MARK':
      const i = action.squareIndex;
      const historyOperation = state.historyOperation.slice(0, state.stepNumber + 1);
      const current = historyOperation[historyOperation.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return state;
      }
      squares[i] = state.xIsNext ? 'X' : 'O';
      return {
        history: historyOperation.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: historyOperation.length,
        xIsNext: !state.xIsNext
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  game
});

const store = createStore(reducer);

// setTimeout(() => {
//   store.dispatch(setMark(0));
// }, 1e3);

// 展示组件 Square;
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// 展示组件 Square;
class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
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

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  jumpTo() {
    alert('jump');
  }

  render() {
    const historyOperation = this.props.historyOperation;
    const current = historyOperation[this.props.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = historyOperation.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.props.onSquareClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.game;
};

const mapDispatchToProps = {
  onSquareClick: setMark
};

Game = connect(mapStateToProps, mapDispatchToProps)(Game);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
