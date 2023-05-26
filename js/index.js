{
  function handleFileUpload(event) {
    const file = event.target.files[0];

    // Check if the file is a PNG or JPG image
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      const reader = new FileReader();

      // Read the contents of the file as a data URL
      reader.readAsDataURL(file);

      // When the file has finished loading
      reader.onloadend = function () {
        // Create a new temporary image element
        const tempImage = new Image();

        // When the temporary image has finished loading
        tempImage.onload = function () {
          // Create a canvas element
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Set the canvas dimensions to the desired size
          canvas.width = 50;
          canvas.height = 20;

          // Draw the resized image on the canvas
          ctx.drawImage(tempImage, 0, 0, 50, 20);

          // Create a new image element with the resized image
          const resizedImage = document.createElement("img");
          resizedImage.src = canvas.toDataURL(file.type);

          // Set the size of the resized image to the desired dimensions
          resizedImage.style.width = "50px";
          resizedImage.style.height = "20px";

          // Append the resized image element to the uploaded image container
          const uploadedImageContainer = document.getElementById(
            "uploadedImageContainer"
          );
          uploadedImageContainer.innerHTML = "";
          uploadedImageContainer.appendChild(resizedImage);
        };

        // Set the source of the temporary image to the data URL
        tempImage.src = reader.result;
      };
    } else {
      alert("Please select a PNG or JPG image file.");
    }
  }

  const logoButton = document.querySelector(".upload");
  logoButton.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();

    fileInput.addEventListener("change", handleFileUpload);
  });


  // Add event listeners to the color buttons
  const yellowButton = document.getElementById("yellowBtn");
  const pinkButton = document.getElementById("pinkBtn");
  const blueButton = document.getElementById("blueBtn");

  const logobutton = document.querySelector(".uploadBtn");    
  logoButton.style.backgroundColor = 'yellow';
  logoButton.style.borderRadius = '50px';

  yellowButton.addEventListener("click", () => {
    const umbrellaImage = document.getElementById("umbrellaImage");
    umbrellaImage.src = "./images/yellow.png";
    const logobutton = document.querySelector(".uploadBtn");    
    logoButton.style.backgroundColor = 'yellow'
    logoButton.style.borderRadius = '50px'
  });

  pinkButton.addEventListener("click", () => {
    const umbrellaImage = document.getElementById("umbrellaImage");
    umbrellaImage.src = "./images/pink.png";
    const logobutton = document.querySelector(".uploadBtn");    
    logoButton.style.backgroundColor = 'pink';
    logoButton.style.borderRadius = '50px'
  });

  blueButton.addEventListener("click", () => {
    const umbrellaImage = document.getElementById("umbrellaImage");
    umbrellaImage.src = "./images/blue.png";
    const logobutton = document.querySelector(".uploadBtn");    
    logoButton.style.backgroundColor = 'blue';
    logoButton.style.borderRadius = '50px'
  });
}
