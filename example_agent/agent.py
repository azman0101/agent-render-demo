import os

# Import the main Agent class
from google.adk.agents import Agent

# Import config and safety types from the original example
from google.genai.types import (
    GenerateContentConfig,
    HarmBlockThreshold,
    HarmCategory,
    SafetySetting,
)

# Import the instruction from prompts.py as requested
from .prompts import AGENT_INSTRUCTION

# --- Tool Definition (from your first snippet) ---
def greet(name: str) -> str:
    """A simple tool to greet the user."""
    return f"Hello, {name}!"

# --- Configuration (from the original example) ---
genai_config = GenerateContentConfig(
    temperature=0.5
)

# --- Combined Agent Definition ---
root_agent = Agent(
   name="example_agent",
   model=os.environ.get("AGENT_MODEL", "gemini-1.5-pro-latest"), # Model from the original example
   description="A helpful AI assistant that can greet users.", # Combined description
   instruction=AGENT_INSTRUCTION, # Instruction from prompts.py
)
