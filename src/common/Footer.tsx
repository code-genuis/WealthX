import React from "react";

const emojis = ["❤️", "🔥", "🚀", "💡", "💻", "🎨", "🌟", "✨", "🎯", "🛠️"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full py-6 bg-gray-800 text-center text-white text-lg">
        <p>
          Made with {randomEmoji} by
          <a
            href="https://portfolio.triplealpha.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline ml-1"
          >
            CodeGenius.Dev
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
