import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hutao',
            description: 'gives information about bot.',
            category: 'Hutao',
            usage: `${client.config.prefix}lumine`
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
        const n = [
        './assets/hutao/hutaopic.jpg'
    ]
    let rin = n[Math.floor(Math.random() * n.length)]
    let text = `
┌────────────┈❅   
|「(づ￣ 3￣)づ」
│🚀 ᴜꜱᴇʀ   : *${M.sender.username}*
│💖 ɴᴀᴍᴇ  : HU TAO
│👽 ᴘʀᴇꜰɪx : ${this.client.config.prefix}
│👑 ᴏᴡɴᴇʀ :Janul <${this.client.config.prefix}mod>
|💃 Hu tao : Well..
                   Fully Modular Design
                  
                   Object Oriented
                  
                   Written in TypeScript
                   
                   Self-Restoring Auth
                   
                   Built with Baileys (The Best WhatsApp Library Out There)    
    
    Rules :  1.Don't spam me cause I wanna give you the best bot experience ever😊
             
             2.Don't call me or spam dm result=ban/block😡
            
             3.Don't spam commands😡
            
             4.Don't spam wrong commands use <${this.client.config.prefix}help command_name to get info about commands>🥺          
             
     Well then... I am still under construction😂 Uwu.
                  
                  MY owner is trying his best to create more commands to make you guys happy Uwu.😊🚀
   
     Also...
                 
                  if you like to chat with me in a group use : <${this.client.config.prefix}chat (anything you like)        
            \n\n`
           return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `${text} 

            
    ──❅┈[ 💖HU TAO💖 ]┈❅───
    ┌────────────┈❅
    │   🧨 HU TAO💖💃💖💃
    │   🚀Beyond Bot(*^_^*)🚀
    └────────────┈⁂
    ❅┈[💖𝐇𝐚𝐯𝐞 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲💖]┈❅
    🎗 *Note: Use ${this.client.config.prefix}help <hutao> to view the command info*` }
         )


    }
}
