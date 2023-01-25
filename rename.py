import os
import re



folder_path = '.'

for filename in os.listdir(folder_path):
    if filename.endswith(".html"):
        with open(os.path.join(folder_path, filename), encoding="utf-8") as f:
            content = f.read()
        #new_content = re.sub(r'href="(/[^"]+.htm)"', r'href="\1.html"', content)
        new_content = content.replace(".htm\"", ".html\"")
        with open(os.path.join(folder_path, filename), "w", encoding="utf-8") as f:
            f.write(new_content)