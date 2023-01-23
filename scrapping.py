import os
import requests
from bs4 import BeautifulSoup
import requests
import re


def web_scraper(url, all_links):
    # Faz uma solicitação GET para a página e salva o conteúdo em uma variável
    url_base = 'https://www.aartedecurar.com.br/bebe/26/'
    url_total = url_base+url
    response = requests.get(url_total)
    if response.status_code != 200:
        print(f'A página {url_total} não existe')
        return
    content = response.text
    soup = BeautifulSoup(content, 'html.parser')

    print(url)
    # Salva o conteúdo da página em um arquivo com o nome da página
    with open(f'{url}', 'w', encoding="utf-8") as f:
        f.write(soup.prettify())

    # Baixa as imagens da página
    images_folder = 'https://www.aartedecurar.com.br/bebe/26/'

    for img in soup.find_all('img'):
        img_url = img.get('src')
        if img_url is not None:
            response = requests.get(images_folder+img_url)
            if response.status_code != 200:
                print(f'A imagem {img_url} não existe')
                continue
            with open(f'{img_url}', 'wb') as f:
                f.write(response.content)

    # Busca por todos os links na página
    for link in soup.find_all('a'):
        link_url = link.get('href')
        # Verifica se o link já foi adicionado na lista de links
        if link_url not in all_links:
            if not link_url.startswith("http://www.aartedecurar.com.br"):
                all_links.add(link_url)
                # Chama a função recursivamente para processar o novo link
                web_scraper(link_url, all_links)


# Inicializa uma lista vazia para armazenar todos os links

url = "https://www.aartedecurar.com.br/bebe/26/menu_array.js"
response = requests.get(url)
code = response.text

pattern = r'"\S+\.htm"'
pages = [p.replace('"','').replace(',','') for p in re.findall(pattern, code)]

pages.append('index.htm')

# Inicializa uma lista vazia para armazenar todos os links
all_links = set()

for page in pages:
    # Chama a função passando a URL inicial e a lista de links
    web_scraper(page, all_links)
