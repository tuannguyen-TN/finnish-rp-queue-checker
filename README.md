# Finnish Residence Permit Queue Checker

## Introduction

This repository offers a quicker and more convenient way to check the queue of your application when you apply for an extended residence permit to the Finnish Immigration Service, or [Migri](https://migri.fi/etusivu).

**NOTE**: The codes have only been tested and applied for study RP and job-seeking RP types of applications, with the diary number in the form of **xxxxx/xxx/xxxx**,so please use at your own discretion.

Since Migri does not provide the API for us to use the Kamu Chatbot from distance, what I did was to get the request from the Network tab of Chrome's inspect of the website when I submitted the suitable information to the chatbot on Migri's website.

## Web Application: HTML + JavaScript - Python/Flask

### Frontend

I built a simple user interface with HTML and Javascript, using some properties of PaperCSS for design. You can visit the website [here](https://finnish-rp-queue-checker.onrender.com/) and check where you are in queue right now.

### Backend

I wanted to use a diverse tech stack, so I implemented the backend with Python/Flask. At the moment, there are two endpoints:

- '/': homepage of the backend.
- '/check/<diary-number>': API endpoint to check for RP queue number.

You can test via [this link](https://finnish-rp-queue-checker-api.onrender.com/)

## Standalone CLI Application

### Python version

Since there is no direct API endpoint, I utilized Python's [subprocess](https://docs.python.org/3/library/subprocess.html) package, and run Linux commands with shell in Python.

#### How to execute program

There are two ways for users to look up the information.<br>

1. Insert the diary number as a command line argument

```python
python main.py <xxxxx/xxx/xxxx>
```

2. If not, just run the program as usual.

```python
python main.py
```

There will be a prompt at the beginning of running the program. Then you can enter your diary number.

### Node.js version

For the Node.js version, I managed to get the request in the form of a `fetch` statement, including the necessary headers and parameters.

#### How to execute application

There are two ways for users to look up the information.<br>

1. Insert the diary number as a command line argument

```node.js
node index.js <xxxxx/xxx/xxxx>
```

2. If not, just run the program as usual.

```node.js
node index.js
```

There will be a prompt at the beginning of running the program. Then you can enter your diary number.

**NOTE**: Not all diary number work in this version of Node.js application.
