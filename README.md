# Chinese to English NLP-based translation service

Translate Chinese text to English text offline from the command line, using the NLP model published by [Helsinki-NLP](https://huggingface.co/Helsinki-NLP/opus-mt-zh-en).

| testset              | BLEU | chr-F |
| -------------------- | ---- | ----- |
| Tatoeba-test.zho.eng | 36.1 | 0.548 |

## Prerequisites

Clone the repository recursively with the Git LFS enabled:

```
git lfs install
git clone --recurse-submodules https://github.com/dmikushin/zh2en.git
```

Prepare Python virtual environment:

```
python3 -m venv ./venv
./venv/bin/activate
pip3 install wheel
pip3 install transformers torch sentencepiece python-socketio aiohttp
```

## Usage

Start the server:

```
python ./zh2en_server
```

Execute the client:

```
python ./zh2en "欲速则不达。"
If you want to do it quickly, you won't be able to do it.
```

