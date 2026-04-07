🎧 Music Listening Digital Twin

📌 Overview

The **Music Listening Digital Twin** is a simple system that creates a virtual model of a user's music listening behavior. It tracks songs, artists, and moods, then provides insights, statistics, and basic AI-like responses through a Python-based query system.

This project demonstrates how a **Digital Twin concept** can be applied to personal data, allowing users to explore patterns in their music habits.

---

🧠 What is a Digital Twin?

A **Digital Twin** is a virtual representation of a real-world system or behavior.

In this project:

* The **real-world system** = your music listening habits
* The **digital twin** = a JSON-based model + Python logic
* The **interaction** = asking questions and receiving insights

---

🚀 Features

🎵 Data Tracking

* Store songs, artists, and moods
* Structured data using `digitaltwin.json`
* Supports 100+ entries

📊 Analytics

* Count songs by mood and artist
* Identify:

  * Top mood
  * Top artist
  * Least listened artist
* Calculate mood distribution percentages

🤖 AI-like Query System (Python CLI)

* Ask questions such as:

  * "top mood"
  * "top artist"
  * "recommend song"
  * "songs by [artist]"
* Generates responses using rule-based logic (RAG-style simulation)

💻 Dual Interaction

* Python terminal interface (main feature)
* Optional frontend (HTML/CSS/JS) for visualization

---

🛠 Tech Stack

| Technology  | Purpose                            |
| ----------- | ---------------------------------- |
| Python      | Backend logic and query system     |
| JSON        | Data storage for listening history |
| HTML/CSS/JS | Frontend visualization (optional)  |

---

📁 Project Structure

```bash
Music Digital Twin/
│
├── digitaltwin.json        # Music data (songs, moods, artists)
├── digitaltwin_rag.py      # Main Python AI/query system
├── agents.md               # Rules for responses
├── README.md               # Project documentation
├── docs/                   # Additional documentation
└── .gitignore              # Ignored files
```

---

▶️ How to Run

✅ Prerequisites

* Python 3 installed
* VS Code or VS Code Insider

🟢 Steps

1. Open the project folder in VS Code
2. Open the terminal
3. Navigate to the folder (if needed):

   ```bash
   cd "Music Digital Twin"
   ```
4. Run the program:

   ```bash
   python digitaltwin_rag.py
   ```
5. Start interacting:

   ```
   Ask something: top mood
   ```

---

💡 Example Queries

```bash
top mood
top artist
recommend song
songs by Taylor Swift
least listened artist
```

---

📊 Example Output

```
Temperature Twin: Music Twin
--------------------------------
Top Mood: Happy
Top Artist: Artist 1
Recommendation: Song A
```

---

🧪 How It Works

1. Data is stored in `digitaltwin.json`
2. Python reads and analyzes the data
3. The system applies rules from `agents.md`
4. It returns insights based on user queries

---

⚠️ Limitations

* No real-time integration with Spotify or Apple Music
* Recommendations are rule-based (not true AI/ML)
* Single-user only
* Runs locally (no cloud backend)

---

📈 Future Improvements

* 🎵 Spotify API integration
* 📊 Interactive dashboard with charts
* 🤖 Advanced AI recommendations (ML/NLP)
* 🌐 Web-based chatbot interface
* ☁️ Cloud storage and multi-user support

---

📄 License

This project is for educational purposes and open for modification.
