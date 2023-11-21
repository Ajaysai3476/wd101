
/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */

function todaysEntries(entries) {
    // Get the current date in the format "YYYY-MM-DD"
    const currentDate = new Date().toISOString().split('T')[0];
  
    // Filter entries that have the current date
    const todayEntries = entries.filter(entry => entry.date.startsWith(currentDate));
  
    // Extract names from the filtered entries
    const names = todayEntries.map(entry => entry.name);
  
    // Join the names with commas and return the result
    return names.join(',');
  }
  
  
  const logEntries = [
    { name: "Harry", date: "2023-11-19T02:53:42+05:30" },
    { name: "Hermione", date: "2021-01-22T02:53:42+05:30" },
    { name: "Ron", date: "2023-11-19T03:53:42+05:30" }
  ];
  
  // Call the function and print the result
  console.log(todaysEntries(logEntries));


module.exports = todaysEntries;
