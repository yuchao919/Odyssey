class TestInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: '' };
  }

  handleChange = e => {
    this.setState({ txt: e.target.value });
  };

  render() {
    // 一旦textbox的value用state来管理，数值不可变。必须增加onchange事件
    return (
      <div>
        <h1>hello world &lt;3</h1>
        <input type="text" value={this.state.txt} onChange={this.handleChange} />
        <input type="button" value="Submit" />
      </div>
    );
  }
}

ReactDOM.render(<TestInput />, document.getElementById('root'));
