const Discord = require('discord.js');
module.exports.run = async (client) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("O loop ativado!")

    for (i=0; i<10;){
        await sleep(7200000)

    const mensagem1 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Aviso","https://cdn.discordapp.com/attachments/409846357982183434/429837842697682955/emoji.png")

            .setDescription("Viste o canal do dono do nosso servidor Discord!\nhttps://www.youtube.com/channel/UCwSEW7yfnOyn882P7DyjDFw\n\nSuper recomendo! :smiley:")
           
            .setTimestamp()
            .setFooter(`Mensagem Automática!`)

    client.channels.get("417002847541002243").send(mensagem1);
     
    }
}