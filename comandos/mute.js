const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
message.delete().catch(O_o=>{});
if (message.member.hasPermission('MANAGE_MESSAGES')) {
const comousar = new Discord.RichEmbed()
   .setAuthor("Hype", client.user.avatarURL)
   .setTitle("k!mute")
   .setDescription(`Ira mutar o usuário mencionado.`)
   .setColor("#60d1f6")
   .setFooter("© HypeBot - Criado por: » I'm Luan «#4750")
   .addField("Como usar", "`k!mute @usuário <motivo>`")
   .addField("Permissão", "O staff que for mutar tem que esta em um cargo com a permissão `Gerenciar mensagens`")

let member = message.mentions.members.first();
if(!member)
   return message.channel.send(comousar);

let motivo = args.slice(1).join(' ');
if(!motivo)
   return message.reply("Por favor, indique um motivo para o mute!");

if (!message.guild.roles.find("name", "Mutado") || message.guild.roles.find("name", "mutado")) {
   
   const norole = new Discord.RichEmbed()
      .setColor("ff0000")
      .setAuthor('Deu um erro', client.user.avatarURL)
      
      .setDescription(`${message.author}, o cargo **Mutado** não foi encontrado. :slight_frown: 
Crie um cargo com o nome "**Mutado**", assim poderei mutar o usuário!`)
   
   
      .setTimestamp()
      .setFooter("© HypeBot ERRO - Criado por: » I'm Luan «#4750", message.author.avatarURL)
   
   message.channel.send(norole)
   
   
  } else {
     let role = message.guild.roles.find("name", "Mutado");
     member.addRole(role)
     
     const mutemsg = new Discord.RichEmbed()
       .setAuthor('Você foi mutado!', member.user.avatarURL)
       .setColor("ff0000")

       .setThumbnail(member.user.avatarURL)

       .setTimestamp()
       .setFooter("© HypeBot - Criado por: » I'm Luan «#4750", message.author.avatarURL)

       .addField("Motivo:", motivo)

       .addField("Servidor:", message.guild.name)  

    member.send(mutemsg)
     
     const mutado = new Discord.RichEmbed()
        .setAuthor(member.user.tag + ' | Mute', member.user.avatarURL)
        .setDescription(`${member.user.tag} (ID: ${member.user.id}) não respeitou as regras e foi mutado! :pensive: `)
        .setColor("ff0000")

        .setThumbnail(message.author.avatarURL)

        .setTimestamp()
        .setFooter("© HypeBot - Criado por: » I'm Luan «#4750", message.author.avatarURL)

        .addField("Motivo:", motivo)

        .addField("Staffer:", message.author)
     
     message.channel.send(mutado)
  }

} else {
   message.reply("você não tem permissão! :x:")
}
}