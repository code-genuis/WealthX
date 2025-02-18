const DB_NAME = "WealthXDB";
const DB_VERSION = 1;
const STORE_NAME = "transactions";

// Database open/create function
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error opening database");
  });
}

// Save transaction to IndexedDB
async function saveTransaction(transaction) {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.objectStore(STORE_NAME);
  store.add(transaction);
}

// Get all offline transactions
async function getTransactions() {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const store = tx.objectStore(STORE_NAME);
  return store.getAll();
}

// Sync transactions when online
async function syncTransactions() {
  const transactions = await getTransactions();
  if (transactions.length === 0) return;

  fetch("/api/sync", {
    method: "POST",
    body: JSON.stringify(transactions),
    headers: { "Content-Type": "application/json" },
  }).then(() => {
    const db = openDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    console.log("✅ Transactions synced & cleared from IndexedDB");
  });
}

// Check when online and sync transactions
window.addEventListener("online", syncTransactions);
