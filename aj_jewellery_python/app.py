from chatbot  import *
from flask import Flask, request,jsonify

app = Flask(__name__)



@app.route('/')
def home():
    return "Python Sever On"

@app.route('/chat',methods=['POST'])
def users():
    print(request.json)
    return jsonify({"Reply":RuleBot().chat(request.json['chat'])})


if __name__ == "__main__":
    # Production
    app.run(debug=True)



# print(R)

# /api call route  ->  latest prices
# /updateDB route
# /run ml also