const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saldo')
		.setDescription('Adds saldo'),
	async execute(interaction) {
		await interaction.reply('saldo added');
	},
};
