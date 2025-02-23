from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)

# Configure app settings using environment variables
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  # Your secret key for JWT
app.config["MONGO_URI"] = os.getenv("MONGO_URI")            # MongoDB connection string

# Initialize JWT Manager and PyMongo
jwt = JWTManager(app)
mongo = PyMongo(app)
users_collection = mongo.db.users  # Define the collection to store users

# Signup Endpoint: Register a new user
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Validate input
    if not username or not email or not password:
        return jsonify({"msg": "Missing username, email, or password"}), 400

    # Check if the user already exists
    if users_collection.find_one({"email": email}):
        return jsonify({"msg": "User already exists"}), 409

    # Hash the user's password before saving
    hashed_password = generate_password_hash(password)

    # Create a user document
    user = {
        "username": username,
        "email": email,
        "password": hashed_password
    }

    # Insert the new user into the database
    users_collection.insert_one(user)
    return jsonify({"msg": "User created successfully"}), 201

# Login Endpoint: Authenticate user and return JWT token
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Validate input
    if not email or not password:
        return jsonify({"msg": "Missing email or password"}), 400

    # Find the user in the database
    user = users_collection.find_one({"email": email})
    if not user or not check_password_hash(user['password'], password):
        return jsonify({"msg": "Invalid credentials"}), 401

    # Create an access token with the user's unique identifier
    access_token = create_access_token(identity=str(user['_id']))
    return jsonify(access_token=access_token), 200

# Protected Route: Accessible only with a valid JWT token
@app.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    return jsonify({"msg": "This is a protected route"}), 200

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
