const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m)
await delay(100)
  return conn.sendMessage(m.chat, { text: `Woy Cug @${await m.sender.split('@')[0]}, itu nomor owner gw jangan dispam yah anying`, mentions: [m.sender] })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
