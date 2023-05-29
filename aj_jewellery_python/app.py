from chatbot  import *
from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
# mysql = MySQL(app)


@app.route('/chat',methods=['POST'])
def users():
    return "make function"
if __name__ == '__main__':
    app.run(debug=True)




print(RuleBot().chat("jewellery"))

# /api call route  ->  latest prices
# /updateDB route
# /run ml also