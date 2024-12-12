from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message

app = Flask(__name__)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'clipcanine@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = 'mdxjnsbstlrtznmv'   # Replace with your email password
app.config['MAIL_DEFAULT_SENDER'] = 'clipcanine@gmail.com'  # Replace with your email

mail = Mail(app)

@app.route("/", methods=["GET", "POST"])
def home():
    success_message = None
    if request.method == 'POST':
        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

        # Create email message
        try:
            msg = Message(subject=f"Contact Form Submission: {subject}",
                          recipients=['clipcanine@gmail.com'],  # Replace with your destination email
                          body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}")
            mail.send(msg)
            success_message = "Your message has been sent successfully!"
        except Exception as e:
            print(f"Error: {e}")
            success_message = "There was an error sending your message. Please try again later."

    projects = [
        {
            "name": "Todo List App",
            "image": "1.jpg",
            "description": "This project is a todo list where you can enter new task that "
                           "you need to do and helps to stay organized!",
            "link": "link to project"
        },

        {
            "name": "Flashcard App",
            "image": "2.jpg",
            "description": "Need help learning a new language? This app will help you to study and remember key phases or words.",
            "link": "link to project"
        },

        {
            'name': 'Snake Game',
            'image': '3.jpg',
            'description': 'This is the classic snake game made in python. Keep track of your highscore and see how far you can make it!',
            'link': 'link-to-project'
        }
    ]

    return render_template("index.html", projects=projects, sucess_message=success_message)

if __name__ == "__main__":
    app.run(debug=True)