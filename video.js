// JavaScript code here
document.getElementById("join-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const meetingId = e.target.elements[0].value;
    // Add logic to join the meeting with the given meetingId
    console.log("Joining meeting with ID:", meetingId);
  });
  
  document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const meetingTitle = e.target.elements[0].value;
    const date = e.target.elements[1].value;
    const time = e.target.elements[2].value;
    const duration = e.target.elements[3].value;
    // Add logic to create a meeting with the provided details
    console.log("Creating meeting:", meetingTitle, date, time, duration);
  });
  