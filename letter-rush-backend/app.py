from flask import Flask, request, jsonify
from flask_cors import CORS
from services import get_word_frequency

app = Flask(__name__)
CORS(app)

@app.route('/check-word', methods=['GET'])
def check_word():
    word = request.args.get('word')
    first_word = word.split(' ')[0]

    frequency = get_word_frequency(first_word)

    response = {
        'message': 'Frequency checked successfully',
        'frequency': frequency
    }

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True, port=4999)
