# Agents

## 🎧 Music Data Agent
Responsible for:
- Reading and organizing `digitaltwin.json`
- Handling song, artist, and mood data
- Supporting listening history records used by the app

## 📊 Analytics Agent
Responsible for:
- Counting total songs
- Calculating top mood and top artist
- Computing mood percentages
- Summarizing listening patterns

## 🤖 RAG / Query Agent
Responsible for:
- Reading `digitaltwin.json`
- Handling natural language questions
- Returning recommendations and listening insights
- Formatting CLI responses clearly
- Supporting query behavior in `digitaltwin_rag.py`

## 🌐 Frontend Agent
Responsible for:
- Displaying music history and summary stats in `app.js`
- Showing total songs, top mood, and top artist
- Accepting user questions from the web interface
- Updating the UI based on JSON data

## 🎨 UI / Presentation Agent
Responsible for:
- Styling the web interface in `style.css`
- Keeping the interface clean, readable, and responsive
- Supporting a simple and friendly visual layout

## 📁 Documentation Agent
Responsible for:
- Maintaining project documentation such as `README.md`
- Keeping design and overview files consistent
- Explaining how the system works for users and team members

## 🧩 Team Workflow / Collaboration Rules
- Work in your own branch first
- Pull latest changes before starting
- Commit with ClickUp task IDs when requested
- Open pull requests to `main` for real project changes
- Keep secrets like `.env` files out of GitHub
