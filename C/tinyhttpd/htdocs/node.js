#!/home/leslie/.nvm/versions/node/v14.15.0/bin/node
var msg = 'hello node'
var html =
`Content-Type: text/html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${ msg }
</body>
</html>
`
console.log(html);