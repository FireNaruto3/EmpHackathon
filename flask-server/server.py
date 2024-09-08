from flask import Flask, jsonify, request
from flask import json
import requests 
from flask_cors import CORS, cross_origin



app = Flask(__name__)
CORS(app)

# Normally secret key would be hidden, but too lazy to put into environment variable.
SECRET_KEY = "PdfwlZT8ESN5nITTEsUZXgt6asB0fIITI3akr5dt"

@app.route("/get_asteroid_data", methods = ["GET"])
@cross_origin(origin='http://localhost:3000')
def getData(): 
    url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key="

    params = {
        'api_key': SECRET_KEY
    }

    response = requests.get(url + SECRET_KEY)
    
    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else: 
        return jsonify(response.status_code)


mars_api= "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"


@app.route("/check_answer", methods = ["POST"])
@cross_origin(origin='http://localhost:3000')
def checkAnswer(): 
    
    data = request.get_json()
    answer = int(data.get('answer'))
  
    # Check if the password is correct
    if answer == 35:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)