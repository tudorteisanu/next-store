from flask import Flask, request
import hashlib
import os
from random import random
from werkzeug.utils import secure_filename
from os import environ
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)
