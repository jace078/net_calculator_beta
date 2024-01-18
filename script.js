function toggleInputType() {
    const loonType = document.getElementById("loonType").value;
    const maandelijksInput = document.getElementById("maandelijksInput");
    const uurInput = document.getElementById("uurInput");

    if (loonType === "maandelijks") {
        maandelijksInput.style.display = "block";
        uurInput.style.display = "none";
    } else {
        maandelijksInput.style.display = "none";
        uurInput.style.display = "block";
    }
}

function berekenNetto() {
    const loonType = document.getElementById("loonType").value;
    let brutoLoon;

    if (loonType === "maandelijks") {
        brutoLoon = parseFloat(document.getElementById("brutoLoonMaandelijks").value);
    } else {
        const uurloon = parseFloat(document.getElementById("uurloon").value);
        const uren = parseFloat(document.getElementById("uren").value);
        brutoLoon = uurloon * uren * 4; // Stel hier het aantal werkweken per maand in
    }

    // Definieer belastingtarieven voor verschillende landen
    const belastingtarieven = {
               // Europese landen
               "al": 0.8,  // Albanië
               "ad": 0.85, // Andorra
               "be": 0.7,  // België
               "ba": 0.75, // Bosnië en Herzegovina
               "bg": 0.65, // Bulgarije
               "cy": 0.75, // Cyprus
               "dk": 0.7,  // Denemarken
               "de": 0.7,  // Duitsland
               "ee": 0.75, // Estland
               "fi": 0.8,  // Finland
               "fr": 0.7,  // Frankrijk
               "gr": 0.75, // Griekenland
               "hu": 0.72, // Hongarije
               "ie": 0.75, // Ierland
               "is": 0.8,  // IJsland
               "it": 0.68, // Italië
               "xk": 0.75, // Kosovo
               "hr": 0.72, // Kroatië
               "lv": 0.75, // Letland
               "li": 0.68, // Liechtenstein
               "lt": 0.75, // Litouwen
               "lu": 0.68, // Luxemburg
               "mt": 0.75, // Malta
               "md": 0.78, // Moldavië
               "mc": 0.68, // Monaco
               "me": 0.75, // Montenegro
               "nl": 0.7,  // Nederland
               "mk": 0.75, // Noord-Macedonië
               "no": 0.7,  // Noorwegen
               "at": 0.7,  // Oostenrijk
               "pl": 0.72, // Polen
               "pt": 0.75, // Portugal
               "ro": 0.72, // Roemenië
               "ru": 0.8,  // Rusland
               "sm": 0.68, // San Marino
               "rs": 0.75, // Servië
               "si": 0.72, // Slovenië
               "sk": 0.72, // Slowakije
               "es": 0.7,  // Spanje
               "cz": 0.72, // Tsjechië
               "tr": 0.75, // Turkije
               "va": 0.68, // Vaticaanstad
               "gb": 0.7,  // Verenigd Koninkrijk
               "se": 0.7,  // Zweden
               "ch": 0.68, // Zwitserland
       
               // Aziatische landen
               "cn": 0.85, // China
               "jp": 0.8,  // Japan
       
               // Noord-Amerikaanse landen
               "ca": 0.75, // Canada
               "us": 0.7   // Verenigde Staten
    };

    // Krijg het belastingtarief op basis van het geselecteerde land
    const selectedLand = document.getElementById("landSelect").value;
    const belastingtarief = belastingtarieven[selectedLand] || 1; // Standaardwaarde 1 als het land niet wordt gevonden

    // Bereken netto loon
    const nettoLoon = brutoLoon * belastingtarief;

    // Toon resultaat
    const resultaatElement = document.getElementById("resultaat");
    resultaatElement.innerHTML = "<h2>Net:</h2><p>"+ '$'+ + nettoLoon.toFixed(2) + "</p>";
}
