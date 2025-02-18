import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseSummary } from "./components/ExpenseSummary";
import { ExpenseChart } from "./components/ExpenseChart";
import { Wallet } from "lucide-react";
import FiverrAd from "./FiverrAd";

const App: React.FC = () => {
  return (
    <>
      <ExpenseProvider>
        <div className="min-h-screen bg-gray-100">
          <div className="pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex mt-12 items-center justify-center mb-8">
                <Wallet className="h-10 w-10 text-blue-600" />
                <h1 className="ml-3 text-3xl font-bold text-gray-900">
                  Finance Tracker
                </h1>
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

                  <div className="my-8 bg-white rounded-lg shadow px-6 pb-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4 pt-6 ">
                      Ad
                    </h2>
                    <div className="flex justify-center">
                      <FiverrAd />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExpenseProvider>
    </>
  );
};

export default App;
