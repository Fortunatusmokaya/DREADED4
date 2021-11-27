/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/KeHteFqTRFsAAAPo/hu-tao.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Yoh, now why might you be looking for me, hm? Oh, you didn't know? I'm the 77th Director of the Wangsheng Funeral Parlor, Hu Tao. Though by the looks of you... Radiant glow, healthy posture... Yes, you're definitely here for something other than that which falls within my regular line of work, aren't you?
				Anyway use something from *${this.client.config.prefix}help* list if you want anything. \n`,
			}
		);
	};
}
