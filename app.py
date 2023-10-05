from flask import Flask, render_template, send_from_directory
import sqlite3

from jinja2 import TemplateNotFound
import os

app = Flask(__name__)
DATABASE = '/database/database.db'
current_directory = os.path.dirname(os.path.abspath(__file__))
database_path = current_directory + "/database/lucadambrosio.db"
images_path = current_directory + "/images/"


def get_db_connection():
    conn = sqlite3.connect(database_path)
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/")
def main():
    conn = get_db_connection()
    attachments = conn.execute('SELECT * FROM attachment WHERE name = "avatar-image"').fetchall()
    conn.close()
    return render_template('index.html', filename=False, attachments=attachments)


@app.route('/download', methods=['GET'])
def download_attachment():
    conn = get_db_connection()
    cv_attachment = conn.execute('SELECT * FROM attachment WHERE name = "cv"').fetchone()
    conn.close()

    if cv_attachment:
        file_path = os.path.join('static/documents/', cv_attachment['content'])

        response = send_from_directory(directory=os.path.dirname(file_path),
                                       path=cv_attachment['content'],
                                       as_attachment=True)
        response.headers["Content-Disposition"] = f"attachment; filename={cv_attachment['content']}"
        return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def render_page(path, filename=False):
    conn = get_db_connection()
    attachment_row = conn.execute('SELECT * FROM attachment WHERE name = "logo-rapsodoo"').fetchall()
    lampeo_images = conn.execute('SELECT * FROM attachment WHERE name = "lampeo"').fetchall()
    conn.close()
    try:
        if path == "work":
            return render_template(path + '.html', filename=False, attachment_row=attachment_row, images=lampeo_images)
        return render_template(path + '.html', filename=False, attachment_row=attachment_row)
    except TemplateNotFound:
        return render_template('404_not_found.html')


if __name__ == '__main__':
    app.run(debug=True)
