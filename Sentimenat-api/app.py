from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import os
import logging

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)

CORS(app, resources={r"/*": {"origins": [
    "http://localhost:3000",
    "https://sentimental-news-ai.vercel.app"
]}})

@app.route('/sentiment', methods=['POST'])
def sentiment():
    data = request.get_json()
    text = data.get('text', '')
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    sentiment = 'Positive' if polarity > 0 else 'Negative' if polarity < 0 else 'Neutral'
    return jsonify({'sentiment': sentiment})

@app.route('/')
def health_check():
    return 'OK', 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
