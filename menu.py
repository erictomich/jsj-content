import requests
import re

url = "https://www.aartedecurar.com.br/bebe/26/menu_array.js"
response = requests.get(url)
code = response.text

pattern = r'"\S+\.htm"'
pages = [p.replace('"','').replace(',','') for p in re.findall(pattern, code)]

print(pages)