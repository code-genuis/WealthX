import { useState, useEffect } from "react";

const OnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 p-3 rounded-lg text-black ${
        isOnline ? "bg-green-300" : "bg-red-400"
      }`}
    >
      {isOnline ? "🟢 Online" : "🔴 Offline"}
    </div>
  );
};

export default OnlineOfflineStatus;
