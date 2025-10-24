from google.adk.agents.llm_agent import Agent

def greet(name: str) -> str:
    """A simple tool to greet the user."""
    return f"Hello, {name}!"

root_agent = Agent(
    model='models/gemini-2.5-flash-native-audio-preview-09-2025',
    name='root_agent',
    description="A simple agent that can greet the user.",
    instruction="You are a friendly assistant. Use the 'greet' tool to greet the user.",
    tools=[greet],
)
