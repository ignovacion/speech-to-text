let recognition;
let isRecording = false;

// Verificar si el navegador soporta reconocimiento de voz
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "es-ES"; 
    recognition.continuous = false; 
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        document.getElementById("txtTranscription").value = event.results[0][0].transcript;
    };

    recognition.onerror = (event) => {
        console.error("Error en la transcripción:", event.error);
    };

} else {
    alert("Tu navegador no soporta reconocimiento de voz.");
}

// Evento para iniciar/detener la grabación
document.getElementById("btnRecord").addEventListener("click", () => {
    if (!isRecording) {
        recognition.start();
        document.getElementById("btnRecord").textContent = "Grabando... (Click para detener)";
        isRecording = true;
    } else {
        recognition.stop();
        document.getElementById("btnRecord").textContent = "Grabar Voz";
        isRecording = false;
    }
});

// Simulación de guardar en GitHub (No se puede escribir en GitHub directamente)
document.getElementById("btnSubmit").addEventListener("click", () => {
    const text = document.getElementById("txtTranscription").value;
    if (text.trim() !== "") {
        console.log("Texto guardado:", text);
        alert("Texto guardado en consola. Para guardarlo en una base de datos, usa Firebase o una API.");
    } else {
        alert("No hay texto para guardar.");
    }
});
