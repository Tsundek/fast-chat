# coding=UTF-8
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot
from chatterbot import corpus
import os
from flask import Flask, request # Importa a biblioteca
from flask_cors import CORS
from flask import jsonify

bot = ChatBot('TW Chat Bot')
trainer2 = ChatterBotCorpusTrainer(bot)

for arq in os.listdir('conversas'):
        trainer2.train('conversas/' + arq)


app = Flask(__name__)  # Inicializa a aplicação
CORS(app)

@app.route('/') # Nova rota
def main():   
    resultado = ''    
    pergunta = request.args.get('c')    
    print(pergunta)
    resposta = bot.get_response(str(pergunta))
    print(resposta)
    print(resposta.confidence)
    
    if float(resposta.confidence) >= 0.2:
       resultado = str(resposta)
    else:
        resultado='Ainda nao sei responder esta pergunta'    
    return jsonify(resultado)    


if __name__ == '__main__':
  app.run(debug=True) # Executa a aplicação