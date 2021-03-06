/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from "axios";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "weather",
			aliases: ["wthr"],
			description: "Gives you the weather of the given state or city. ",
			category: "educative",
			usage: `${client.config.prefix}weather [place_name]`,
			baseXp: 50,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		//if (!this.client.config.weatherAppid)
		//	return void M.reply("No weather api key set");
		if (!joined) return void M.reply("Provide me the place name, š !");
		const place = joined.trim();
		await axios
			.get(`https://api.popcat.xyz/weather?q=${place}`)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.then((response: any) => {
				// console.log(response);
				const text = `š Weather for the place *${place}* found\n\nšø *Place:* ${response[0].location.name}*\nš *Weather: ${response[0].current.skytext}*\nš”ļø *Temperature: ${response[0].current.temperature}Ā°C*\nš¦ *Humidity: ${response[0].current.humidity}%*\nš *Wind:* ${response[0].current.windspeed}*\n`;
				M.reply(text);
			})
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			.catch((err: any) => {
				M.reply(`No such place name.`);
			});
	};
}
