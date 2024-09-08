from flask import Flask, jsonify
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

@app.route('/mars_weather', methods=['GET'])
def get_mars_weather():
    try:
        # Fetch data from the NASA API
        response = requests.get(mars_api)
        data = response.json()
        
        # Extract relevant information (AT and HWS)
        sol_keys = data.get("sol_keys", [])
        weather_data = []

        # Loop through each sol in "sol_keys"
        for sol in sol_keys:
            validity_checks = data.get("validity_checks", {}).get(sol, {})
            
            # Get AT and HWS data only if it's valid
            at_data = validity_checks.get("AT", {}).get("valid", False)
            hws_data = validity_checks.get("HWS", {}).get("valid", False)
            
            if at_data and hws_data:
                weather_data.append({
                    "sol": sol,
                    "AT": validity_checks["AT"]["sol_hours_with_data"],
                    "HWS": validity_checks["HWS"]["sol_hours_with_data"]
                })

        return jsonify(weather_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)