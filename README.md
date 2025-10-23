# Real-time Conversational Agent Server

This project is a FastAPI server for a real-time conversational agent using the Google Agent Development Kit (ADK). It's designed for easy deployment on Render.

## Getting Started

### Prerequisites

- Python 3.11 or later
- A Google API key for the Gemini API. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2.  **Create and activate a virtual environment:**

    ```bash
    python -m venv .venv
    source .venv/bin/activate
    ```

3.  **Install the dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

### Environment Setup

Create a `.env` file in the root of the project and add your Google API key:

```
GOOGLE_API_KEY="YOUR_API_KEY"
```

## Running the Server

Start the FastAPI application using Uvicorn:

```bash
uvicorn main:app --reload
```

The server will be running at `http://127.0.0.1:8000`.

## WebSocket Client Example

Here is a simple Python script to connect to the WebSocket endpoint and interact with the agent. You will need to install the `websockets` library:

```bash
pip install websockets
```

Save the following code as `client.py` and run it with `python client.py`:

```python
import asyncio
import json
import websockets

async def main():
    uri = "ws://127.0.0.1:8000/ws/12345"  # Use any user ID
    async with websockets.connect(uri) as websocket:
        print("Connected to the server.")

        # Send a greeting
        message = {
            "mime_type": "text/plain",
            "data": "Hello, my name is Alex."
        }
        await websocket.send(json.dumps(message))
        print(f"> Sent: {message['data']}")

        # Listen for responses
        try:
            while True:
                response = await websocket.recv()
                print(f"< Received: {response}")
        except websockets.exceptions.ConnectionClosed:
            print("Connection closed.")

if __name__ == "__main__":
    asyncio.run(main())
```
