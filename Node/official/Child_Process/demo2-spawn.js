const spawn = require('child_process').spawn;
const ls = spawn('node', [
  '-p',
  'console.log(123)'
  // '"setTimeout(function(){console.log(\'Time limit exceeded.\')},1000)"'
]);

ls.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

ls.on('close', code => {
  console.log(`child process exited with code ${code}`);
});
