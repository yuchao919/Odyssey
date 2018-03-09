// 相当于把构建组件的回调函数传给父组件，动态生成所要的组件
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return <span style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>猫</span>;
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.renderCat = mouse => <Cat mouse={mouse} />;
  }

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderCat} />
      </div>
    );
  }
}

ReactDOM.render(<MouseTracker />, document.getElementById('root'));
