const crypto = require("crypto");
const { DateTime } = require("luxon");

// Function to generate a unique ID with Korean timezone date
export default function generateUniqueId() {
  // Generate a random component (e.g., using a random byte array)
  const randomBytes = crypto.randomBytes(16);

  // Get the current date in the Korean timezone
  const nowInKorea = DateTime.now().setZone("Asia/Seoul");

  // Format the date as needed (e.g., YYYYMMDD)
  const formattedDate = nowInKorea.toFormat("yyyyMMdd").slice(2);

  // Combine the date and the hash of the random component
  const uniqueId = formattedDate + randomBytes.toString("hex");

  return uniqueId;
}

// Example usage
const uniqueItemId = generateUniqueId();
console.log(uniqueItemId);
