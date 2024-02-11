// helpers/formatDate.js
const formatDate = (timestamp) => {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp);

  // Format the date as desired (e.g., YYYY-MM-DD)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  return formattedDate;
};

module.exports = formatDate;
