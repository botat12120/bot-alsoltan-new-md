const dir = [
'https://telegra.ph/file/683c52516174ba1614c7f.jpg',
'https://telegra.ph/file/2678187438201d76ed2b5.jpg',
'https://telegra.ph/file/29d3552539678d368926d.jpg',
'https://telegra.ph/file/cb2834cf372177e8a206f.jpg',
'https://telegra.ph/file/a9285729d84c01a733ac0.jpg',
'https://telegra.ph/file/c89bb9ccc571fe4e20b28.jpg',
'https://telegra.ph/file/d90c14ebf62a6fa3f51ce.jpg',
'https://telegra.ph/file/fd0685dda01dd00022b67.jpg',
'https://telegra.ph/file/bbc0df51d0088694a0b33.jpg',
'https://telegra.ph/file/e5b0d07bad39d233e83ea.jpg',
'https://telegra.ph/file/d0875155a4917f546354c.jpg',
'https://telegra.ph/file/d01dcb0373fcc43d74271.jpg',
'https://telegra.ph/file/09798ac6f2bda3a5ace28.jpg',
'https://telegra.ph/file/cba68ddd84c357554f51d.jpg',
'https://telegra.ph/file/1ced0bc18e87f73c95d1b.jpg',
'https://telegra.ph/file/2407926b6576264d5d192.jpg',
'https://telegra.ph/file/5b078973dbb55e3c66461.jpg',
'https://telegra.ph/file/06d855e4cb6e247b77748.jpg',
'https://telegra.ph/file/67208e52430ee959359f0.jpg',
'https://telegra.ph/file/39548028862cc7b7272c2.jpg',
'https://telegra.ph/file/cc21e6086a7a3666e5aff.jpg',
'https://telegra.ph/file/7cc8d779bf96bbfe53830.jpg',
'https://telegra.ph/file/be1d662054f2143b1970b.jpg',
'https://telegra.ph/file/1152f5d223bdd33583255.jpg',
'https://telegra.ph/file/6752d0d0400ce4df49991.jpg',
'https://telegra.ph/file/ad25493be7379ec88778f.jpg',
'https://telegra.ph/file/ee2b35fcc178faa8a59ab.jpg',
'https://telegra.ph/file/cb48c9d61288f915a044a.jpg',
'https://telegra.ph/file/eaea15a58467bd84455f7.jpg',
'https://telegra.ph/file/c6df126bf12b7453d2a9b.jpg',
'https://telegra.ph/file/d5bec0cf1d7d64053a945.jpg',
'https://telegra.ph/file/ba83998e99fcedd02f00e.jpg',
'https://telegra.ph/file/167f7919220990ab49c27.jpg',
'https://telegra.ph/file/6115e539b6232da4ef021.jpg',
'https://telegra.ph/file/46673cf65e4be53236075.jpg',
'https://telegra.ph/file/635f1c6726497261e4f89.jpg',
'https://telegra.ph/file/c97b651c7dc54b4c7ed85.jpg',
'https://telegra.ph/file/287afff8cbbe17ee92b6a.jpg',
'https://telegra.ph/file/692186bcb902cf4453fda.jpg',
'https://telegra.ph/file/7be6775bae7e82b6bfe81.jpg',
'https://telegra.ph/file/7508b3183182e7055404f.jpg',
'https://telegra.ph/file/3689b182ea32638982cfb.jpg',
'https://telegra.ph/file/1fa863d9f5df4e6e47283.jpg',
'https://telegra.ph/file/eaea15a58467bd84455f7.jpg',
'https://telegra.ph/file/cb48c9d61288f915a044a.jpg',
'https://telegra.ph/file/ad25493be7379ec88778f.jpg',
'https://telegra.ph/file/ad25493be7379ec88778f.jpg',
'https://telegra.ph/file/cc21e6086a7a3666e5aff.jpg',
'https://telegra.ph/file/5b078973dbb55e3c66461.jpg',
'https://telegra.ph/file/1ced0bc18e87f73c95d1b.jpg',
'https://telegra.ph/file/cba68ddd84c357554f51d.jpg',
'https://telegra.ph/file/09798ac6f2bda3a5ace28.jpg',
'https://telegra.ph/file/d01dcb0373fcc43d74271.jpg',
'https://telegra.ph/file/d0875155a4917f546354c.jpg',
'https://telegra.ph/file/fd0685dda01dd00022b67.jpg',
'https://telegra.ph/file/683c52516174ba1614c7f.jpg',
'https://telegra.ph/file/29d3552539678d368926d.jpg',
'https://telegra.ph/file/cb2834cf372177e8a206f.jpg',
'https://telegra.ph/file/2678187438201d76ed2b5.jpg',
'https://telegra.ph/file/89f95ee84b93bb47b8c88.jpg',
'https://telegra.ph/file/37448353244db8eb1ed88.jpg',
'https://telegra.ph/file/8ba70c13ff8c527f5602d.jpg',
'https://telegra.ph/file/8ba70c13ff8c527f5602d.jpg',
'https://telegra.ph/file/e540ef9b2288ab9935fec.jpg',
'https://telegra.ph/file/e540ef9b2288ab9935fec.jpg',
'https://telegra.ph/file/8ec15c5189b2052548262.jpg',
'https://telegra.ph/file/8ec15c5189b2052548262.jpg',
'https://telegra.ph/file/73e9973e8a31649db7c14.jpg',
'https://telegra.ph/file/73e9973e8a31649db7c14.jpg',
'https://telegra.ph/file/8a21e27e9b7c743fe3624.jpg',
'https://telegra.ph/file/8a21e27e9b7c743fe3624.jpg',
'https://telegra.ph/file/963b73eb62b1fbddfba71.jpg',
'https://telegra.ph/file/efbcf9b2286abe36d7ef9.jpg',
'https://telegra.ph/file/aae1d11b145afa4ca211d.jpg',
'https://telegra.ph/file/aae1d11b145afa4ca211d.jpg',
'https://telegra.ph/file/88de6a272e1a28570396a.jpg',
'https://telegra.ph/file/88de6a272e1a28570396a.jpg',
'https://telegra.ph/file/8ba70c13ff8c527f5602d.jpg',
'https://telegra.ph/file/8ec15c5189b2052548262.jpg',
'https://telegra.ph/file/8a21e27e9b7c743fe3624.jpg',
'https://telegra.ph/file/aae1d11b145afa4ca211d.jpg',
'https://telegra.ph/file/e540ef9b2288ab9935fec.jpg',
'https://telegra.ph/file/0c71b439c9416c9a1a296.jpg',
'https://telegra.ph/file/4f03cfd5888326b949b07.jpg',
'https://telegra.ph/file/b2a8c988b1dd3bee81e9f.jpg',
'https://telegra.ph/file/640c2da82f788b10597b6.jpg', 
'https://telegra.ph/file/e80b520783270d162136f.jpg', 

];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
  await conn.sendMessage(m.chat, { react: { text: '😈', key: m.key } })

}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['خلفيه-كوسبلاي', 'cosplay'] 

export default handler
