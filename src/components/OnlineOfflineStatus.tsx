import { useState, useEffect } from "react";

const OnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return (
    <div
      className={`absolute left-3 top-24 md:fixed flex items-center rounded-lg font-bold gap-2 p-2 pr-4 text-gray-800 text-sm ${
        isOnline ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <div
        className={`w-3 h-3 rounded-full ${
          isOnline ? "bg-green-800 animate-pulse" : "bg-red-800 animate-pulse"
        }`}
      ></div>
      <span>{isOnline ? "Online" : "Offline"}</span>
    </div>
  );
};

export default OnlineOfflineStatus;
