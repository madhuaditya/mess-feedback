let feedbackData = [];

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const meal = document.getElementById("meal").value;
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value;

  feedbackData.push({ Name: name, Date: date, Meal: meal, Rating: rating, Comments: comments });

  alert("Thank you for your feedback!");

  this.reset();
});

document.getElementById("downloadExcel").addEventListener("click", function () {
  if (feedbackData.length === 0) {
    alert("No feedback to export.");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(feedbackData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Feedback");

  XLSX.writeFile(workbook, "mess_feedback.xlsx");
});
