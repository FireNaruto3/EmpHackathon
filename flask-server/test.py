import requests

response = requests.get("http://127.0.0.1:5000/get_deaths")
print(response.json())
