from flask import Flask, jsonify
import json

app = Flask(__name__)

deaths = "deaths.json"

@app.route('/dead', methods=['POST'])
def dead():
    with open(deaths, 'r') as f:
        data = json.load(f)
    
    if "deaths" in data:
        data["deaths"] += 1
    else:
        data["deaths"] = 1
    
    with open(deaths, 'w') as f:
        json.dump(data, f)

    return jsonify({"deaths": data["deaths"]})


@app.route('/get_deaths', methods=['GET'])
def get_deaths():
    with open(deaths, 'r') as f:
            data = json.load(f)

    return jsonify({"deaths": data["deaths"]})


@app.route('/reset', methods=['POST'])
def reset():
    with open(deaths, 'r') as f:
        data = json.load(f)

        data["deaths"] = 0
    
    with open(deaths, 'w') as f:
        json.dump(data, f)

    return jsonify({"deaths": data["deaths"]})

if __name__ == '__main__':
    app.run(debug=True)