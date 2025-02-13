import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseSummary } from "./components/ExpenseSummary";
import { ExpenseChart } from "./components/ExpenseChart";
import { styled } from "styled-components";
import { Wallet } from "lucide-react";

function App() {
  return (
    <>
      <ExpenseProvider>
        <div className="min-h-screen bg-gray-100">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex mt-12 items-center justify-center mb-8">
                <Wallet className="h-10 w-10 text-blue-600" />
                <h1 className="ml-3 text-3xl font-bold text-gray-900">
                  Finance Tracker
                </h1>
              </div>

              <div className="fixed top-4 right-4 z-50 flex flex-row sm:flex-row gap-3 sm:gap-4">
                <StyledWrapper className="hidden sm:block">
                  <a
                    href="https://www.youtube.com/@CodeGeniusDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="youtube-btn">
                      <span className="icon">
                        <svg
                          fill="none"
                          height={33}
                          viewBox="0 0 120 120"
                          width={33}
                          xmlns="http://www.w3.org/2000/svg"
                          className="youtube-icon"
                        >
                          <path
                            d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z"
                            fill="#cd201f"
                          />
                          <path
                            d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z"
                            fill="#fff"
                          />
                          <path
                            d="m74 59.5-21 10.8253v-21.6506z"
                            fill="#cd201f"
                          />
                        </svg>
                      </span>
                      <span className="text1">Follow me</span>
                      <span className="text2">CodeGenius.Dev</span>
                    </button>
                  </a>
                </StyledWrapper>

                {/* Mobile YouTube Button */}
                <a
                  href="https://www.youtube.com/@CodeGeniusDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden"
                >
                  <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-300">
                    <svg
                      fill="none"
                      height={24}
                      viewBox="0 0 120 120"
                      width={24}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m120 60c0 33.1371-26.8629 60-60 60s-60-26.8629-60-60 26.8629-60 60-60 60 26.8629 60 60z"
                        fill="#fff"
                      />
                      <path
                        d="m25 49c0-7.732 6.268-14 14-14h42c7.732 0 14 6.268 14 14v22c0 7.732-6.268 14-14 14h-42c-7.732 0-14-6.268-14-14z"
                        fill="#cd201f"
                      />
                      <path
                        d="m74 59.5-21 10.8253v-21.6506z"
                        fill="#fff"
                      />
                    </svg>
                    <span className="text-sm font-medium">YouTube</span>
                  </button>
                </a>

                <a
                  href="https://github.com/code-genuis/WealthX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black hover:bg-black/90 text-white px-4 py-2 rounded-full sm:rounded-md text-sm font-medium transition-all duration-300 hover:ring-2 hover:ring-black hover:ring-offset-2 group relative overflow-hidden">
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="hidden sm:inline">Star on GitHub</span>
                    <span className="sm:hidden">GitHub</span>
                    <div className="hidden sm:flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-gray-400 transition-all duration-300 group-hover:text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>

              <div className="mb-8">
                <ExpenseSummary />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Add Transaction
                    </h2>
                    <ExpenseForm />
                  </div>
                  <div className="bg-white rounded-lg shadow p-6 mt-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Distribution
                    </h2>
                    <ExpenseChart />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">
                      Transaction History
                    </h2>
                    <ExpenseList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpenseProvider>
    </>
  );
}

const StyledWrapper = styled.div`
  .youtube-btn {
    position: relative;
    width: 130px;
    height: 34px;
    border-radius: 30px;
    background-color: white;
    border: 1px #cd201f solid;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .text1 {
    font-size: 15px;
    font-weight: 600;
    margin-left: 22%;
  }

  .text2 {
    position: absolute;
    top: 25%;
    left: -150px;
    font-weight: 700;
    font-size: 11px;
    color: white;
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s;
  }

  .icon::before {
    position: absolute;
    left: -100px;
    top: 0;
    z-index: -1;
    content: "";
    width: 130px;
    height: 35px;
    border-radius: 30px;
    background-color: #cd201f;
  }

  .youtube-btn:hover .icon {
    transform: translateX(96px);
    transition: transform 0.5s;
  }

  .youtube-btn:hover .text2 {
    transform: translateX(160px);
    transition: transform 0.6s;
  }

  .youtube-btn:active {
    transform: scale(1.03);
  }

  @media (max-width: 640px) {
    .youtube-btn {
      width: auto;
      padding: 0 1rem;
    }
  }
`;

export default App;