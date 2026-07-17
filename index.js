const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '_voidsmp_.aternos.me', 
  port: 26831,               
  username: 'VoidBot',       
  version: false,            // Sunucu sürümünü otomatik algılar
  hideErrors: false
});

bot.on('login', () => {
  console.log('Bot sunucuya giriş yaptı!');
});

bot.on('spawn', () => {
  console.log('Bot dünyada.');
  // AFK botunun oyundan atılmaması için küçük hareketler
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }, 10000); 
});

bot.on('error', (err) => console.log('HATA:', err));
bot.on('kicked', (reason) => console.log('ATILDI:', reason));
