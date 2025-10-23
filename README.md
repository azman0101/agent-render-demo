# Real-time Conversational Agent - Full Stack

This project is a full-stack application for a real-time conversational agent, consisting of a Python FastAPI backend and a Next.js frontend. It's designed for easy deployment on Render.

## Project Structure

-   `/`: The root directory contains the Python FastAPI server.
-   `/client`: This directory contains the Next.js client application.

## Getting Started

### Prerequisites

-   Python 3.11 or later
-   Node.js and npm
-   A Google API key for the Gemini API. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Local Development

1.  **Backend Setup:**
    -   Navigate to the root directory.
    -   Create and activate a virtual environment.
    -   Install the Python dependencies: `pip install -r requirements.txt`
    -   Create a `.env` file and add your `GOOGLE_API_KEY`.
    -   Start the server: `uvicorn main:app --reload`

2.  **Frontend Setup:**
    -   Navigate to the `/client` directory.
    -   Install the Node.js dependencies: `npm install`
    -   Start the client: `npm run dev`

The client will be available at `http://localhost:3000` and will connect to the backend server at `http://127.0.0.1:8000`.

## Deployment to Render

This project is configured for one-click deployment to Render. Simply fork this repository and create a new "Blueprint" service in Render, pointing to your forked repository. Render will automatically detect the `render.yaml` file and deploy both the backend and frontend services.
