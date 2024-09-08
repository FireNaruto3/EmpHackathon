import requests

response = requests.post("http://127.0.0.1:5000/reset")
print(response.json())
