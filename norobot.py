import os
import re

directory = "."

for filename in os.listdir(directory):
    if filename.endswith(".htm"):
        filepath = os.path.join(directory, filename)
        print(filepath)
        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()
            new_content = re.sub(r'<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>',
                                '<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>\n<meta name="robots" content="noindex">\n<meta name="googlebot" content="noindex">',
                                content)
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(new_content)