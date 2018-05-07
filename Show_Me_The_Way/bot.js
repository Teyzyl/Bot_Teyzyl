const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on('ready', () => {
    console.log("Bot ready !");
});

bot.on('ready', function (){
  bot.user.setActivity('faire le bot').catch(console.error);
})

bot.on('guildMemberAdd', function (membre){
  /**membre.createDM().then(function (channel) {
    channel.send("Bienvenue dans le guilde Show Me The Way !\nJe te souhaite la bienvenue parmi nous.\nJe suis très content de t'accueillir aujourd'hui et j'espère que tu te plairas ici !\nN'hésite pas à me solliciter si tu as besoin de quoi que ce soit, je me ferai un plaisir de t'apporter mon aide, après tout je suis le bot de la guilde :grinning: \nFait " + prefix + "help dans un canal pour connaître les commandes disponibles.\nJe te prie d'aller remplir le google doc de la guilde, le lien est juste là : https://docs.google.com/spreadsheets/d/1yZMqrtGwpJmDNbMeB4555Bq_3Bw0SK6pUCrLrS4f61k/edit#gid=0");
  }).catch(console.error)*/
    membre.addRole("Recrue","Nouveau dans la guilde").catch(console.error);
})

bot.on('message', function (message){
  if (message.content === prefix + "build"){
    var cadreBuild = new Discord.RichEmbed()
     .setColor("#FEAF27")
     .addField("Meta Battle", "Lien : http://metabattle.com/wiki/MetaBattle_Wiki")
     .addField("Snow Crows", "Lien : https://snowcrows.com/")
  message.channel.send(cadreBuild);
  }

  if ((message.content === prefix + "guilde") || (message.content === prefix + "googledoc")){
    var cadreGuilde = new Discord.RichEmbed()
     .setColor("#1FFB2E")
     .addField("Google doc de la guilde", "Lien : https://docs.google.com/spreadsheets/d/1yZMqrtGwpJmDNbMeB4555Bq_3Bw0SK6pUCrLrS4f61k/edit#gid=0")
  message.channel.send(cadreGuilde);
  }

  if (message.content === prefix + "map"){
    var cadreMap = new Discord.RichEmbed()
     .setColor("#FFFF00")
     .addField("Où les gens de la guilde habitent", "Lien : https://www.google.com/maps/d/edit?mid=1X4vctGyosma-WWXvfMSQR2aIsh5jCwuz&ll=48.30519099462427%2C-0.5212956499999564&z=8")
  message.channel.send(cadreMap);
}

  if (message.content === prefix + "efficiency"){
    var cadreEffi = new Discord.RichEmbed()
      .setColor("#B9121B")
      .addField("Guild Wars 2 Efficiency", "Lien : https://gw2efficiency.com/")
  message.channel.send(cadreEffi);
  }

  if (message.content === prefix + "mcm"){
    var cadreMCM = new Discord.RichEmbed()
      .setColor("#296DE2")
      .addField("Maps McM en direct", "Lien : https://wvwintel.com/#2103")
  message.channel.send(cadreMCM);
  }

  if ((message.content === prefix + "veine") || (message.content === prefix + "veines")){
    var cadreVeine = new Discord.RichEmbed()
      .setColor("#33B633")
      .addField("Toutes les veines riches du jeu", "Lien : http://lea.ancykien.fr/gw2/leaflet/gw2richoremap.htm")
  message.channel.send(cadreVeine);
  }

  if (message.content === prefix + "dps"){
    var cadreDPS = new Discord.RichEmbed()
      .setColor("#FF0000")
      .addField("ARC DPS", "Lien pour installer l'addon : http://lea.ancykien.fr/gw2/leaflet/gw2richoremap.htm")
      .addField("Installation de l'addon","1- Télécharger d3d9.dll\n2- Déplacer le dans le fichier bin64 de votre jeu Guild Wars 2\n3- Lancer le jeu et l'addon est là !\n**Refaite cette manipulation à chaque mise à jour sinon votre jeu peu crasher !**")
  message.channel.send(cadreDPS);
  }

  if ((message.content === prefix + "mouse") || (message.content === prefix + "souris")){
    var cadreSouris = new Discord.RichEmbed()
      .setColor("#00DCFE")
      .addField("Changer votre icone de souris", "Lien : https://pandateemo.github.io/YoloMouse/")
    message.channel.send(cadreSouris);
  }

  if ((message.content === prefix + "mission") || (message.content === prefix + "missions")){
    var cadreHelp = new Discord.RichEmbed()
      .setColor("#6C827F")
      .addField("Prime","Site anglais Dulfy (Bounty Guild Mission) : http://dulfy.net/2013/02/27/gw2-guild-bounty-guide/\nSite francais Le Bus Magique : http://www.lebusmagique.fr/pages/expeditions/missions-de-guilde/primes-de-guilde.html")
      .addField("Randonné","Site anglais Dulfy (Trek Guild Mission) : http://dulfy.net/2013/03/03/gw2-guild-trek-guild-mission-guide/\nSite francais Le Bus Magique : http://www.lebusmagique.fr/pages/expeditions/missions-de-guilde/les-randonnees-de-guilde.html")
      message.channel.send(cadreHelp);
  }

  if ((message.content === prefix + "help") || (message.content === prefix + "commande") || (message.content === prefix + "commandes")){
    var cadreHelp = new Discord.RichEmbed()
      .setColor("#723AE2")
      .addField("Liste des commandes","Toutes les commandes commencent par '" + prefix + "'\n\n__Voici la liste des commandes disponibles :__\n**" + prefix + "help**, **" + prefix + "commande** ou **" + prefix + "commandes** : Donne toutes les commandes\n**" + prefix + "guilde** ou **" + prefix + "googledoc** : Lien vers le google doc de la guilde\n**" + prefix + "build** : Lien pour faire des stuffs\n**" + prefix + "efficiency** : Lien vers un site complet sur GW2\n**" + prefix + "mcm** : Lien vers une map McM actualisée instantanément\n**" + prefix + "veine** ou **" + prefix + "veines** : Lien vers une map donnant toutes les veines riches du jeu\n**" + prefix + "dps** : Lien de l'addons du DPS Meter\n**" + prefix + "mouse** ou **" + prefix + "souris** : Lien de l'appli pour changer la souris\n**" + prefix + "mission** ou **" + prefix + "missions** : Lien pour les missions de guilde")
      message.channel.send(cadreHelp);
  }
})

client.login(process.env.token);

/** 
switch (arg[0].toLowerCase()){
  case "kick":
  if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){ //Est-ce que la personne qui kick peut le faire
    message.reply("T'as pas le droit")
  }else{
    var memberkick = message.mentions.members.firsts(); //Detecte la mention
    if(!memberkick){  //Regarde si l'utilisateur existe
      message.reply("Utilisateur inexistant"); //Si non
    }else{  //Si oui
      if(!message.guild.member(memberkick).kickable){ //On regarde si la personne est kickable
        message.reply("Utilisateur impossible de kick")
      }else{
        message.guild.member(memberkick).kick().then((member) => {  //Fonction qui kick la personne
        message.channel.send("Joueur kick");  //Message envoyé lors du kick
        }).catch(() => {
          message.channel.send("Kick interdit") //Message envoyer si on ne peut pas le kick
        })
      }
    }
  }
  break;
}*/
