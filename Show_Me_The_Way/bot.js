const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");
var tableauJoke = new Array("C'est la meilleur blague du monde !", "Celle-ci est pas mal", "En vrai elle est pas super mais rigole", "Je l'adore celle la", "Obligé tu va rire :wink:" );
var tableauBlague = new Array("Tu connais la différence entre un micro-ondes et un cecoya ?", 
"Qu'est-ce qui fait toin toin ?", 
"Où est fabriqué le viagra ?", 
"Que font les dinosaures quand ils n'arrivent pas à ce mettre d'accord ?", 
"Pourquoi mettons une selle sur un cheval ?", 
"Qu'est-ce qui est transparent et qui cours dans un champ ?", 
"Quel est le meilleur moyen de contraception ?", 
"Qu'est-ce qu'un hamster dans l'espace ?", 
"Tu sais pourquoi les États-Unis peuvent pas jouer au échecs ?", 
"Tu sais pourquoi Harry Potter est classé comme film fantastique ?", 
"Tu sais c'est quoi la différence entre un melon et un bébé ?", 
"Qu'est-ce qui a 4 pattes et 1 bras ?", 
"Tu sais pourquoi les Tyrannosaures tape pas dans leur main ?", 
"Tu sais c'est quoi la différence entre un thermomètre rectal et oral ?", 
"Simon n'a pas de bras.\nToc toc ?\nQui est là ?", 
"Qu'est-ce que dit Frodon devant sa maison ?", 
"Comment on appel un boomerang qui reviens pas ?", 
"Comment faire aboyer un chat ?", 
"Qu'est-ce qui n'est pas un steak ?", 
"Que dit une fraise sur un cheval ?", 
"Que dit un poussin de 500kg ?", 
"Que dit un médecin a une crevette avant de la diagnostiquer ?", 
"Que dit une route à son fils ?", 
"Tu sais combien il y a de somalien en Somalie ?", 
"Qu'est-ce qui est gros, gris et qui sait pas nager ?", 
"Quel est le pays préféré des ours ?", 
"Quel est la couleur du virus de la grippe ?", 
"Tu sais ce que c'est qu'un arabe dans un oeuf ?",
"Comment est-ce que tu sais si une fille est un princesse ?",
"Comment appelle-t-on l'union entre un Haïtien et une Mexicain ?",
"Tu sais comment faire pour sortir l'enfant en nous ?",
"Tu sais comment on dit précoce en espagnol ?",
"Tu sais ce que c'est l'animal préféré des témoins de Jéhovah ?",
"Tu sais pourquoi c'est dur d'éduquer un enfant sourd ?",
"Comment on appelle un papa qui change de sexe et qui fait des conférence là-dessus ?",
"Qu'est-ce que une blonde fait quand elle apprend qu'elle est adoptée ?",
"Qu'est-ce que le ballon gonflable troué dit à son ami ?",
"Comment appel ton un restaurant qui sert des lesbiennes ?",
"Quel sorte d'oiseau s'entraîne le plus à la muscu ?",
"Pourquoi les corneilles aiment manger des cadavres ?",
"À quel point un vampire à mal quand il se fait empaler ?",
"Quel est le carburant préféré des vampires ?",
"Qu'est-ce que le pénis d'un zombie fait quand il voit une zombie ?",
"Tu sais pourquoi les morts-vivants couchent autant avec des hommes qu'avec des femmes ?",
                              
"C'est 2 gros qui sont sur un bateau du coup le bateau il coule",
"C'est un gars qui est tellement petit que sa tête elle pu des pieds",
"C'est un hiboux qui rentre dans une casserole et du coup il bout", 
"C'est l'histoire d'un prêtre qui rentre dans un enfant", 
"J'ai reçu un coup de téléphone hier, ça a fait mal", 
"La dernière fois j'ai fais une blague sur les paraplégiques mais ça a pas bien marché", 
"C'est l'histoire d'une fleur qui court, puis qu'il se plante", 
"Je pensais pas pouvoir aller dans une union soviétique, mais finalement j'ai Russie",
"Mon infirmière ma crié dessus l'autre jour mais je suis toujours pas sûr de la raison, parce que j'ai du mal à écouter quand je me branle",
"Je suis pas superstitieux mais quand je vois un animal flotter sur un lac je me dis que c'est un cygne",
"C'est un gars il va chez le médecin\nLe médecin : 'Faudrait que vous arrêtiez de vous masturber'\nLe gars : 'Mais pourquoi ?'\nLe médecin : 'J'aimerais vous examinez'",
"J'ai un pote vampire qui est dans la police, il vient de se faire transférer dans l'escouade canine");
var tableauRep = new Array("Non ? Moi non plus.", "Un tanard", "Au boukistan", "Un tiragosaure", "Parce que sinon on tombe", "Troupeau de vitre", "Être moche", "Un hamsteroide", "Ils leur manque 2 tours", "Parce que le roux à des amis", "L'un est facile à coupé et est bon en bouche alors que l'autre est un fruit", "Un pitbull dans un jardin d'enfant", "Parce qu'ils sont morts", "Le goût", "Pas Simon", "C'est la que j'hobbit", "Un bâton", "Un briquet, de l'essence et WOUF", "Une pastèque", "Tagada Tagada", "**PIOU PIOU**", "Décortiquez vous", "Ne rentre pas trottoir", "500 grammes", "Un château", "L'Ourstralie", "Gris pâle", "Un katar surprise", "Elle aime que tu viens dans son palais", "Une choco-latine", "T'utilise un cintre en métal", "Dèche pas si tôt", "Le serpent à sonnette", "Il t'écoute jamais", "Un ex-père", "Elle l'annonce à ses parents", "Prrffffrrfffrrfff","C'est un restaurant cunilaire","Parce que c'est des z'hommes bi","Une résu-érection","Le sans plomb","Juste un pieux","Le corbeau","Parce qu'ils aiment vivre chaque jour comme le dernier palapapa");
var tableauDM = new Array("Mais qu'est-ce que tu me veut en faite ?", "Ba vas y continue ! Je te dirais rien !");

