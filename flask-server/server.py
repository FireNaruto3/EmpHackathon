from flask import Flask
import requests 
import jsonify 


app = Flask(__name__)

# Normally secret key would be hidden, but too lazy to put into environment variable.
SECRET_KEY = "PdfwlZT8ESN5nITTEsUZXgt6asB0fIITI3akr5dt"

@app.route("/get_asteroid_data", methods = ["GET"])
def getData(): 
    url = "https://api.nasa.gov/neo/rest/v1/neo/browse/"
    params = {
        'api_key': SECRET_KEY
    }

    response = requests.get(url, params = params)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else: 
        return jsonify({"error": "failure to retrieve data"})






if __name__ == '__main__':
    app.run(debug=True)