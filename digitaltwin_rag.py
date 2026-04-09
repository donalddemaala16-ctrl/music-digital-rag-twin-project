import json, random
from pathlib import Path

def load_data():
    data_path = Path(__file__).with_name("digitaltwin.json")
    with data_path.open() as f:
        return json.load(f)

def analyze(data):
    mood_count = {}
    artist_count = {}
    for s in data["listening_history"]:
        mood_count[s["mood"]] = mood_count.get(s["mood"],0)+1
        artist_count[s["artist"]] = artist_count.get(s["artist"],0)+1
    return mood_count, artist_count

def query_system(question):
    data = load_data()
    history = data["listening_history"]
    mood_count, artist_count = analyze(data)
    q = question.lower()

    if "total" in q or "how many" in q:
        return f"Total songs: {len(history)}"

    elif "top mood" in q:
        return max(mood_count, key=mood_count.get)

    elif "top artist" in q:
        return max(artist_count, key=artist_count.get)

    elif "list" in q and "artists" in q:
        return list(set([s["artist"] for s in history]))

    elif "list" in q and "songs" in q and "happy" in q:
        return [s["song"] for s in history if s["mood"]=="happy"]

    elif "percentage" in q and "mood" in q:
        result=""
        for m,c in mood_count.items():
            result += f"{m}: {c/len(history)*100:.1f}% | "
        return result

    elif "recommend" in q:
        pick = random.choice(history)
        return f"{pick['song']} by {pick['artist']}"

    elif "most listened artist" in q:
        return max(artist_count, key=artist_count.get)

    elif "least listened artist" in q:
        return min(artist_count, key=artist_count.get)

    elif "songs by" in q:
        artist = q.split("songs by")[-1].strip()
        return [s["song"] for s in history if s["artist"].lower()==artist.lower()]

    else:
        return "Try asking about moods, top artist, percentages, or recommendations."

if __name__=="__main__":
    while True:
        q = input("Ask: ")
        print(query_system(q))