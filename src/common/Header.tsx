import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <header className="w-full py-2 bg-gray-700 text-center text-white text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StyledWrapper>
          <div className="flex flex-wrap justify-between items-center py-4 gap-4 md:gap-0">
            <button className="text-2xl text-white font-bold bg-clip-text">
              CodeGenius.Dev
            </button>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
              <a
                href="https://www.youtube.com/@CodeGeniusDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
              >
                <button title="YouTube | @CodeGenius.Dev" className="button shadow">
                  <YouTubeIcon />
                  YouTube
                  <ArrowIcon />
                </button>
              </a>

              <a
                href="https://www.youtube.com/@CodeGeniusDev"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden"
              >
                <button className="shadow flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full transition-all duration-300">
                  <YouTubeIconSmall />
                  <span className="text-sm font-medium">YouTube</span>
                </button>
              </a>

              <a
                href="https://github.com/code-genuis/WealthX"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button
                  title="GitHub | WealthX"
                  className="shadow w-full sm:w-auto flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white px-4 py-2 rounded-full sm:rounded-md text-sm font-medium transition-all duration-300 hover:ring-2 hover:ring-black hover:ring-offset-2 group relative overflow-hidden"
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>

                  <GitHubIcon />
                  <span className="hidden sm:inline">Star on GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                  <div className="hidden sm:flex items-center gap-1">
                    <StarIcon />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </StyledWrapper>
      </div>
    </header>
  );
};

const YouTubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
    <circle
      cx="24"
      cy="24"
      r="22"
      fill="white"
      stroke="white"
      strokeWidth="4"
    />
    <circle cx="24" cy="24" r="20" fill="#FF0000" />
    <path d="M19 16L32 24L19 32V16Z" fill="white" />
  </svg>
);

const YouTubeIconSmall = () => (
  <svg fill="none" height={24} viewBox="0 0 120 120" width={24}>
    <path
      d="M120 60c0 33.137-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0s60 26.863 60 60z"
      fill="#fff"
    />
    <path
      d="M25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14H39c-7.732 0-14-6.268-14-14z"
      fill="#cd201f"
    />
    <path d="M74 59.5L53 70.325V48.674L74 59.5z" fill="#fff" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577V19.85c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386C24 5.373 18.627 0 12 0z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ArrowIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      clipRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fillRule="evenodd"
    />
  </svg>
);

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    padding-block: 0.2rem;
    padding-inline: 1.25rem;
    background-color: #cd201f;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    gap: 10px;
    font-weight: bold;
    border: 2px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
  }

  .shadow {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    border-color: #fff;
    background-color: #b71c1c;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }

    60% {
      left: 100%;
    }

    to {
      left: 100%;
    }
  }
`;

export default Header;
