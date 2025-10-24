from google.adk.agents.llm_agent import Agent

def greet(name: str) -> str:
    """A simple tool to greet the user."""
    return f"Hello, {name}!"

root_agent = Agent(
    model='gemini-1.5-flash',
    name='root_agent',
    description="A simple agent that can greet the user.",
    instruction="You are a friendly assistant. Use the 'greet' tool to greet the user.",
    tools=[greet],
)
