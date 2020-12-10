# coding=UTF-8
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot
from chatterbot import corpus
import os
bot = ChatBot('TW Chat Bot')

# conversa = ['Oiiii', 'foda-se']

# bot.set_trainer(ListTrainer)
# trainer=ListTrainer(bot)
trainer2= ChatterBotCorpusTrainer(bot)
# bot.train(conversa)
# trainer.train(conversa)
# trainer2.train("chatterbot.corpus.portuguese")
for arq in os.listdir('conversas'):
    # chats = open('conversas/' + arq, 'r',encoding="utf-8").readlines()
    trainer2.train('conversas/'+arq)
    # trainer.train(chats)




while True:
    pergunta = input("Usuario: ").lower()
    resposta = bot.get_response(pergunta,encoding="utf-8")
    if float(resposta.confidence) > 0.2:
        print('TW Bot: ', resposta)
    else:
        print('TW Bot: Ainda nao sei responder esta pergunta')