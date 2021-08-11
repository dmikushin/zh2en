# French to English NLP-based translation service

Translate French text to English text offline from the command line, using the NLP model published by [Helsinki-NLP](https://huggingface.co/Helsinki-NLP/opus-mt-fr-en).

| testset       | BLEU | chr-F |
| ------------- | ---- | ----- |
| Tatoeba.ja.en | 57.5 | 0.720 |

## Prerequisites

Clone the repository recursively with the Git LFS enabled:

```
git lfs install
git clone --recurse-submodules https://github.com/dmikushin/fr2en.git
```

Prepare Python virtual environment:

```
python3 -m venv ./venv
./venv/bin/activate
pip3 install wheel transformers torch sentencepiece python-socketio aiohttp
```

## Usage

Start the server:

```
python ./fr2en_server
```

Execute the client:

```
python ./fr2en "Fais de ta vie un rêve, et d'un rêve, une réalité"
Make your life a dream, and a dream, a reality
```

