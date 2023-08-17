import json
import subprocess
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/check": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def home():
    return {'author': 'Tuan Nguyen', 'description': 'Finnish Residence Permit Queue API'}


@app.route('/check/<string:diary_number_front>/<string:diary_number_mid>/<string:diary_number_back>', methods=["GET", "OPTIONS"])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def check_queue(diary_number_front, diary_number_mid, diary_number_back):
   # Run POST requests for queue number
    subprocess.run(["./check_rp_status1.sh"], shell=True, stdout=subprocess.DEVNULL)
    output = subprocess.run(f"./check_rp_status2.sh {diary_number_front}/{diary_number_mid}/{diary_number_back}", shell=True, capture_output=True)

    # Convert JSON string into Python object
    response = json.loads(output.stdout.decode())

    # Extract queue number from the response object
    queue_num = response['response']['elements'][1]['payload']['json']['data']['counterValue']

    return {"queue_num": queue_num}, 200


if __name__ == "__main__":
    app.run(host='0.0.0.0')