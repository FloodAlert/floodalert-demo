// Test für Warnlogik (erstellt von ChatGPT)

function testWarningLogic() {
    const level = 5;
    const result = level >= 4 ? "⚠️ Hochwasserwarnung!" : "🔔 Keine akute Gefahr.";
    console.log("Erwartet: ⚠️ Hochwasserwarnung!");
    console.log("Erhalten:", result);
}

testWarningLogic();
