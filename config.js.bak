//Ini untuk setting Bot
//Untuk gambar background menu ada -
//Dalam file menu 
//untuk lainya saran jangan di ubah bre nanti eror
//misal gua lupa nambah atau typo benerin aja bre gua pusing njir awokawok 

//Global Owner//
global.owner = ['6283171710709']  // isi jika perlu
global.mods = ['6283171710709']   // isi jika perlu
global.prems = ['6283171710709','6282128475388']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'Om David' // isi nama kalian bebas
global.numberowner = '6283171710709' // isi ini untuk mengendalikan bot
global.dana = '6282128475388' // isi dengan nomor dana yg kamu punya 
global.pulsa = '0' // isi dengan nomor pulsa hp kalian
global.gopay = '0'

//Nama Bot & Grouplink//
global.namebot = 'Onee-MD'
global.gc = 'https://chat.whatsapp.com/D6BZVRSymWaFU28t2lxaO0'
global.web = 'https://github.com/David0l1' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/davidpangrib001'

//Tampilan wm Bot dan pesan bot//
global.lolkey = '85faf717d0545d14074659ad' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '© Onee-MD'
global.watermark = wm
global.wm2 = '⫹⫺ Onee-MD'
global.wm3 = 'Onee-MD'
global.wm4 = 'Simple WhatsApp Bot'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=1200&scaleHeight=800&fontsize=100&fillTextType=1&fillTextPattern=Warning&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Created by\nMark Zuckerberg'
global.author = ''

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://botcahx.ddns.net', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://sekha.me',
  males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://api.neoxr.my.id': '3EcarQ',
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
}

//Setting Rpg//
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
