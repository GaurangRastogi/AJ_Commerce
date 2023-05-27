from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)
mysql = MySQL(app)


@app.route('/',methods=['GET'])
def users():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT user, host FROM mysql.user''')
    rv = cur.fetchall()
    cur.close()
    return str(rv)

if __name__ == '__main__':
    app.run(debug=True)




# /api call route  ->  latest prices
# /updateDB route
# /run ml also