const fs = require('fs');
const parseTorrent = require('parse-torrent');

// const info = parseTorrent.toMagnetURI({
//   infoHash: parseTorrent(fs.readFileSync(__dirname + '/ubuntu-16.04.1-server-amd64.iso.torrent')).infoHash
// });

// console.log(info);

// fs.writeFileSync(__dirname + '/ubuntu-16.04.1-server-amd64.iso.json', JSON.stringify(info));

// var magnetToTorrent = require('magnet-to-torrent');
// const magnetLink = 'magnet:?xt=urn:btih:36684b463ca2aa2f9347b18e9f6b1a9090bdb073&dn=Microsoft+iSCSI+Initiator';

// function magnetToTorrent_demo(magnetLink) {
//   magnetToTorrent.getLink(magnetLink)
//     .then(function (torrentLink) {
//       console.log(torrentLink); // torrent url as string
//     })
//     .catch(function (error) {
//       console.error(error); // couldn't get a valid link
//     });
// }


// magnetToTorrent_demo(magnetLink);



function parseMagnet_demo() {
  var info = parseTorrent('magnet:?xt=urn:btih:90289fd34dfc1cf8f316a268add8354c85334458');
  console.log(info);
}


parseMagnet_demo();