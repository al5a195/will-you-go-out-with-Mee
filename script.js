document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const formContainer = document.getElementById("formContainer");
    const thankYou = document.getElementById("thankYou");
    const submitButton = document.getElementById("submit");
    const responseContainer = document.getElementById("responseContainer");
    const saveButton = document.getElementById("saveButton");

    noButton.addEventListener("mouseover", () => {
        let newX = Math.random() * (window.innerWidth - 100);
        let newY = Math.random() * (window.innerHeight - 50);
        noButton.style.transform = `translate(${newX}px, ${newY}px)`;
        noButton.style.fontSize = "smaller";
    });

    yesButton.addEventListener("click", () => {
        formContainer.style.display = "block";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });

    submitButton.addEventListener("click", () => {
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const preferences = document.getElementById("preferences").value;

        if (!date || !time || !preferences) {
            alert("Please fill in all the details!");
            return;
        }

        formContainer.style.display = "none";
        thankYou.style.display = "block";

        // Show the answers on the final page
        responseContainer.innerHTML = `
            <h3>Your Response:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Preferences:</strong> ${preferences}</p>
        `;

        saveButton.style.display = "block";
    });

    saveButton.addEventListener("click", () => {
        const textToCopy = responseContainer.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Response copied! You can now save it.");
        });
    });
});
