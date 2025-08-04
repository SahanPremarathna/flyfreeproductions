// // document.querySelector("form").addEventListener("submit", function() {
// //     setTimeout(() => {
// //         if (submitted) {
// //             alert("Thank you for sharing your sighting! 🌿");
// //              this.reset();
// //         }
// //     }, 500);
// // });


// document.getElementById("sightingForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("entry.1416991481", document.getElementById("animalType").value); // Type
//     formData.append("entry.605663728", document.getElementById("animalName").value); // Name
//     formData.append("entry.1602260314", document.getElementById("encounter").value); // Encounter
//     formData.append("entry.1441922216", document.getElementById("behaviors").value); // Behaviors
//     formData.append("entry.154216312", document.getElementById("location").value); // Location
//     formData.append("entry.1491425182", document.getElementById("phone").value); // Phone
//     formData.append("entry.1270128200", document.getElementById("additional").value); // Additional Info

//     fetch("https://docs.google.com/forms/d/e/1FAIpQLSdYADW9QE-SAYSnyrbs64sYGvcdXWmzOTY5e0p7ya7GjRZ8JA/formResponse", {
//         method: "POST",
//         body: formData,
//         mode: "no-cors"
//     }).then(() => {
//         alert("Thank you! Your sighting has been submitted.");
//         this.reset();
//     }).catch(() => {
//         alert("Error submitting. Please try again.");
//     });
// });