from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

usuarios = [
    {
        "nome": "Leonardo Tozato",
        "email": "leonardo@email.com",
        "telefone": "(19) 99999-1111"
    },
    {
        "nome": "Maria Silva",
        "email": "maria@email.com",
        "telefone": "(11) 98888-2222"
    },
    {
        "nome": "João Souza",
        "email": "joao@email.com",
        "telefone": "(21) 97777-3333"
    }
]

@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    return jsonify(usuarios)

if __name__ == '__main__':
    app.run(debug=True)