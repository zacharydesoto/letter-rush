from flask import Flask, request, jsonify
from .services import get_word_frequency

app = Flask(__name__)



@app.route('/check-word', methods='POST')
def check_word():
    # Make sure request contains JSON data
    if not request.is_json:
        return jsonify({'error': 'Missing JSON in request'}), 400

    # Get data from request
    data = request.get_json()
    word = data.get('word')

    res = get_word_frequency(word)

    response = {
        'message': 'Data received successfully',
        'frequency': res
    }

    return jsonify(response), 200

if __name__ == '__main__':
    app.run(debug=True)
