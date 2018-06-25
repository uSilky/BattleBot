const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {

  console.log(`BOT ON!`); 
let loop = require(`./lockfeio.js`);
  loop.run(client);
});

client.login(config.token);

client.on("message", async message => {

    if(message.author.bot) return;
    
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say") {
  message.delete().catch(O_o=>{});
  if (message.member.hasPermission('MANAGE_GUILD')) {  
         
      let mensg = args.join(" ");
      if(!mensg)
         return message.channel.send("Digite a mensagem de aviso!")
         
      const say = new Discord.RichEmbed()
         .setColor("0cff00")
         .setAuthor("Anúncio", "https://cdn.discordapp.com/attachments/459214311521386497/460544721064820736/thinkingblackguy_1.png")
         
         .setDescription(mensg)
         
         .setTimestamp()
         .setFooter(`Por: ${message.author.tag}` , message.author.avatarURL)
      
      message.channel.send("@everyone", say)
      everyone.delete()
  }
}
});
});

