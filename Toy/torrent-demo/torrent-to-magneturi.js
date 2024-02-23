// 将torrent改成magnetUri
const fs = require('fs');
const parseTorrent = require('parse-torrent');
const magnetToTorrent = require('magnet-to-torrent');
const magnet = require('magnet-uri');
const crypto = require('crypto');
const bencode = require('bencode');

function sha1(buf, cb) {
  const hash = sha1sync(buf)
  process.nextTick(function () {
    cb(hash)
  })
}

// magnet:?xt=urn:btih:90289fd34dfc1cf8f316a268add8354c85334458
// ubuntu-16.04.1-server-amd64.iso.torrent

function torrentToMagnetUri_demo(magnetLink) {
  // const magnetURI = parseTorrent.toMagnetURI({
  //   infoHash: parseTorrent(fs.readFileSync(__dirname + '/ubuntu-16.04.1-server-amd64.iso.torrent')).infoHash
  // });
  // console.log(`magnet:?xt=urn:btih:${parseTorrent(fs.readFileSync(__dirname + '/ubuntu-16.04.1-server-amd64.iso.torrent')).infoHash}`);
  let fileName = '/Avatar (2009) PROPER TS XviD-MAXSPEED.torrent';
  let torrentBytes = fs.readFileSync(__dirname + fileName);
  let torrentInfo = bencode.decode(torrentBytes);
  let torrentInfoBuffer = bencode.encode(torrentInfo.info);
  let magnetURI = crypto.createHash('sha1').update(torrentInfoBuffer).digest('hex');
  console.log(magnetURI);
}

torrentToMagnetUri_demo();