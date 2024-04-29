$(document).ready(function () {
  if (typeof (Worker) !== "undefined") {
      if(typeof(w) == "undefined") {
        w = new Worker("webworker.js");
      }
    w.onmessage = function (event) {
      console.log('Data received:', event.data);
      try {
        const data = event.data.data; // Access the 'data' property
        if (data && data.length > 0) {
          data.forEach((item, index) => {
            document.getElementById("result" + (index + 1)).innerHTML = item.name;
            document.getElementById("idname" + (index + 1)).innerHTML = item.id;
            document.getElementById("timeLimit" + (index + 1)).innerHTML = item.description;
          });
        } else {
          console.error('No data received or empty data array');
        }
      } catch (error) {
        console.error('Error processing data:', error);
      }
    };
  }
  else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
  }
});
