// Beispielhafte Logik für Hochwasserwarnung (ERSTELLT VON CHATGPT)
function sendFloodWarning(level) {
    if (level >= 4) {
        console.log("⚠️ Hochwasserwarnung! Evakuierung empfohlen.");
    } else {
        console.log("🔔 Wasserstand erhöht, aber unterhalb der Warnschwelle.");
    }
}

sendFloodWarning(5);
