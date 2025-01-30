const webhookURL = "https://discord.com/api/webhooks/1334341881924026389/gX7vyH7Ac6rvcZlx1uavuGo2OBxQQJ8diAuvEM-PAmH2T0jJYAGxHdZvXgeOxaO93G06";

const payload = {
    content: "Hi" ,
    username: "Username",
    "avatar_url":null,
    "tts":null,
    "embeds":[],
};


function sendWebhookMessage() {
    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
        .then(response => {
            if (response.ok) {
                alert("Mensaje enviado correctamente.");
            } else {
                alert("Error al enviar mensaje.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error en la solicitud.");
        });
}

sendWebhookMessage();

const respuesta = await fetch('https://api64.ipify.org?format=json');
const datos = await respuesta.json();
console.log('addr: ', datos.ip);