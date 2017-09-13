var url =
  'http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor#测试';

// encodeURI escapes all characters except: A-Z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( )
console.log(encodeURI(url));
// http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor#%E6%B5%8B%E8%AF%95

// encodeURIComponent escapes all characters except: A-Z a-z 0-9 - _ . ! ~ * ' ( )
console.log(encodeURIComponent(url));
// http%3A%2F%2Fusername%3Apassword%40www.example.com%3A80%2Fpath%2Fto%2Ffile.php%3Ffoo%3D316%26bar%3Dthis%2Bhas%2Bspaces%23anchor%23%E6%B5%8B%E8%AF%95
