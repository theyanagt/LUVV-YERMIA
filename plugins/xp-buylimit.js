const xpperlimit = 350
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `hanya angka!\n\ncontoh: .buy5`
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.sendButton(m.chat, `Kamu membeli limit dengan harga\n*${xpperlimit * count} XP* dan mendapatkan *${count} Limit.*`, wm, `Limit`,`${usedPrefix}limit`, m)
  } else conn.sendButton(m.chat, `XP tidak mencukupi untuk membeli *${count} Limit.*`, wm, `Claim`, `${usedPrefix}claim`, m)
}
handler.help = ['buy limit <jumlah>', 'buyall limit']
handler.tags = ['xp']
handler.command = /^buy limit([0-9]+)|buylimit|buyalllimit|buyall limit$/i

module.exports = handler
