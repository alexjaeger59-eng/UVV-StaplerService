const MessTyp = {
    IO_NIO: "io_nio",
    BEWERTUNG: "bewertung",
    TEXT_ONLY: "text",
    Yes_NO: "Yes_No"
};

const presets = {
    stapler: [
        {
            kategorie: "Sichtprüfung Hubwerk, Fahrantrieb und Bremsen",
            punkte: [
                { id: "5_1", label: "Hubwerk Gabelzinken", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_1_1", label: "Dicke am Gabelknick", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_1_2", label: "Bleibende Verformung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_1_3", label: "Riss am Knick oder Aufhängung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_1__K", label: "Ketten", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_1_4", label: "Länge über mind. 6 Teilungen", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2", label: "Fahrantrieb und Bremsen", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_1", label: "Auspuffprüfung bei Dieselfahrzeug", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_2", label: "Bremse an Deichsel", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_3", label: "Betriebsbremse (Bremsleistung)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_4", label: "Parkbremse (Bremsleistung)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_5", label: "Bremssystem", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_2_6", label: "Räder/Reifen", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        },
        {
            kategorie: "Elektrische Ausrüstung / Hydraulisches System",
            punkte: [
                { id: "5_3_1", label: "Fahrerrückhaltesystem", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_3_2", label: "Sitzbefestigung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_3_3", label: "Lenksystem", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_3_4", label: "Bedienelemente/Beschilderung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4", label: "Elektrische Ausrüstung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_1", label: "Batteriezustand", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_2", label: "Batterie Befestigung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_3", label: "Batteriedaten", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_4", label: "Sitzschalter/Abschaltvorrichtung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_5", label: "Notausschalter", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_6", label: "Sicherheitstenschalter", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_7", label: "Elektrische Verdrahtung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_4_8", label: "Sicherheitsschalter an Deichsel", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_5", label: "Hydraulisches System", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_5_1", label: "Hubsystem Kriechtest", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_5_2", label: "Neigesystem Kriechtest", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_5_3", label: "Leckage und Beschädigung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        },
        {
            kategorie: "Fahrzeugrahmen / Sicherheitsausrüstung",
            punkte: [
                { id: "5_6", label: "Fahrzeugrahmen/Sicherheitsausrüstung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_6_1", label: "Befestigungspunkte", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_6_2", label: "Fahrzeugrahmen/Sicherheitsausrüstung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_6_3", label: "Anhängerkupplung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_6_4", label: "Bodenöffnung an Treibgaßstaplern", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_6_5", label: "Haubenverriegelung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_7", label: "Verschiedenes und Sonderaustattung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_7_1", label: "Beschilderung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_7_2", label: "Bedienungsanleitung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_7_3", label: "Anbaugeräte", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_7_4", label: "Zusatzausrüstung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_8", label: "Fahrzeug mit hebbaren Fahrerplatz", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "5_8_1", label: "Sicherheitsfunktion gemäß Prüfliste des Herstellers", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        }
    ],
    ameise: [
        {
            kategorie: "Deichsel & Steuerung (Ameise)",
            punkte: [
                { id: "A_1_1", label: "Deichsel-Bauchschalter (Auffahrschutz)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_1_2", label: "Deichsel-Rückstellfeder (automatische Bremse)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_1_3", label: "Fahrschalter i.O. (Vorwärts / Rückwärts)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_1_4", label: "Hupe / Akustisches Signal", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        },
        {
            kategorie: "Fahrwerk & Hydraulik",
            punkte: [
                { id: "A_2_1", label: "Laufrollen & Antriebsrad (Verschleiß/Beschädigung)", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_2_2", label: "Hydraulikzylinder Dichtigkeit", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_2_3", label: "Hub- und Senkfunktion unter Last", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_2_4", label: "Gabelgestänge / Mechanische Gelenke", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        },
        {
            kategorie: "Elektrik & Batterie",
            punkte: [
                { id: "A_3_1", label: "Batterienstecker & Kabelbeschädigung", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_3_2", label: "Not-Aus-Schalter Funktion", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" },
                { id: "A_3_3", label: "Schlüsselschalter / Display", typ: MessTyp.IO_NIO, zustand: "", kommentar: "" }
            ]
        }
    ]
};

let aktuelleDaten = presets.stapler;

function getFormatiertesDatum() {
    const d = new Date();
    const tag = String(d.getDate()).padStart(2, '0');
    const monat = String(d.getMonth() + 1).padStart(2, '0');
    const jahr = String(d.getFullYear()).slice(-2);
    return `${tag}${monat}${jahr}`;
}

function holePruefID() {
    const kundenNr = document.getElementById('info-kundennr').value.trim() || '000';
    const datum = getFormatiertesDatum();
    const speicherKey = `uvv_zaehler_${datum}`;
    let zaehler = parseInt(localStorage.getItem(speicherKey) || "0", 10) + 1;
    localStorage.setItem(speicherKey, zaehler);
    const zaehlerFormatiert = String(zaehler).padStart(2, '0');
    return `${kundenNr}-${datum}-${zaehlerFormatiert}`;
}

function findePruefpunkt(id) {
    for (const kat of aktuelleDaten) {
        const punkt = kat.punkte.find(p => p.id === id);
        if (punkt) return punkt;
    }
    return null;
}

function wechselPreset(presetKey) {
    if (presets[presetKey]) {
        aktuelleDaten = presets[presetKey];
        renderCheckliste();
    }
}

function renderCheckliste() {
    const container = document.getElementById('checklisten-container');
    if (!container) return;

    container.innerHTML = "";

    aktuelleDaten.forEach(kat => {
        const katHeader = document.createElement('h2');
        katHeader.className = "kategorie-titel";
        katHeader.innerText = kat.kategorie;
        container.appendChild(katHeader);

        kat.punkte.forEach(punkt => {
            let buttonsHTML = "";
            switch (punkt.typ) {
                case MessTyp.IO_NIO:
                    buttonsHTML = `
                        <button class="btn-check ${punkt.zustand === 'i.O.' ? 'active' : ''}" onclick="waehleZustand(this, 'i.O.', '${punkt.id}')">i.O.</button>
                        <button class="btn-check ${punkt.zustand === 'n.i.O.' ? 'active' : ''}" onclick="waehleZustand(this, 'n.i.O.', '${punkt.id}')">n.i.O.</button>`;
                    break;
                case MessTyp.Yes_NO:
                    buttonsHTML = `
                        <button class="btn-check ${punkt.zustand === 'Ja' ? 'active' : ''}" onclick="waehleZustand(this, 'Ja', '${punkt.id}')">Ja</button>
                        <button class="btn-check ${punkt.zustand === 'Nein' ? 'active' : ''}" onclick="waehleZustand(this, 'Nein', '${punkt.id}')">Nein</button>`;
                    break;
                case MessTyp.BEWERTUNG:
                    buttonsHTML = `
                        <button class="btn-check ${punkt.zustand === 'Gut' ? 'active' : ''}" onclick="waehleZustand(this, 'Gut', '${punkt.id}')">Gut</button>
                        <button class="btn-check ${punkt.zustand === 'Okay' ? 'active' : ''}" onclick="waehleZustand(this, 'Okay', '${punkt.id}')">Okay</button>
                        <button class="btn-check ${punkt.zustand === 'Mangelhaft' ? 'active' : ''}" onclick="waehleZustand(this, 'Mangelhaft', '${punkt.id}')">Mangelhaft</button>`;
                    break;
            }

            const itemDiv = document.createElement('div');
            itemDiv.className = "check-item";
            itemDiv.innerHTML = `
                <div class="item-header">
                    <span class="item-id">${punkt.id}</span>
                    <span class="item-label">${punkt.label}</span>
                </div>
                <div class="button-group">
                    ${buttonsHTML}
                </div>
                <textarea 
                    class="kommentar-feld" 
                    placeholder="Kommentar..." 
                    oninput="speichereKommentar('${punkt.id}', this.value)"
                >${punkt.kommentar}</textarea>
            `;
            container.appendChild(itemDiv);
        });
    });
}

function speichereKommentar(id, text) {
    const punkt = findePruefpunkt(id);
    if (punkt) punkt.kommentar = text;
}

function waehleZustand(button, wert, id) {
    const punkt = findePruefpunkt(id);
    if (punkt) {
        punkt.zustand = wert;
    }

    const elternElement = button.parentElement;
    const alleButtonsInDieserGruppe = elternElement.querySelectorAll('.btn-check');
    alleButtonsInDieserGruppe.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// Initialisierung der Signature Pads
let canvasPruefer = document.getElementById('signature-pad-pruefer');
let canvasKunde = document.getElementById('signature-pad-kunde');

let padPruefer = new SignaturePad(canvasPruefer);
let padKunde = new SignaturePad(canvasKunde);

function clearSignature(wer) {
    if (wer === 'pruefer') padPruefer.clear();
    if (wer === 'kunde') padKunde.clear();
}

function generierePDF() {
    const doc = new jspdf.jsPDF();
    
    const auftraggeber = document.getElementById('info-auftraggeber').value.split('\n');
    const ort = document.getElementById('info-ort').value.split('\n');
    const geraet = document.getElementById('info-geraet').value || '';
    const seriennr = document.getElementById('info-seriennr').value || '';
    const bs = document.getElementById('info-bs').value || '';
    const intern = document.getElementById('info-intern').value || '';
    const pruefer = document.getElementById('info-pruefer').value || '';
    const pruefID = "U " + holePruefID();
    const heuteDatum = new Date().toLocaleDateString('de-DE');

    const statusGeraet = document.querySelector('input[name="status_geraet"]:checked')?.value;
    const statusMaengel = document.querySelector('input[name="status_maengel"]:checked')?.value;
    const statusPlakette = document.querySelector('input[name="status_plakette"]:checked')?.value;

    doc.setFont("helvetica", "normal");

    // 1. Hauptüberschrift
    doc.setFontSize(14);
    doc.text("Leistungsnachweis zur wiederkehrenden Prüfung FEM 4.004, Abschnitt 5", 14, 15);

    // 2. Kasten Auftraggeber
    doc.rect(14, 22, 88, 30);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Auftraggeber", 16, 27);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    let yPos = 32;
    auftraggeber.forEach(line => { doc.text(line, 16, yPos); yPos += 4; });

    // 3. Kasten Ausführungsort
    doc.rect(106, 22, 90, 30);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text("Ausführungsort", 108, 27);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    yPos = 32;
    ort.forEach(line => { doc.text(line, 108, yPos); yPos += 4; });

    // 4. Kasten Prüfbericht Nr.
    doc.rect(14, 57, 35, 12);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text("Prüfbericht Nr.", 16, 61);
    doc.setFont("helvetica", "normal");
    doc.text(pruefID, 16, 66);

    // Datum rechts oben
    doc.text(heuteDatum, 196, 61, { align: "right" });

    // 5. Stammdaten Auflistung
    let startY = 77;
    doc.setFontSize(9);
    
    const labelX = 14;
    const valX = 45;

    doc.text("Hersteller/Typ", labelX, startY);     doc.text(geraet, valX, startY);
    doc.text("Serien-Nr./Baujahr", labelX, startY+5); doc.text(seriennr, valX, startY+5);
    doc.text("Betriebsstd.", labelX, startY+10);    doc.text(bs, valX, startY+10);
    doc.text("Interne Nr.", labelX, startY+15);    doc.text(intern, valX, startY+15);
    doc.text("Prüfer", labelX, startY+20);        doc.text(pruefer, valX, startY+20);

    function drawCheckbox(x, y, label, isChecked) {
        doc.rect(x, y - 3, 3.5, 3.5);
        if (isChecked) {
            doc.setFont("helvetica", "bold");
            doc.text("X", x + 0.8, y - 0.3);
            doc.setFont("helvetica", "normal");
        }
        doc.text(label, x + 5, y);
    }

    // 6. Status Gerät
    let checkY = startY + 30;
    doc.setFont("helvetica", "bold");
    doc.text("Das Gerät ist aus sicherheitstechnischen Gründen:", 14, checkY);
    doc.setFont("helvetica", "normal");

    checkY += 6;
    drawCheckbox(14, checkY, "Betriebsbereit", statusGeraet === "betriebsbereit");
    drawCheckbox(55, checkY, "bedingt Betriebsbereit", statusGeraet === "bedingt");
    drawCheckbox(105, checkY, "sofort still zu legen", statusGeraet === "stilllegen");
    drawCheckbox(148, checkY, "Nicht behobene Mängel aus Vorjahr", statusGeraet === "vorjahr");

    // 7. Mängelbeseitigung
    checkY += 12;
    doc.setFont("helvetica", "bold");
    doc.text("Mängelbeseitigung durch:", 14, checkY);
    doc.setFont("helvetica", "normal");

    checkY += 6;
    drawCheckbox(14, checkY, "sofortige Reparatur", statusMaengel === "sofort");
    drawCheckbox(55, checkY, "Reparaturauftrag", statusMaengel === "auftrag");
    drawCheckbox(105, checkY, "Angebot", statusMaengel === "angebot");

    // 8. Prüfplakette
    checkY += 12;
    doc.setFont("helvetica", "bold");
    doc.text("Prüfplakette:", 14, checkY);
    doc.setFont("helvetica", "normal");

    checkY += 6;
    drawCheckbox(14, checkY, "Prüfplakette angebracht", statusPlakette === "angebracht");
    drawCheckbox(55, checkY, "Prüfplakette nicht angebracht", statusPlakette === "nicht_angebracht");

    // 9. Tabelle
    let tableStartY = checkY + 10;
    const tableData = [];

    aktuelleDaten.forEach(kat => {
        tableData.push([
            { content: kat.kategorie, colSpan: 5, styles: { fillColor: [240, 240, 240], textColor: [0, 0, 0], fontStyle: 'bold' } }
        ]);

        kat.punkte.forEach(p => {
            tableData.push([
                p.id, 
                p.label, 
                p.zustand === "i.O." ? "X" : "", 
                p.zustand === "n.i.O." ? "X" : "", 
                p.kommentar
            ]);
        });
    });

    doc.autoTable({
        startY: tableStartY,
        head: [['Nr.', 'Prüfpunkt', 'i.O.', 'n.i.O.', 'Bemerkung']],
        body: tableData,
        theme: 'grid',
        headStyles: { fillColor: [220, 220, 220], textColor: 0 },
        columnStyles: {
            0: { cellWidth: 15 },
            1: { cellWidth: 75 },
            2: { cellWidth: 12, halign: 'center' },
            3: { cellWidth: 12, halign: 'center' },
            4: { cellWidth: 72 }
        },
        styles: { fontSize: 8, cellPadding: 1.5, overflow: 'linebreak' }
    });

    // 10. Unterschriften im PDF
    let finalY = doc.lastAutoTable.finalY + 15;
    if (finalY > 250) {
        doc.addPage();
        finalY = 20;
    }

    doc.setFontSize(9);
    if (!padPruefer.isEmpty()) {
        doc.text("Unterschrift Prüfer:", 14, finalY);
        doc.addImage(padPruefer.toDataURL(), 'PNG', 14, finalY + 2, 40, 12);
    } else {
        doc.text("Unterschrift Prüfer: _____________________", 14, finalY);
    }

    if (!padKunde.isEmpty()) {
        doc.text("Unterschrift Kunde:", 110, finalY);
        doc.addImage(padKunde.toDataURL(), 'PNG', 110, finalY + 2, 40, 12);
    } else {
        doc.text("Unterschrift Kunde: _____________________", 110, finalY);
    }

    doc.save(`UVV_Bericht_${geraet.replace(/\s+/g, '_') || 'Geraet'}.pdf`);
}

// App initialisieren
renderCheckliste();