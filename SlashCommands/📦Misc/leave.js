const { SlashCommandBuilder } = require('@discordjs/builders');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leave')
    .setDescription('Leaves the voice channel'),
  async execute(interaction) {
    const connection = getVoiceConnection(interaction.guild.id);

    if (!connection) {
      await interaction.reply('I am not in a voice channel!');
      return;
    }

    connection.destroy();

    await interaction.reply('Left the voice channel!');
  },
};