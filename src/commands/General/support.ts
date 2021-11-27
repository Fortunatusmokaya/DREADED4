import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `         WELL IN THAT CASE
       💃 * INVITE LINK:* 💃https://chat.whatsapp.com/LAzFp0iJ9EX9h8Mwcprfxx
        🎉*GENSHIN IMPACT GLOBAL INVITE LINK🎉:*https://chat.whatsapp.com/DLnxUTR1toqHoLh5zJ7WIB`,
           MessageType.text
        ))
        const n = [
            './assets/hutao/hu-tao-dance.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the Group Link in personal message \n` }
        )

        }
}
