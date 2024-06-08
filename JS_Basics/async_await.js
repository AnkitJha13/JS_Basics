
# async/await are features in JavaScript that make handling asynchronous operations more straightforward and readable. 



# Here’s a function that fetches data from an API and logs it to the console, first using Promises and then using async/await.



# Using Promises:

function abcd() {
  fetch(`https://randomuser.me/api/`)     // Fetching data from the API endpoint
    .then(function (raw) {
      return raw.json();                  // Converts the raw response into JSON format
    })
    .then(function (data) {
      console.log(data);                  // Logs the JSON data to the console
    })
    .catch(function (error) {            
      console.error('Error:', error);     // Handles any errors that occur during the fetch or JSON conversion
    });
}

abcd();   // Calls the function to execute the fetch and log the data





# Using async/await:

async function abcd() {
  try {
    let raw = await fetch(`https://randomuser.me/api/`);  // Await the fetch call
    let ans = await raw.json();                          // Await the conversion to JSON
    console.log(ans);
  } catch (error) {
    console.error('Error:', error);                      // Handle errors
  }
}

abcd();  // Calls the function to execute the fetch and log the data

