window.APP_CONFIG = {
    SUPABASE_URL: 'https://taymnjarlmjkdrjhqkhx.supabase.co',
    BUCKET: 'cartella-clinica',
    // I documenti base disponibili per la selezione (ora tramite checkbox)
    PDF_FILES: [
        '0 SCHEDA ANAGRAFICA 2026.pdf',
        '1 cartella clinica.pdf',
        '2 consenso anestesia, liberatoria, richiesta cart clin.pdf',
        '3 Consenso Generico .pdf',
        '4 Lettera Dimissioni Pazienti.pdf',
        '5 Ricetta PRESCRIZIONE medica dimissione.pdf',
        '6 Tabella Medicazioni.pdf',
        '7 Chirurgia ambulatoriale.pdf',
        'TABELLA X SCHEDE INTERVENTI.pdf',
        'CERTIFICATO.pdf',
        'CONSENSO BTX-IAL.pdf',
        'CONSENSO MINORENNI.pdf'
    ],

    // Categoria: SCHEDE (Selezione granulare)
    SCHEDE_FILES: [
        '0 SCHEDA ANAGRAFICA 2026.pdf',
        '1 cartella clinica.pdf',
        '2 consenso anestesia, liberatoria, richiesta cart clin.pdf',
        '3 Consenso Generico .pdf',
        '4 Lettera Dimissioni Pazienti.pdf',
        '5 Ricetta PRESCRIZIONE medica dimissione.pdf',
        '6 Tabella Medicazioni.pdf',
        'MODULO POLITECH.pdf',
        'IBAN.pdf',
        'TABELLA X SCHEDE INTERVENTI.pdf',
        'CONSENSO BTX-IAL.pdf',
        'CONSENSO MINORENNI.pdf'
    ],

    // Categoria: LIBERATORIE
    LIBERATORIE_FILES: [
        'liberatoria guida.pdf',
        'liberatoria reintervento int terzi.pdf',
        'liberatoria reintervento tullia.pdf',
        'liberatoria x mancato accompagnatore.pdf'
    ],

    // Categoria: CERTIFICATI
    CERTIFICATI_FILES: [
        'CERTIFICATO LAVORO DIPENDENTI.pdf',
        'CERTIFICATO LAVORO VISITA CONTROLLO.pdf',
        'CERTIFICATO LAVORO X INTERV..pdf'
    ],

    // Categoria: INTERVENTI IN LOCALE
    INTERVENTI_LOCALE_FILES: [
        '3 Consenso Generico .pdf',
        '6 Tabella Medicazioni.pdf',
        '7 Chirurgia ambulatoriale.pdf'
    ],

    // Categoria: ADVISOR
    ADVISOR_FILES: [
        '0 SCHEDA ANAGRAFICA 2026.pdf',
        'CONSENSO BTX-IAL.pdf'
    ],

    // I consensi specifici associati agli interventi
    // Chiave = Nome da mostrare nel menu
    // Valore = Nome esatto del file PDF caricato su Supabase
    INTERVENTIONS: {
        'Addominoplastica': 'ADDOMINOPLASTICA.pdf',
        'Blefaroplastica': 'BLEFAROPLASTICA.pdf',
        'Certificato Intervento Minori': 'CERTIFICATO INT.MINORI NEW.pdf',
        'Lifting del Viso': 'LIFTING_DEL_VISO.pdf',
        'Liposuzione': 'LIPOSUZIONE.pdf',
        'Mastoplastica Additiva': 'MASTOPLASTICA ADDITIVA.pdf',
        'Mastoplastica Riduttiva': 'MASTOPLASTICA RIDUTTIVA.pdf',
        'Otoplastica': 'OTOPLASTICA.pdf',
        'Rinoplastica': 'RINOPLASTICA.pdf'
    },

    // Interventi che richiedono in aggiunta il modulo Protesi
    BREAST_INTERVENTIONS_REQUIRING_PROTESI: [
        'Mastoplastica Additiva',
        'Mastoplastica Riduttiva',
        'Mastopessi',
        'Mastopessi e Mastoplastica Additiva'
    ],

    // Nome esatto del file del modulo Protesi
    PROTESI_PDF: 'MODULO POLITECH.pdf',

    // --- NUOVA LOGICA "ALTRE CLINICHE" ---

    // Nome esatto del documento IBAN da caricare su Supabase per gli interventi in altre cliniche
    IBAN_PDF: 'IBAN.pdf',

    // Nome esatto del documento dell'anestesia (da saltare se l'intervento è in altre cliniche)
    ANESTESIA_PDF: '2 consenso anestesia, liberatoria, richiesta cart clin.pdf',

    // --- LOGICA STAMPA FRONTE/RETRO ---
    
    // Elenco esatto dei file che DEVONO essere stampati fronte-retro.
    // Gli altri file non in questa lista avranno pagine bianche inserite per forzare la stampa solo fronte.
    DOUBLE_SIDED_FILES: [
        '0 SCHEDA ANAGRAFICA 2026.pdf',
        '1 cartella clinica.pdf',
        '2 consenso anestesia, liberatoria, richiesta cart clin.pdf',
        '3 Consenso Generico .pdf',
        '7 Chirurgia ambulatoriale.pdf',
        'CERTIFICATO.pdf',
        'CONSENSO BTX-IAL.pdf',
        'CONSENSO MINORENNI.pdf',
        'MODULO POLITECH.pdf',
        'ADDOMINOPLASTICA.pdf',
        'BLEFAROPLASTICA.pdf',
        'LIFTING_DEL_VISO.pdf',
        'LIPOSUZIONE.pdf',
        'MASTOPLASTICA ADDITIVA.pdf',
        'MASTOPLASTICA RIDUTTIVA.pdf',
        'OTOPLASTICA.pdf',
        'RINOPLASTICA.pdf'
    ]
};
