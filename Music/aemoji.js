const { Client, Message, MessageEmbed } = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "aemoji",
  aliases: ["ei", "emi"],
  description: "Shows information about an emoji!",
  usage: "<emoji>",
  async execute(message, args, client) {
    const emote = args[0];
    if (!emote) return message.channel.send({content: `Please provide an emoji!`});
    const regex = emote.replace(/^<a?:\w+:(\d+)>$/, "$1");

    const emoji = message.guild.emojis.cache.find(
      (emoj) => emoj.name === emote || emoj.id === regex
    );
    if (!emoji)
      return message.channel.send({content: `Please provide an emoji!`});

    const embed = new MessageEmbed()
      .setTitle(`${emoji.name} ${emoji}`)
      .addField(`Info`, [
        `🆔 Emoji Id: ${emoji.id}`,
        `🔗 Emoji Url: [Click Here](${emoji.url})`,
        `🎬 Animated: ${
          emoji.animated ? "Yes" : "No"}`,
        `✏ Emoji Added By: ${emoji.author}`,
        `⏲ Emoji Added At: ${emoji.createdAt}`,
        `🤔 Requires Colon: ${emoji.requiresColons ? "Yes" : "No"}`,
        `📜 Managed Emoji? : ${emoji.managed ? "Yes" : "No"}`,
        `Deleteable: ${
          emoji.deletable ? "Yes" : "No"
        }`,
      ])
      .setThumbnail(emoji.url)
      .setColor("#2F3136");

    message.channel.send({embeds: [embed]});
  },
};
