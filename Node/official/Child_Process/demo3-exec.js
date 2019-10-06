const exec = require('child_process').exec;
// exec('node -p "setTimeout(()=>{console.log(1)},1000)"', (error, stdout, stderr) => {
exec(
  'node -p "setTimeout(()=>{console.log(1)},1000)"',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`);
  }
);
