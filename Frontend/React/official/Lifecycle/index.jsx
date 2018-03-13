let com;

class LifeTestcase extends React.Component {
  // Mounting 阶段
  constructor(props) {
    super(props);
    this.evtOrder = 1;
    this.state = {
      time: new Date()
    };
    console.log(`${this.evtOrder++}.constructor`);
  }

  componentWillMount() {
    console.log(`${this.evtOrder++}.componentWillMount`);
  }

  render() {
    console.info(`${this.evtOrder++}.render`);
    return (
      <div>
        <p>Hello {this.props.name} !</p>
        <p>Now : {this.state.time.toString()}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log(`${this.evtOrder++}.componentDidMount`);
  }

  // Updating 阶段
  componentWillReceiveProps(nextProps) {
    console.log(`this===com：${this === com}`); // 返回的是 false，说明JSX创建的对象?
    console.log(`${this.evtOrder++}.componentWillReceiveProps`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 在render之前触发
    // 必须返回true或者false
    // 如果返回false，后续事件将不会触发
    // 如果需要实现这个事件，可以用React.PureComponent来弄
    // 不要使用JSON.stringify() 来作对象deepEqual，会有性能问题
    console.log(`${this.evtOrder++}.shouldComponentUpdate`);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // 不用在这里使用this.setState，到componentWillReceiveProps中使用
    console.log(`${this.evtOrder++}.componentWillUpdate`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`${this.evtOrder++}.componentDidUpdate`);
  }

  componentWillUnmount() {
    // 取消timer，abort request的时候使用
    console.log(`${this.evtOrder++}.componentWillUnmount`);
  }

  componentDidCatch(error, info) {}
}

(function() {
  /**
  com = <LifeTestcase name="world" />;
  ReactDOM.render(com, document.getElementById('root'));
  console.log(`com instanceof React.Component: ${com instanceof React.Component}`); // 这里也是 false啊， 所以com = <LifeTestcase name="world" />; 到底在干啥啊
 
  setTimeout(() => {
    ReactDOM.render(<LifeTestcase name="lalala" />, document.getElementById('root'));
  }, 3000);

  setTimeout(() => {
    debugger;
    com.setState({ time: new Date() });
  }, 5000);
  */
})(com);

(function() {
  // 通过这种方式来获得那个 React.Component 实例的引用。尽量不要使用这个引用，未来可能将不支持，用callback ref来代替
  com = ReactDOM.render(<LifeTestcase name="world" />, document.getElementById('root'));

  // setInterval(() => {
  //   com.setState({ time: new Date() });
  // }, 500);
})();

/**
 * 1.constructor
 * 2.componentWillMount
 * 3.render
 * 4.componentDidMount
 * 5.componentWillReceiveProps
 * 6.shouldComponentUpdate
 * 7.componentWillUpdate
 * 8.render
 * 9.componentDidUpdate
 */
