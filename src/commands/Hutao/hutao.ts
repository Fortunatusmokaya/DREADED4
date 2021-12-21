import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dreaded',
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
│💖 ɴᴀᴍᴇ  : DREADED
│👽 ᴘʀᴇꜰɪx : ${this.client.config.prefix}
│👑 ᴏᴡɴᴇʀ : Fortunne <${this.client.config.prefix}mod>
|💃 Dreaded : Well..
                   Fully Modular Design
                  
                   Object Oriented
                  
                   Written in TypeScript
                   
                   Self-Restoring Auth
                   
                   Built with Baileys (The Best WhatsApp Library Out There)    
    
    Rules :  1.Contact my owner through wa.me/+254114018035 incase you want my script and assistance in deploying me
             
             2.Don't video or voice call me result=ban/block😡
            
             3.Don't spam commands😡
            
             4.Don't spam wrong commands use <${this.client.config.prefix}help to get info about commands>🥺          
             
             5.If you need me in your group contact Fortunne or send me a link in my dm.
             
           
            
     Well then... I am still under construction😩Uwu.
                  
                  MY owner is trying his best to create more commands to make me the BEST♥️
   
     Also...
                 
                  if you like to chat with me in a group use : <${this.client.config.prefix}chat (anything you like)        
            \n\n`
           return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `${text} 

            
    ──❅┈[ 👾DREADED👾 ]┈❅───
    ┌────────────┈❅
    │   ♥️ Fortunne💖💃💖💃
    │   🇰🇪Beyond Bot(*^_^*)🚀
    └────────────┈⁂
    ❅┈[💖NICE DAY💖]┈❅
    💫 *Note: Use ${this.client.config.prefix}dreaded to read my rules and get other info about the bot and script*` }
         )


    }
}