bot.on('ready', () => {
    console.log("Bot ready !");
});

bot.on('ready', function (){
  bot.user.setActivity(prefix + 'help').catch(console.error);
})

bot.on('guildMemberAdd', function (membre){
  membre.createDM().then(function (channel) {
    //channel.send("Bienvenue dans le guilde Show Me The Way !\nJe te souhaite la bienvenue parmi nous.\nJe suis très content de t'accueillir aujourd'hui et j'espère que tu te plairas ici !\nN'hésite pas à me solliciter si tu as besoin de quoi que ce soit, je me ferai un plaisir de t'apporter mon aide, après tout je suis le bot de la guilde :grinning: \nFait " + prefix + "help dans un canal pour connaître les commandes disponibles.");
    /**\nJe te prie d'aller remplir le google doc de la guilde, le lien est juste là : https://docs.google.com/spreadsheets/d/1yZMqrtGwpJmDNbMeB4555Bq_3Bw0SK6pUCrLrS4f61k/edit#gid=0");*/
  }).catch(console.error)
    var role = membre.guild.roles.find("name","Recrutarisé")
    membre.addRole(role)
})
bot.on('guildMemberAdd', function (membre){
  membre.createDM().then(function (channel) {
    //channel.send("Bienvenue dans le guilde Show Me The Way !\nJe te souhaite la bienvenue parmi nous.\nJe suis très content de t'accueillir aujourd'hui et j'espère que tu te plairas ici !\nN'hésite pas à me solliciter si tu as besoin de quoi que ce soit, je me ferai un plaisir de t'apporter mon aide, après tout je suis le bot de la guilde :grinning: \nFait " + prefix + "help dans un canal pour connaître les commandes disponibles.");
    /**\nJe te prie d'aller remplir le google doc de la guilde, le lien est juste là : https://docs.google.com/spreadsheets/d/1yZMqrtGwpJmDNbMeB4555Bq_3Bw0SK6pUCrLrS4f61k/edit#gid=0");*/
  }).catch(console.error)
    var role = membre.guild.roles.find("name","Viewers")
    membre.addRole(role)
})
bot.on('guildMemberAdd', function (membre){
  membre.createDM().then(function (channel) {
    //channel.send("Bienvenue dans le guilde Show Me The Way !\nJe te souhaite la bienvenue parmi nous.\nJe suis très content de t'accueillir aujourd'hui et j'espère que tu te plairas ici !\nN'hésite pas à me solliciter si tu as besoin de quoi que ce soit, je me ferai un plaisir de t'apporter mon aide, après tout je suis le bot de la guilde :grinning: \nFait " + prefix + "help dans un canal pour connaître les commandes disponibles.");
    /**\nJe te prie d'aller remplir le google doc de la guilde, le lien est juste là : https://docs.google.com/spreadsheets/d/1yZMqrtGwpJmDNbMeB4555Bq_3Bw0SK6pUCrLrS4f61k/edit#gid=0");*/
  }).catch(console.error)
    var role = membre.guild.roles.find("name","PTDR T KI")
    membre.addRole(role)
})

