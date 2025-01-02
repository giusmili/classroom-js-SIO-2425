document.addEventListener("DOMContentLoaded", () => {

    const userLang = navigator.language || navigator.userLanguage; // Langue principale du client
    console.info(`Langue détectée : ${userLang}`);
    /*   document.getElementById("lang").textContent += ` Client détectée : ${userLang}`; */
});