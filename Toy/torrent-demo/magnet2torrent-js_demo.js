const { writeFileSync } = require('fs');
const Magnet2torrent = require('magnet2torrent-js');
const trackers = require('./trackers.js');

// https://github.com/ngosang/trackerslist
// const trackers = [
//   'udp://tracker.coppersurfer.tk:6969/announce',
//   'udp://tracker.open-internet.nl:6969/announce',
//   'udp://tracker.leechers-paradise.org:6969/announce',
//   // ...
// ];

// ubuntu-16.04.1-server-amd64.iso
const magnet = 'magnet:?xt=urn:btih:90289fd34dfc1cf8f316a268add8354c85334458';

const m2t = new Magnet2torrent({
  trackers,
  // addTrackersToTorrent: false
});

m2t.getTorrent(magnet).then(torrent => {
  console.log('These trackers have been added:', torrent.announce);
  writeFileSync(`${torrent.name}.torrent`, torrent.toTorrentFile());
}).catch(e => {
  // Timeout or error occured
  console.error(e);
});