bot.on('message', function (message){
  if (message.content === prefix + "build"){
    var cadreBuild = new Discord.RichEmbed()
     .setColor("#FEAF27")
     .addField("Meta Battle", "Lien : http://metabattle.com/wiki/MetaBattle_Wiki")
     .addField("Snow Crows", "Lien : https://snowcrows.com/")
  message.channel.send(cadreBuild);
  }

  if ((message.content === prefix + "guilde") || (message.content === prefix + "googledocGW2")){
    var cadreGuilde = new Discord.RichEmbed()
     .setColor("#1FFB2E")
     .addField("Google doc de la guilde", "Lien : https://docs.google.com/spreadsheets/d/19Xo88bTCC3twiRqYjRXYOqa8Skoas7PBQWmINkW_2RI/edit?usp=sharing")
  message.channel.send(cadreGuilde);
  }
  
 /** if (message.content === prefix + "map"){
    var cadreMap = new Discord.RichEmbed()
     .setColor("#FFFF00")
     .addField("Où les gens de la guilde habitent", "Lien : https://www.google.com/maps/d/edit?mid=1X4vctGyosma-WWXvfMSQR2aIsh5jCwuz&ll=48.30519099462427%2C-0.5212956499999564&z=8")
  message.channel.send(cadreMap);
}*/

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
      .addField("ARC DPS", "Lien pour installer l'addon : https://www.deltaconnected.com/arcdps/x64/")
      .addField("Installation de l'addon","1- Télécharger d3d9.dll\n2- Déplacer le dans le fichier bin64 de votre jeu Guild Wars 2\n3- Lancer le jeu et l'addon est là !\n**Refaite cette manipulation à chaque mise à jour sinon votre jeu peut crasher !**")
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

  function randomRep(min, max){
    min = Math.ceil(0);
    max = Math.floor(tableauRep.length-1);
    randrep = Math.floor(Math.random() * (max - min + 1) + min);
  }

  bot.on('message',message => {
    randomRep();
    message.createDM().send(teableauDM[randrep]);
  })

  function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(tableauBlague.length-1);
    randnum = Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randum(min, max){
    min = Math.ceil(0);
    max = Math.floor(tableauJoke.length-1);
    randjoke = Math.floor(Math.random() * (max - min + 1) + min);
  }

  if (message.content === prefix + "blague"){
    randum();
    random();
    var cadreJoke = new Discord.RichEmbed()
      .setColor("#FC0CFC")
      .addField(tableauJoke[randjoke],tableauBlague[randnum])
      if (randnum <= tableauBlague.length-12){
        cadreJoke.addField("Réponse",tableauRep[randnum])
      }
    message.channel.send(cadreJoke);
  }

  if ((message.content === prefix + "metier") || (message.content === prefix + "métier")){
    var cadreMetier = new Discord.RichEmbed()
      .setColor("#B3B3B3")
      .addField("Monter un métier", "Lien pour monter ses métiers : http://gw2crafts.net/fr/")
      message.channel.send(cadreMetier);
  }
  
  if ((message.content === prefix + "combo") || (message.content === prefix + "combos")){
    var cadreCombo = new Discord.RichEmbed()
      .setColor("#6DEDDC")
      .addField("Les combos", "Site du bus magique, lien : https://www.lebusmagique.fr/pages/guides/tutobus/les-combos.html")
  message.channel.send(cadreCombo);
  }
  
  if (message.content === prefix + "style"){
    var cadreStyle = new Discord.RichEmbed()
      .setColor("#6DEDDC")
      .addField("Le style 😎", "Lien : https://gw2style.com")
  message.channel.send(cadreStyle);
  }
  
  if ((message.content === prefix + "help") || (message.content === prefix + "commande") || (message.content === prefix + "commandes")){
    var cadreHelp = new Discord.RichEmbed()
      .setColor("#723AE2")
      .addField("Liste des commandes","Toutes les commandes commencent par '" + prefix + "'\n\n__Voici la liste des commandes disponibles :__\n**" + prefix + "helpGW2** : Donne toutes les commandes en rapport avec Guild Wars 2\n**" + prefix + "helpD2** : Donne toutes les commandes en rapport avec Destiny 2**\n")
      message.channel.send(cadreHelp);
  }


if (message.content === prefix + "helpGW2"){
    var cadreHelp = new Discord.RichEmbed()
      .setColor("#723AE2")
      .addField("Liste des commandes","Toutes les commandes commencent par '" + prefix + "'\n\n__Voici la liste des commandes disponibles :__\n**" + prefix + "help**, **" + prefix + "commande** ou **" + prefix + "commandes** : Donne toutes les catégories de commande\n**" + prefix + "guilde** ou **" + prefix + "googledocGW2** : Lien vers le google doc de la guilde\n**" + prefix + "build** : Lien pour faire des stuffs\n**" + prefix + "efficiency** : Lien vers un site complet sur GW2\n**" + prefix + "mcm** : Lien vers une map McM actualisée instantanément\n**" + prefix + "veine** ou **" + prefix + "veines** : Lien vers une map donnant toutes les veines riches du jeu\n**" + prefix + "dps** : Lien de l'addons du DPS Meter\n**" + prefix + "mouse** ou **" + prefix + "souris** : Lien de l'appli pour changer la souris\n**" + prefix + "mission** ou **" + prefix + "missions** : Lien pour les missions de guilde\n**" + prefix + "blague** : Raconte une blague (plus ou moins drôle)\n**" + prefix + "metier** ou **" + prefix + "métier** : Lien pour monter ses métiers\n**" + prefix + "style** : Lien pour être grave stylé !")
      message.channel.send(cadreHelp);
  }
  
  if (message.content === prefix + "cachecache"){
    var cadreCache = new Discord.RichEmbed()
     .setColor("#9708F5")
     .addField("__**Règles du cache cache**__", "Il s'agit d'un cache cache dans une capitale du jeu décidé en groupe.\n\n__2 équipes :__\n○ 1. les cachés (Le groupe, pas obligé de se cacher ensemble)\n○ 2. le chercheur (désigné par un random.gg et, si possible, fait un partage d'écran sur discord pour suivre sa recherche)\n\n__Pour notre cache cache de guilde n'oubliez pas de :__\n- Echap -> Option -> Option générale -> décocher 'afficher le nom de tous les joueurs'\n- Ne pas représenter la guilde\n\n")
  message.channel.send(cadreCache);
  }


//Section Destiny 2

  if (message.content === prefix + "helpD2"){
    var cadreHelp = new Discord.RichEmbed()
      .setColor("#723AE2")
      .addField("Liste des commandes","Toutes les commandes commencent par '" + prefix + "'\n\n__Voici la liste des commandes disponibles :__\n**" + prefix + "help**, **" + prefix + "commande** ou **" + prefix + "commandes** : Donne toutes les catégories de commande\n**" + prefix + "googledocD2** : Lien vers le google doc\n**" + prefix + "light** : Lien de light.gg\n**" + prefix + "dim** : Lien vers Destiny Item Manager\n**" + prefix + "raid** : Lien vers raid report\n**" + prefix + "waste** ou **" + prefix + "time** : Lien vers Waste Time On Destiny\n**" + prefix + "menagerie** : Lien vers un site regroupant les armes et armures de la ménagerie\n**" + prefix + "embleme** : Lien pour voir tout les emblèmes de Destiny 2\n**" + prefix + "nuit** ou **" + prefix + "nuitnoire** : Lien pour speed run les nuits noire\n**" + prefix + "tracker** : Lien pour Destiny Tracker\n**" + prefix + "blague** : Raconte une blague (plus ou moins drôle)\n")
      message.channel.send(cadreHelp);
  }


if (message.content === prefix + "googledocD2"){
    var cadreGDoc = new Discord.RichEmbed()
     .setColor("#1FFB2E")
     .addField("Google doc de la guilde", "Lien : https://docs.google.com/spreadsheets/d/1nQhQsg_3Yeu2Qrl-B2Lo0sSST3P2qcztnPK_X-PiqOM/edit?usp=sharing")
  message.channel.send(cadreGDoc);
  }


if (message.content === prefix + "light") {
    var cadreLight = new Discord.RichEmbed()
     .setColor("#FFFF00")
     .addField("Light.gg", "Lien : light.gg")
  message.channel.send(cadreLight);
  }

if (message.content === prefix + "dim") {
    var cadreDIM = new Discord.RichEmbed()
     .setColor("#FF9201")
     .addField("Destiny Item Manager", "Lien : https://destinyitemmanager.com")
  message.channel.send(cadreDIM);
  }


if ((message.content === prefix + "nuit") || (message.content === prefix + "nuitnoire")) {
    var cadreNuit = new Discord.RichEmbed()
     .setColor("#0119FF")
     .addField("Speedrun Nuit Noire", "Lien : https://clan.report/compare-nightfalls")
  message.channel.send(cadreNuit);
  }


if (message.content === prefix + "raid"){
    var cadreRaid = new Discord.RichEmbed()
     .setColor("#FF0000")
     .addField("Raid Report", "Lien : https://raid.report")
  message.channel.send(cadreRaid);
  }


if ((message.content === prefix + "waste") || (message.content === prefix + "time")) {
    var cadreWaste = new Discord.RichEmbed()
     .setColor("#000000")
     .addField("Waste Time On Destiny", "Lien : https://www.wastedondestiny.com/")
  message.channel.send(cadreWaste);
  }


if (message.content === prefix + "menagerie") {
    var cadreMenagerie = new Discord.RichEmbed()
     .setColor("#A31BD3")
     .addField("Menagerie", "Lien : https://menagerie-calculator.now.sh/")
  message.channel.send(cadreMenagerie);
  }


if (message.content === prefix + "embleme") {
    var cadreEmbleme = new Discord.RichEmbed()
     .setColor("#FFFFFF")
     .addField("Tout les emblèmes", "Lien : https://destiny2db.pts-squad.net/")
  message.channel.send(cadreEmbleme);
  }


if (message.content === prefix + "tracker") {
    var cadreTracker = new Discord.RichEmbed()
     .setColor("#6D6B6E")
     .addField("Destiny Tracker", "Lien : https://destinytracker.com/d2/intel#")
  message.channel.send(cadreTracker);
  }
  
})

bot.login(process.env.BOT_TOKEN);

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
