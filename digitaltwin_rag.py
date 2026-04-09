import json, random
from pathlib import Path

def format_response(answer):
    text = str(answer)
    lower = text.lower()

    if " by " in lower:
        return f"🎵 {text}"
    if "artist" in lower:
        return f"😎 {text}"
    return f"🤖 {text}"


def format_list_response(items, icon):
    if not items:
        return f"{icon} No results found."

    lines = [f"{icon} Found {len(items)} result(s):"]
    for i, item in enumerate(items, 1):
        lines.append(f"{i}. {item}")
    return "\n".join(lines)

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

if __name__ == "__main__":
    print("🤖 Music Digital Twin Assistant")
    print("Type 'exit' anytime to quit.")
    while True:
        q = input("🤖 Ask: ").strip()
        if q.lower() in {"exit", "quit"}:
            print("🤖 Goodbye!")
            break
        answer = query_system(q)

        if isinstance(answer, list):
            if "artist" in q.lower():
                print(format_list_response(sorted(answer), "😎"))
            else:
                print(format_list_response(answer, "🎵"))
            continue

        # Add artist/music icon when those topics appear; otherwise use AI icon.
        if "artist" in q.lower() or (isinstance(answer, str) and "artist" in answer.lower()):
            print(f"😎 {answer}")
        elif "song" in q.lower() or "music" in q.lower() or "recommend" in q.lower():
            print(f"🎵 {answer}")
        else:
            print(format_response(answer))