"use client";

import React, { useState, useCallback, KeyboardEvent } from "react";

type ChatBoxProps = {
  sendTextMessage: (text: string) => void;
  latestTextMessage?: string | null;
};

export const ChatBox: React.FC<ChatBoxProps> = ({ sendTextMessage, latestTextMessage }) => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const send = useCallback(async () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setIsSending(true);
    try {
      sendTextMessage(trimmed);
      setText("");
    } finally {
      setIsSending(false);
    }
  }, [text, sendTextMessage]);

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter to send, Shift+Enter for newline
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="w-full">
      <div className="mb-2 text-sm text-gray-400">Chat (text only) — press Enter to send, Shift+Enter for newline</div>
      <div className="flex gap-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          rows={2}
          className="flex-1 resize-none bg-gray-800 text-white rounded px-3 py-2 border border-gray-700 focus:outline-none focus:border-blue-500"
          placeholder="Type a message to the agent"
          aria-label="Message"
        />
        <button
          onClick={() => send()}
          disabled={isSending}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white disabled:opacity-50"
        >
          Send
        </button>
      </div>

      {latestTextMessage ? (
        <div className="mt-2 text-sm text-gray-200 bg-gray-900 p-2 rounded">
          <strong className="text-xs text-gray-400">Agent (live preview):</strong>
          <div className="mt-1">{latestTextMessage}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ChatBox;
