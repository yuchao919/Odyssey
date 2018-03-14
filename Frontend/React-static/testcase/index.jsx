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
      <React.Fragment>
        <h1>hello world &lt;3</h1>
        <input type="text" value={this.state.txt} onChange={this.handleChange} />
        <input type="button" value="Submit" />
      </React.Fragment>
    );
  }
}

class PrInput extends React.Component {
  render() {
    /**
     * 给input：text直接赋值，而不是给状态会直接导致它是个只读
     * Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler.
     * This will render a read-only field. If the field should be mutable use `defaultValue`.
     * Otherwise, set either `onChange` or `readOnly`.
     */
    return (
      <React.Fragment>
        <input type="text" value={this.props.txt} />
        <input type="button" value="Submit" />
      </React.Fragment>
    );
  }
}

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <TestInput />
        <PrInput txt={'Hello world'} />
        <SearchBar filterText={'AAA'} inStockOnly={false} />
      </div>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));
