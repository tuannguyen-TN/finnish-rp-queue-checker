import json
import subprocess
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


def check_queue(diary_number):
   # Run POST requests for queue number
    subprocess.run(["./check_rp_status1.sh"], shell=True, stdout=subprocess.DEVNULL)
    output = subprocess.run(f"./check_rp_status2.sh {diary_number}", shell=True, capture_output=True)

    # Convert JSON string into Python object
    response = json.loads(output.stdout.decode())

    # Extract queue number from the response object
    queue_num = response['response']['elements'][1]['payload']['json']['data']['counterValue']

    return queue_num


@app.route('/', methods=["GET", "POST", "OPTIONS"])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def home():
    if request.method == 'GET':
        return {'author': 'Tuan Nguyen', 'description': 'Finnish Residence Permit Queue API'}

    diary_number = json.loads(request.data)["diary_number"]
    queue_num = check_queue(diary_number)
    return {"queue_num": queue_num}


if __name__ == "__main__":
    app.run(host='0.0.0.0')