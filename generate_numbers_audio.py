import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Only regenerate broken files
numbers = {
    4: "Number Four",
    6: "Number Six",
    43: "Number Forty Three",
    50: "Number Fifty",
    76: "Number Seventy Six",
}

os.makedirs("public/audio/numbers", exist_ok=True)

for num, text in numbers.items():
    print(f"Generating {num}...")

    response = client.audio.speech.create(
        model="gpt-4o-mini-tts",
        voice="alloy",
        input=text,
    )

    output_file = f"public/audio/numbers/{num}.mp3"

    response.stream_to_file(output_file)

    print(f"✅ Saved {output_file}")

print("\n🎉 All broken audio files regenerated successfully!")