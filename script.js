document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const formContainer = document.getElementById("formContainer");
    const thankYou = document.getElementById("thankYou");
    const submitButton = document.getElementById("submit");

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

        const data = { date, time, preferences };
        
        fetch("/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        formContainer.style.display = "none";
        thankYou.style.display = "block";
    });
});
