import _ from 'lodash';
import Print from './print';

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = Print.bind(null, 'hello world');
  return element;
}
document.getElementById('root').appendChild(component());
