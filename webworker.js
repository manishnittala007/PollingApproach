async function dataRefresher() {
  // Perform the asynchronous API call
  try {
    const responseData = await performAPICall();
    self.postMessage(responseData);
    setTimeout("dataRefresher()",30000);
  } catch (error) {
    console.log(error);
  }

}
dataRefresher(); 
console.log("ww13");
 
function performAPICall() {
  // Create a new Promise to encapsulate the asynchronous API call
  return new Promise((resolve, reject) => {
    // Perform the API call using fetch or any other suitable method
    fetch('https://stagingstudentpython.edwisely.com/miscellaneous/getData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          // Resolve the Promise with the response data
          resolve(response.json());
        } else {
          // Reject the Promise with an error message
          reject('API call failed with status: ' + response.status);
        }
      })
      .catch(error => {
        // Reject the Promise with any error that occurs during the API call
        reject(error);
      });
  });
}

// Call performAPICall() and handle the response
performAPICall()
  .then(data => {
    console.log('Data received from API:', data);
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
  });
