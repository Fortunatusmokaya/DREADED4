/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "rank",
			description: "Displays User's Stats",
			category: "general",
			usage: `${client.config.prefix}rank [tag/quote]`,
			aliases: ["stats"],
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		if (M.quoted?.sender) M.mentioned.push(M.quoted.sender);
		const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid;
		let username = user === M.sender.jid ? M.sender.username : "Your";
		if (!username) {
			// const contact = this.client.getContact(user)
			// username = contact.notify || contact.vname || contact.name || user.split('@')[0]
			username = user.split("@")[0];
		}
		const exp = (await this.client.getUser(user)).Xp;
		let role;
		if (exp < 500) {
			role = "๐ธ Citizen";
		} else if (exp < 1000) {
			role = "๐ Cleric";
		} else if (exp < 2000) {
			role = "๐ฎ Wizard";
		} else if (exp < 5000) {
			role = "โฆ๏ธ Mage";
		} else if (exp < 10000) {
			role = "๐ฏ Noble";
		} else if (exp < 25000) {
			role = "โจ Elite";
		} else if (exp < 50000) {
			role = "๐ถ๏ธ Ace";
		} else if (exp < 75000) {
			role = "๐ Hero";
		} else if (exp < 100000) {
			role = "๐ Supreme";
		}else if (exp < 200000000) {
			role ="โ๏ธMystic";
		} else {
			role = " WISE MAN";
		}

		let level;
		if (exp < 500) {
			level = "1";
		} else if (exp < 1000) {
			level = "2";
		} else if (exp < 2000) {
			level = "3";
		} else if (exp < 5000) {
			level = "4";
		} else if (exp < 10000) {
			level = "5";
		} else if (exp < 25000) {
			level = "6";
		} else if (exp < 50000) {
			level = "7";
		} else if (exp < 75000) {
			level = "8";
		} else if (exp < 10000000) {
			level = "9";
		} else {
			level = "infinity";
		}

		return void (await M.reply(
			`*${username}'s Rank:*\n\nใฝ๏ธ *Level: ${level}*\n\nโญ *Exp: ${
				exp || 0
			}*\n\n๐ซ *Role: ${role}*`
		));
	};
}
