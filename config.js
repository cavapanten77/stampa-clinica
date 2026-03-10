window.APP_CONFIG = {
    SUPABASE_URL: 'https://taymnjarlmjkdrjhqkhx.supabase.co',
    BUCKET: 'cartella-clinica',
    // I 6 PDF base da unire sempre, nel giusto ordine
    PDF_FILES: [
        '1 cartella clinica.pdf',
        '2 consenso anestesia, liberatoria, richiesta cart clin.pdf',
        '3 Consenso Generico .pdf',
        '4 Lettera Dimissioni Pazienti.pdf',
        '5 Ricetta PRESCRIZIONE medica dimissione.pdf',
        '6 Tabella Medicazioni.pdf'
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
    PROTESI_PDF: 'FAP_MODULO_POLITECH.pdf',

    // --- NUOVA LOGICA "ALTRE CLINICHE" ---

    // Nome esatto del documento IBAN da caricare su Supabase per gli interventi in altre cliniche
    IBAN_PDF: 'IBAN_MASTER_INTERVENTI_EST.pdf',

    // Nome esatto del documento dell'anestesia (da saltare se l'intervento è in altre cliniche)
    ANESTESIA_PDF: '2 consenso anestesia, liberatoria, richiesta cart clin.pdf'
};
