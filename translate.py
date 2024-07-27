import os
import sys
import requests

def translate_file(filename, api_key):
    try:
        # Read the file content
        with open(filename, 'r') as file:
            content = file.read()

        # Find the content after the specific string
        start_marker = '{/* Begin Content */}'
        start_index = content.find(start_marker)
        if start_index == -1:
            raise ValueError(f"The start marker '{start_marker}' not found in the file.")

        text_content = content[start_index + len(start_marker):].strip()

        # Get the language identifier from the user
        lang = input("Enter the DeepL language identifier (e.g., 'es' for Spanish): ").strip()

        # Translate the content using DeepL API
        url = "https://api.deepl.com/v2/translate"
        params = {
            "auth_key": api_key,
            "text": text_content,
            "target_lang": lang
        }

        response = requests.post(url, data=params)
        if response.status_code != 200:
            raise Exception("Error in translation API call: " + response.text)

        translated_content = response.json()['translations'][0]['text']

        # Create the new file path
        new_filepath = f"./src/content/docs/{lang}/{os.path.basename(filename)}"

        # Ensure the directory exists
        os.makedirs(os.path.dirname(new_filepath), exist_ok=True)

        # Read the content of the original file before the marker
        original_content = content[:start_index + len(start_marker)]

        # Write the translated content to the new file
        with open(new_filepath, 'w') as new_file:
            new_file.write(original_content + '\n' + translated_content)

        print(f"Translation successful. File saved to {new_filepath}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python translate_script.py <filename>")
    else:
        api_key = input("Enter your DeepL API key: ").strip()
        translate_file(sys.argv[1], api_key)
