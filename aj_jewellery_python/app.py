from chatbot  import *
from flask import Flask, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# mysql = MySQL(app)



@app.route('/')
def home():
    return "Python Sever On"

@app.route('/chat',methods=['POST'])
def users():
    print(request.json)
    return RuleBot().chat(request.json['chat'])


if __name__ == '__main__':
    app.run(debug=True)



# print(R)

# /api call route  ->  latest prices
# /updateDB route
# /run ml also