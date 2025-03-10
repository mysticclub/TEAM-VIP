import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    
    let txt = `
H-Hola... @${userId.split('@')[0]} Soy *${botname}*
😊 Um... traje esta lista de comandos para ti ✨ 
Espero que te ayude... Si necesitas algo, solo dime, 
¿sí? 💕

💞Canal Oficial💞
https://sites.google.com/view/teamlegendgood/inicio
╭┈ ↷
│ᰔᩚ Cliente » @${userId.split('@')[0]}
│❀ Modo » Publico
│✦ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
│ⴵ Activada » ${uptime}
│✰ Usuarios » ${totalreg}
│✧ Comandos » ${totalCommands}
│🜸 Baileys » Multi Device
╰─────────────────
Crea un *Sub-Bot* con tu número utilizando *#qr* o *#code*

» ✧˖°. ⋆｡˚『 InfoBot 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos para ver estado e información de la Bot.
✦ *#help • #menu*
> ⸙ Ver la lista de comandos de la Bot.
✦ *#qr • #code*
> ⸙ Crea una sesión como Sub-Bot en tu número.
✦ *#bots • #sockets*
> ⸙ Ver la lista de Sub-Bots activos.
✦ *#creador*
> ⸙ Contacto del creador de la Bot.
✦ *#status • #estado*
> ⸙ Ver el estado actual de la Bot.
✦ *#sug • #newcommand*
> ⸙ Sugiere un nuevo comando.
✦ *#p • #ping*
> ⸙ Ver la velocidad de respuesta del Bot.
✦ *#reporte • #reportar*
> ⸙ Reporta alguna falla o problema de la Bot.
✦ *#speed • #speedtest*
> ⸙ Ver las estadísticas de velocidad de la Bot.
ꕥ *#editautoresponder*
> ⸙ Configurar un Prompt personalizado de la Bot.

» ✧˖°. ⋆｡˚『 Searchs 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos para realizar búsquedas en distintas plataformas.
✦ *#tiktoksearch • #tiktoks*
> ⸙ Buscador de videos de tiktok.
✦ *#ytsearch • #yts*
> ⸙ Realiza búsquedas de Youtube.
✦ *#githubsearch*
> ⸙ Buscador de usuarios de GitHub.
✦ *#cuevana • #cuevanasearch*
> ⸙ Buscador de películas/series por Cuevana.
✦ *#google*
> ⸙ Realiza búsquedas por Google.
✦ *#pin • #pinterest*
> ⸙ Buscador de imagenes de Pinterest.
✦ *#image • #imagen*
> ⸙ Buscador de imagenes de Google.
✦ *#hentaisearch • #searchhentai*
> ⸙ Buscador de animes hentai.
✦ *#xnxxsearch • #xnxxs*
> ⸙ Buscador de vídeos de Xnxx.
✦ *#xvsearch • #xvideossearch*
> ⸙ Buscador de vídeos de Xvideos.
✦ *#pornhubsearch • #phsearch*
> ⸙ Buscador de videos de Pornhub.

» ✧˖°. ⋆｡『 Download 』｡･⋆˚:✧｡ˎˊ-

❀ Comandos de descargas para varios archivos.
✦ *#tiktok • #tt*
> ⸙ Descarga videos de TikTok.
✦ *#mediafire • #mf*
> ⸙ Descargar un archivo de MediaFire.
✦ *#play • #play2*
> ⸙ Descarga música/video de YouTube.
✦ *#ytmp3 • #ytmp4*
> ⸙ Descarga música/video de YouTube mediante url.
✦ *#fb • #facebook*
> ⸙ Descarga videos de Facebook.
✦ *#twitter • #x* + [Link]
> ⸙ Descargar un video de Twitter/X
✦ *#ig • #instagram*
> ⸙ Descarga contenido de Instagram.
✦ *#tiktoksearch • #tiktoks* + [busqueda]
> ⸙ Buscar videos de tiktok 
✦ *#gitclone* + <url> 
> ⸙ Descarga un repositorio de github.
✦ *#xvideosdl*
> ⸙ Descarga videos porno de (Xvideos). 
✦ *#xnxxdl*
> ⸙ Descarga videos porno de (xnxx).
✦ *#apk • #modapk*
> ⸙ Descarga un apk de Aptoide.
✦ *#tiktokrandom • #ttrandom*
> ⸙ Descarga un video aleatorio de tiktok.

» ✧˖°. ⋆｡『 Economy 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de economía y rpg para ganar dinero y otros recursos.
✦ *#w • #work • #trabajar*
> ⸙ Trabaja para ganar ¥enes.
✦ *#slut • #protituirse*
> ⸙ Trabaja como prostituta y gana ¥enes.
✦ *#cf • #suerte*
> ⸙ Apuesta tus ¥enes a cara o cruz.
✦ *#crime • #crimen*
> ⸙ Trabaja como ladrón para ganar ¥enes.
✦ *#ruleta • #roulette • #rt*
> ⸙ Apuesta ¥enes al color rojo o negro.
✦ *#casino • #apostar*
> ⸙ Apuesta tus ¥enes en el casino.
✦ *#slot*
> ⸙ Apuesta tus ¥enes en la ruleta y prueba tu suerte.
✦ *#cartera • #wallet*
> ⸙ Ver tus ¥enes en la cartera.
✦ *#bal • #bank*
> ⸙ Ver tus ¥enes en el banco.
✦ *#deposit • #depositar • #d*
> ⸙ Deposita tus ¥enes al banco.
✦ *#with • #retirar • #withdraw*
> ⸙ Retira tus ¥enes del banco.
✦ *#transfer • #pay*
> ⸙ Transfiere ¥enes o XP a otros usuarios.
✦ *#miming • #minar • #mine*
> ⸙ Trabaja como minero y recolecta recursos.
✦ *#buyall • #buy*
> ⸙ Compra ¥enes con tu XP.
✦ *#daily • #diario*
> ⸙ Reclama tu recompensa diaria.
✦ *#cofre*
> ⸙ Reclama un cofre diario lleno de recursos.
✦ *#weekly • #semanal*
> ⸙ Reclama tu regalo semanal.
✦ *#monthly • #mensual*
> ⸙ Reclama tu recompensa mensual.
✦ *#steal • #robar • #rob*
> ⸙ Intenta robarle ¥enes a alguien.
✦ *#robarxp • #robxp*
> ⸙ Intenta robar XP a un usuario.
✦ *#eboard • #baltop*
> ⸙ Ver el ranking de usuarios con más ¥enes.
✦ *#halloween*
> ⸙ Reclama tu dulce o truco (Solo en Halloween).
✦ *#christmas • #navidad*
> ⸙ Reclama tu regalo navideño (Solo en Navidad).

» ✧˖°. ⋆｡˚『 Gacha 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de gacha para reclamar y colecciónar personajes.
✦ *#rollwaifu • #rw • #roll*
> ⸙ Waifu o husbando aleatorio.
✦  *#claim • #c • #reclamar*
> ⸙ Reclamar un personaje.
✦ *#harem • #waifus • #claims*
> ⸙ Ver tus personajes reclamados.
✦ *#charimage • #waifuimage • #wimage* 
> ⸙ Ver una imagen aleatoria de un personaje.
✦ *#charinfo • #winfo • #waifuinfo*
> ⸙ Ver información de un personaje.
✦ *#givechar • #givewaifu • #regalar*
> ⸙ Regalar un personaje a otro usuario.
✦ *#vote • #votar*
> ⸙ Votar por un personaje para subir su valor.
✦ *#waifusboard • #waifustop • #topwaifus*
> ⸙ Ver el top de personajes con mayor valor.

» ✧˖°. ⋆｡˚『 Stickers 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos para creaciones de stickers etc.
✦ *#sticker • #s*
> ⸙ Crea stickers de (imagen/video)
✦ *#setmeta*
> ⸙ Estable un pack y autor para los stickers.
✦ *#delmeta*
> ⸙ Elimina tu pack de stickers.
✦ *#pfp • #getpic*
> ⸙ Obtén la foto de perfil de un usuario.
✦ *#qc*
> ⸙ Crea stickers con texto o de un usuario.
✦ *#toimg • #img*
> ⸙ Convierte stickers en imagen.
✦ *#brat • #ttp • #attp*︎ 
> ⸙ Crea stickers con texto.
✦ *#emojimix*
> ⸙ Fuciona 2 emojis para crear un sticker.
✦ *#wm*
> ⸙ Cambia el nombre de los stickers.

» ✧˖°. ⋆｡˚『 Tools 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de herramientas con muchas funciones.
✦ *#tiempo • #clima*
> ⸙ Ver el clima de un pais.
✦ *#horario*
> ⸙ Ver el horario global de los países.
✦ *#fake • #fakereply*
> ⸙ Crea un mensaje falso de un usuario.
✦ *#enhance • #remini • #hd*
> ⸙ Mejora la calidad de una imagen.
✦ *#letra*
> ⸙ Cambia la fuente de las letras.
✦ *#read • #readviewonce*
> ⸙ Ver imágenes de una sola vista.
✦ *#say • #decir* + [texto]
> ⸙ Repetir un mensaje.
✦ *#translate • #traducir • #trad*
> ⸙ Traduce palabras en otros idiomas.
✦ *#ai • #gemini*
> ⸙ Hazles preguntas a la ia.
✦ *#tourl • #catbox • #ibb*
> ⸙ Convierte imágen/video en urls.

» ✧˖°. ⋆｡˚『 Profile 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
✦ *#profile*
> ⸙ Muestra tu perfil de usuario.
✦ *#marry* [mension / etiquetar]
> ⸙ Propón matrimonio a otro usuario.
✦ *#divorce*
> ⸙ Divorciarte de tu pareja.
✦ *#setgenre • #setgenero*
> ⸙ Establece tu género en el perfil del bot.
✦ *#delgenre • #delgenero*
> ⸙ Elimina tu género del perfil del bot.
✦ *#setbirth • #setnacimiento*
> ⸙ Establece tu fecha de nacimiento en el perfil del bot.
✦ *#delbirth • #delnacimiento*
> ⸙ Elimina tu fecha de nacimiento del perfil del bot.
✦ *#setdescription • #setdesc*
> ⸙ Establece una descripción en tu perfil del bot.
✦ *#deldescription • #deldesc*
> ⸙ Elimina la descripción de tu perfil del bot.
✦ *#lb • #lboard* + <Paginá>
> ⸙ Top de usuarios con más (experiencia y nivel).
✦ *#level • #lvl* + <@Mencion>
> ⸙ Ver tu nivel y experiencia actual.

» ✧˖°. ⋆｡˚『 Groups 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de grupos para una mejor gestión de ellos.
✦ *#config • #nable*
> ⸙ Ver opciones de configuración de grupos.
✦ *#hidetag*
> ⸙ Envia un mensaje mencionando a todos los usuarios
✦ *#gp • #infogrupo*
> ⸙  Ver la Informacion del grupo.
✦ *#linea • #listonline*
> ⸙ Ver la lista de los usuarios en linea.
✦ *#link*
> ⸙ El bot envia el link del grupo.
✦ *#admins • #admin*
> ⸙ Mencionar a los admins para solicitar ayuda.
✦ *#restablecer • #revoke*
> ⸙ Restablecer el enlace del grupo.
✦ *#abrir • #open*
> ⸙ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
✦ *#close • #cerrar*
> ⸙ Cambia ajustes del grupo para que solo los administradores envien mensaje.
✦ *#kick* [número / mension]
> ⸙ Elimina un usuario de un grupo.
✦ *#add • #añadir • #agregar* [número]
> ⸙ Invita a un usuario a tu grupo.
✦ *#promote* [mension / etiquetar]
> ⸙ El bot dara administrador al usuario mencionando.
✦ *#demote* [mension / etiquetar]
> ⸙ El bot quitara administrador al usuario mencionando.
✦ *#gpbanner • #groupimg*
> ⸙ Cambiar la imagen del grupo.
✦ *#gpname • #groupname*
> ⸙ Cambiar el nombre del grupo.
✦ *#gpdesc • #groupdesc*
> ⸙ Cambiar la descripción del grupo.
✦ *#advertir • #warn • #warning*
> ⸙ Darle una advertencia aún usuario.
✦ ︎*#unwarn • #delwarn*
> ⸙ Quitar advertencias.
✦ *#advlist • #listadv*
> ⸙ Ver lista de usuarios advertidos.
✦ *#bot* [on / off]
> ⸙ Apagar el Bot en un chat o grupo.
✦ *#setprimary*
> ⸙ Establece un Bot primario en un grupo.
✦ *#mute* [mension / etiquetar]
> ⸙ El bot elimina los mensajes del usuario.
✦ *#unmute* [mension / etiquetar]
> ⸙ El bot deja de eliminar los mensajes del usuario.
✦ *#encuesta • #poll*
> ⸙ Crea una encuesta.
✦ *#delete • #del*
> ⸙ Elimina mensaje de otros usuarios.
✦ *#listnum • #kicknum*
> ⸙ Elimine a usuario por el prefijo de país.

» ✧˖°. ⋆｡˚『 Anime 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de reacciones de anime.
✦ *#angry • #enojado* + <mencion>
> ⸙ Estar enojado
✦ *#bite* + <mencion>
> ⸙ Muerde a alguien
✦ *#bleh* + <mencion>
> ⸙ Sacar la lengua
✦ *#blush* + <mencion>
> ⸙ Sonrojarte
✦ *#bored • #aburrido* + <mencion>
> ⸙ Estar aburrido
✦ *#cry* + <mencion>
> ⸙ Llorar por algo o alguien
✦ *#cuddle* + <mencion>
> ⸙ Acurrucarse
✦ *#dance* + <mencion>
> ⸙ Sacate los pasitos prohíbidos
✦ *#drunk* + <mencion>
> ⸙ Estar borracho
✦ *#eat • #comer* + <mencion>
> ⸙ Comer algo delicioso
✦ *#facepalm* + <mencion>
> ⸙ Darte una palmada en la cara
✦ *#happy • #feliz* + <mencion>
> ⸙ Salta de felicidad
✦ *#hug* + <mencion>
> ⸙ Dar un abrazo
✦ *#impregnate • #preg* + <mencion>
> ⸙ Embarazar a alguien
✦ *#kill* + <mencion>
> ⸙ Toma tu arma y mata a alguien
✦ *#kiss • #besar* • #kiss2 + <mencion>
> ⸙ Dar un beso
✦ *#laugh* + <mencion>
> ⸙ Reírte de algo o alguien
✦ *#lick* + <mencion>
> ⸙ Lamer a alguien
✦ *#love • #amor* + <mencion>
> ⸙ Sentirse enamorado
✦ *#pat* + <mencion>
> ⸙ Acaricia a alguien
✦ *#poke* + <mencion>
> ⸙ Picar a alguien
✦ *#pout* + <mencion>
> ⸙ Hacer pucheros
✦ *#punch* + <mencion>
> ⸙ Dar un puñetazo
✦ *#run* + <mencion>
> ⸙ Correr
✦ *#sad • #triste* + <mencion>
> ⸙ Expresar tristeza
✦ *#scared* + <mencion>
> ⸙ Estar asustado
✦ *#seduce* + <mencion>
> ⸙ Seducir a alguien
✦ *#shy • #timido* + <mencion>
> ⸙ Sentir timidez
✦ *#slap* + <mencion>
> ⸙ Dar una bofetada
✦ *#dias • #days*
> ⸙ Darle los buenos días a alguien 
✦ *#noches • #nights*
> ⸙ Darle las buenas noches a alguien 
✦ *#sleep* + <mencion>
> ⸙ Tumbarte a dormir
✦ *#smoke* + <mencion>
> ⸙ Fumar
✦ *#think* + <mencion>
> ⸙ Pensar en algo

» ✧˖°. ⋆｡˚『 NSFW 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos NSFW (Contenido para adultos)
✦ *#anal* + <mencion>
> ⸙ Hacer un anal
✦ *#waifu*
> ⸙ Buscá una waifu aleatorio.
✦ *#bath* + <mencion>
> ⸙ Bañarse
✦ *#blowjob • #mamada • #bj* + <mencion>
> ⸙ Dar una mamada
✦ *#boobjob* + <mencion>
> ⸙ Hacer una rusa
✦ *#cum* + <mencion>
> ⸙ Venirse en alguien.
✦ *#fap* + <mencion>
> ⸙ Hacerse una paja
✦ *#ppcouple • #ppcp*
> ⸙ Genera imagenes para amistades o parejas.
✦ *#footjob* + <mencion>
> ⸙ Hacer una paja con los pies
✦ *#fuck • #coger • #fuck2* + <mencion>
> ⸙ Follarte a alguien
✦ *#cafe • #coffe*
> ⸙ Tomate un cafecito con alguien
✦ *#violar • #perra + <mencion>
> ⸙ Viola a alguien
✦ *#grabboobs* + <mencion>
> ⸙ Agarrrar tetas
✦ *#grop* + <mencion>
> ⸙ Manosear a alguien
✦ *#lickpussy* + <mencion>
> ⸙ Lamer un coño
✦ *#rule34 • #r34* + [Tags]
> ⸙ Buscar imagenes en Rule34
✦ *#sixnine • #69* + <mencion>
> ⸙ Haz un 69 con alguien
✦ *#spank • #nalgada* + <mencion>
> ⸙ Dar una nalgada
✦ *#suckboobs* + <mencion>
> ⸙ Chupar tetas
✦ *#undress • #encuerar* + <mencion>
> ⸙ Desnudar a alguien
✦ *#yuri • #tijeras* + <mencion>
> ⸙ Hacer tijeras.

» ✧˖°. ⋆｡˚『 Games 』｡･:⋆˚:✧｡ˎˊ-

❀ Comandos de juegos para jugar con rus amigos.
✦ *#doxeo • #doxear* + <mencion>
> ⸙ Simular un doxeo falso.
✦ *#formarparejas*
> ⸙ Forma 5 parejas diferentes.
✦ *#meme*
> ⸙ La bot te envía un meme aleatorio. 
✦ *#personalidad* + <mencion>
> ⸙ La bot busca tu personalidad. 
✦ *#ship • #pareja*
> ⸙ La bot te da la probabilidad de enamorarte de una persona. 
✦ *#sorteo*
> ⸙ Empieza un sorteo. 
✦ *#top*
> ⸙ Empieza un top de personas.
✦ *#ahorcado*
> ⸙ Diviertete con la bot jugando el juego ahorcado.
✦ *#mates • #matematicas*
> ⸙ Responde las preguntas de matemáticas para ganar recompensas.
✦ *#ppt*
> ⸙ Juega piedra papel o tijeras con la bot.
✦ *#pvp • #suit* + <mencion>
> ⸙ Juega un pvp contra otro usuario.
✦ *#ttt*
> ⸙ Crea una sala de juego.
  `.trim();

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
