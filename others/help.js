const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setColor('#116d56')
    .setDescription(`[Support](https://discord.gg/tdVnzJtH) - [Invite](https://discord.com/api/oauth2/authorize?client_id=868194752619773962&permissions=8&scope=bot)`)
    .addField("🌐 ❯ General Commands", `\`help\`, \`ping\`, \`prefix\`, \`uptime\`, \`avatar\`, \`invites\`, \`suggest\`, \`userinfo\`, \`serverinfo\`, \`github\`, \`support\`, \`botinfo\`, \`weather\`, \`emojiid\``)
    .addField("🎶 ❯ Music Commands", `\`filter\`, \`loop\`, \`lyrics\`, \`np\`, \`pause\`, \`play\`, \`queue\`, \`radio\`, \`remove\`, \`resume\`, \`search\`, \`shuffle\`, \`skip\`, \`skipto\`, \`stop\`, \`volume\``)
    .addField("🛠️ ❯ Moderation Commands", `\`lock\`, \`unlock\`, \`ban\`, \`unban\`, \`count\`, \`emojiinfo\`, \`se\`, \`bans\`, \`embed\`, \`vkick\`, \`clear\`, \`emojilist\`, \`kick\`, \`warn\`, \`botlist\`, \`cinvite\`, \`channelinfo\`, \`channels\`, \`roleinfo\`, \`timelock\`, \`tempban\`, , \`tempmute\`, \`serverlock\`, \`serverunlock\`, \`nuke\`, \`nick\`, \`addrole\`, \`rmvrole\``)
    .addField("😅 ❯ Fun Commands", `\`slap\`, \`hug\`, \`howgay\`,‌ \`meme\`, \`cry\`, \`kiss\`, \`clyde\`, \`captcha\`, \`phcomment\`, \`cuddle\`, \`joke\`, \`poke\`, \`baka\`, \`pat\`, \`punch\`, \`spank\`, \`dance\`, \`rate\`, \`advice\`, \`ascii\` \`dicksize\``)
    .addField("✒️ ❯ Text Commands", `\`textkurdish\`, \`textarabic\`, \`textenglish\`, \`textturkish\`, \`textpersian\``)
    .addField("🌟 ❯ Gif Commands", `\`boy\`, \`girl\`, ‌\`couple\`, \`anime\`, \`emoji\`, \`animal\`, \`neon\``)
    .addField("🎟️ ❯ Backup Commands", `\`backup-create\`, \`backup-load\`, \`backup-info\``)
    .addField("🎮 ❯ Game Commands", `\`rps\`, \`slots\`, \`iq\`, \`hack\`, \`8ball\``)
    .setFooter(`${message.author.tag}`, message.author.avatarURL)
    helpEmbed.setTimestamp();

    message.lineReplyNoMention(`💬 Need Help? Here Are All Commands For Useing`).catch(console.error);
  }
};
