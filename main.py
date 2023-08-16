import json
import subprocess
import sys


def main():
    if len(sys.argv) > 1:
        diary_number = sys.argv[1]
    else:
        diary_number = input("Enter your diary number here: ")

    # Run POST requests for queue number
    subprocess.run(["./check_rp_status1.sh"], shell=True, stdout=subprocess.DEVNULL)
    output = subprocess.run(f"./check_rp_status2.sh {diary_number}", shell=True, capture_output=True)

    # Convert JSON string into Python object
    response = json.loads(output.stdout.decode())

    # Extract queue number from the response object
    queue_num = response['response']['elements'][1]['payload']['json']['data']['counterValue']

    # Display result
    print("The application status with this diary number is: " + queue_num)

if __name__ == "__main__":
    main()
