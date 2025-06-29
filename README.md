🎮 MovieMagic - A Movie Matchmaking System

MovieMagic is a cross-platform movie recommendation app built using React Native. It uses a custom machine learning model and APIs to provide personalized movie suggestions, detailed film data, and an interactive chat experience. Designed for both Android and iOS, it aims to revolutionize how users discover and explore movies.

📱 Features

🔐 Firebase Authentication (Signup/Login)

🏠 Home screen with Trending, Upcoming & Top-Rated Movies (via TMDB)

🔍 Search bar for quick movie lookup

🤖 Chatbot powered by OpenAI GPT API for movie-related queries

🎥 Detailed Movie Pages with:

Synopsis

Genre, Runtime, Release Year

Cast Info from TMDB API

Similar movie suggestions (via ML model)

👨‍🎤 Actor Detail Screen

💡 Real-time Recommendations using a Content-Based Filtering ML model

🧠 Machine Learning Model

Built with scikit-learn

Uses a Bag-of-Words (BoW) approach

Calculates Cosine Similarity between movie vectors

Trained on a dataset of 5000+ movies

Deployed using Flask API

⚙️ Tech Stack

Layer

Technology

Frontend

React Native

Backend API

Flask

Auth

Firebase

ML Libraries

scikit-learn, Pandas, NumPy

Movie Data

TMDB API

Chatbot

OpenAI GPT API

IDEs

VS Code, Android Studio, Xcode

🏗️ Architecture

graph TD
  A[React Native App] -->|User Auth| B[Firebase]
  A -->|API Calls| C[Flask Backend]
  C -->|Serve Recommendations| D[ML Model]
  A -->|Movie Info| E[TMDB API]
  A -->|Chat Query| F[OpenAI GPT API]

📂 Folder Structure (Client)

MovieMagic/
│
├── assets/                # Images & Icons
├── components/            # Reusable UI components
├── navigation/            # Navigation stack
├── screens/               # Login, Signup, Home, Detail screens
├── api/                   # TMDB fetch methods
├── config/                # Firebase config
├── theme/                 # App theme & styling
├── App.js                 # Entry Point
└── ...

🚀 Getting Started

Prerequisites

Node.js

Expo CLI / React Native CLI

Python 3.x

Android Studio / Xcode (for testing)

Firebase project

TMDB API key

OpenAI API key

Setup Instructions

1. Clone the Repo

git clone https://github.com/your-username/moviemagic.git
cd moviemagic

2. Setup Firebase

Create a Firebase project

Enable Authentication (Email/Password)

Add your Firebase config to /config/firebase.js

3. Setup TMDB API

Sign up at TMDB

Generate an API Key

Add it to your environment or directly in api/moviedb.js

4. Setup Flask Backend (ML Model)

cd backend
pip install -r requirements.txt
python app.py  # Runs the Flask API server

5. Start the React Native App

npm install
npm start

Use a physical device/emulator with Expo Go or Android/iOS simulator.

🧪 Testing & Deployment

✅ Tested on Android 7+ and iOS 11+

✅ Firebase ensures secure auth

✅ OpenAI GPT integrated for smart queries

✅ Flask serves accurate movie recommendations

🎯 Future Scope

Add collaborative filtering to improve diversity

Use vector DB for faster ML responses

Integrate streaming service availability (e.g., Netflix, Prime)

Add ratings & watchlist features

📚 Academic Info

📕 Title: MovieMagic – A Movie Matchmaking System

🏫 College: Shri Ramswaroop Memorial College of Engineering and Management, Lucknow

👨‍🎓 By: Siddhartha Mishra & Sujal Varshney

👩‍🏫 Guide: Dr. Vibha Srivastava

🗓️ Year: 2024

📜 License

This project is for educational and academic purposes only.

🔗 Links

📄 Research Paper (IRJMETS)

🧠 OpenAI GPT

🎥 TMDB API

