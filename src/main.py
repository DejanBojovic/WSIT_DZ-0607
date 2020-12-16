from flask import Flask, render_template,redirect, url_for, request, session
import mysql.connector

mydb = mysql.connector.connect(
	host="localhost",
	user= "root",
	password="",
	database="raspored"

)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'januar2020'

@app.route('/')
@app.route('/raspored')
def index():
	mc = mydb.cursor()
	mc.execute("SELECT * FROM raspored")
	res = mc.fetchall()

	teachers = list(set([teacher[3] for teacher in res]))
	classrooms = list(set([classroom[7] for classroom in res]))

	filtered = []

	for i in range(len(teachers)):
		if i >= len(classrooms):
			filtered.append([teachers[i], ""])
		else:
			filtered.append([teachers[i], classrooms[i]])

	return render_template('index.html', info=res, filtered=filtered)


if __name__ == '__main__':
	app.run(debug=True)
