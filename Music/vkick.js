module.exports = {
  name: "vkick",
  category: "<:mod:789590144650051604> moderation",
  async execute(message, args, client) {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "I Don't Have Proper Permissions To Use This Command!"
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Please Mention User That You Want To Kick From Voice Channel!`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`User Is Not In Any Voice Channel!`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`User Has Been Kicked From Voice Channel!`)
  }
};
