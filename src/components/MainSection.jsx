import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";

export default function MainSection() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  const emojiRef = useRef(null);

  // 👇 Close emoji picker if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(e.target) &&
        !e.target.classList.contains("emoji-toggle")
      ) {
        setShowEmoji(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col justify-between items-center text-center w-full h-full bg-base-100 text-base-content px-4 py-6 relative">
      {/* 🧠 Main Message */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src="/avatar2.png"
          alt="Tutor"
          className="w-28 h-28 rounded-full object-cover mb-6"
        />
        <p className="text-lg font-medium max-w-md">
          👋 Hello there! Ready to learn something new? <br />
          Start the conversation by saying hi or asking a question.
        </p>
        <button className="mt-6 btn btn-primary btn-sm rounded-lg">Say Hi 👋</button>
      </div>

      {/* 💬 Chat Input Bar */}
      <div className="w-full max-w-2xl bg-base-200 rounded-full border border-base-300 flex items-center gap-2 py-2 px-4 relative shadow-sm">
        {/* Emoji Button */}
        <i
          className="ri-emotion-line text-xl cursor-pointer emoji-toggle text-base-content/70 hover:text-primary"
          onClick={() => setShowEmoji((prev) => !prev)}
        />

        {/* File Upload */}
        <i
          className="ri-attachment-2 text-xl cursor-pointer text-base-content/70 hover:text-primary"
          onClick={handleFileClick}
        />
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => console.log("Selected File:", e.target.files[0])}
        />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type a message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-sm bg-transparent border-none flex-1 focus:outline-none text-sm text-base-content"
        />

        {/* Mic Icon */}
        <i className="ri-mic-line text-xl cursor-pointer text-base-content/70 hover:text-primary" />

        {/* Send Button */}
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center hover:scale-105 transition-transform">
          <i className="ri-send-plane-fill text-white text-lg" />
        </button>

        {/* Emoji Picker */}
        {showEmoji && (
          <div
            ref={emojiRef}
            className="absolute bottom-14 left-0 w-full max-w-2xl z-[10] h-[60vh]"
          >
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
}
