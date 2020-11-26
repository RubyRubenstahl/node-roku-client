const { Client, RokuClient } = require('./dist/index');

const displayMediaPlayer = async (c) => {
  const mediaPlayer = await c.mediaPlayer();
  console.log(mediaPlayer);
};

const printClientInfo = async (c) => {
  const activeApp = await c.active();
  const info = await c.info();
  const apps = await c.apps();

  console.log(`------------ ${c.ip} --------------`);
  console.log(info);
  console.log(apps);
  console.log(activeApp);

  displayMediaPlayer(c);
  setInterval(() => displayMediaPlayer(c), 5000);
};

RokuClient.discoverAll(5000).then((clients) => {
  clients.map(printClientInfo);
});
