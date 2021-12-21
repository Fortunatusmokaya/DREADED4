/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "myowner",
			description: "SHOWS THE GITHUB PROFILE OF THE OWNER",
			category: "general",
			usage: `${client.config.prefix}myowner`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/LoG04blAZPgAAAPo/emilia-re-zero.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `GO CHECK MY MASTER'S PROFILE,GIVE A STAR AND MAYBE A FOLLOW💖💃
                   https://github.com/Fortunatusmokaya. \n`,
			}
		);
	};
}
