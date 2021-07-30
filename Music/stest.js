const { MessageEmbed } = require('discord.js');

const { lineReply } = require("discord-reply");

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};

const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};

module.exports = {
  name: "serverinfo",
  category: "Music",
  aliases: ["sinfo"],
  description: "Get info about your server.",
  usage: "serverinfo ",

async execute(message, args, client) {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()

			.setDescription(`**Server information for __${message.guild.name}__**`)

			.setColor('#116d56')

			.setThumbnail(message.guild.iconURL({ dynamic: true }))

			.addField('General', [

				`**❯ Name:** ${message.guild.name}`,

				`**❯ ID:** ${message.guild.id}`,

				`**❯ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,

				`**❯ Region:** ${regions[message.guild.region]}`,

				`**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,

				`**❯ Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,

				`**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,

				`**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,

				'\u200b'

			])

			.addField('Statistics', [

				`**❯ Role Count:** ${roles.length}`,

				`**❯ Emoji Count:** ${emojis.size}`,

				`**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,

				`**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,

				`**❯ Member Count:** ${message.guild.memberCount}`,					

				`**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,

				`**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,

				`**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,

				'\u200b'

			])

			.setTimestamp();

		message.lineReplyNoMention(embed);

	}

};