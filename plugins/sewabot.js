let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/a6b2ccf14c2007652faec.jpg'
let text = `⬣━━━►〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕◄━━━⬣

┏━━━►〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕◄━━━⬣
┃
┃➣ 𝚅𝙸𝙿 𝟻𝙺 = 𝟸𝙱𝚞𝚕𝚊𝚗 / ɢʀᴏᴜᴘ
┃➣ 𝙻𝚎𝚐𝚎𝚗𝚍 𝟷𝟶𝙺 = 𝟺𝙱𝚞𝚕𝚊𝚗 / ɢʀᴏᴜᴘ
┃➣ 𝚂𝚞𝚕𝚝𝚊𝚗 𝟷𝟻𝙺 = 𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍 / ɢʀᴏᴜᴘ
┃
┗━━━► *${author}* ◄━━━⬣

┏━━━►〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕◄━━━⬣
┃
┃➣ 𝚅𝙸𝙿 𝟻𝙺 = 𝟸𝙱𝚞𝚕𝚊𝚗
┃➣ 𝙻𝚎𝚐𝚎𝚗𝚍 𝟷𝟶𝙺 = 𝟺𝙱𝚞𝚕𝚊𝚗
┃➣ 𝚂𝚞𝚕𝚝𝚊𝚗 𝟷𝟻𝙺 = 𝚄𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍
┃
┗━━━► *${author}* ◄━━━⬣

┏━━━►〔 ꜰɪᴛᴜʀ 430+ 〕◄━━━⬣
┃
┃☂︎ ᴡᴇʟᴄᴏᴍᴇ
┃❂ ᴋɪᴄᴋ
┃۞ ᴀɴᴛɪʟɪɴᴋ
┃☂︎ ᴀɴᴛɪ ᴅᴇʟᴇᴛᴇ
┃❂ ꜱᴏᴜɴᴅ
┃۞ ᴀɴɪᴍᴇ
┃☂︎ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃❂ ꜱᴇɴᴅ ʙᴜɢ
┃۞ ɢᴀᴍᴇ ʀᴘɢ
┃☂︎ ɴᴜʟɪs
┃❂ sᴛɪᴄᴋᴇʀ
┃۞ ᴅʟʟ
┃
┗━━━► *${author}* ◄━━━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '☕ DEVELOPER', url: `https://wa.me/${nomorown}?text=hai`}},
    
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler
