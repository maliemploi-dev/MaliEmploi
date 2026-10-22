
const offres = {
    comptable: {
        titre: "Comptable",
        entreprise: "Mali Services",
        ville: "Bamako",
        description:
            "Nous recherchons un comptable pour participer au suivi des opérations comptables de l'entreprise.",
        missions: [
            "Enregistrer les opérations comptables.",
            "Participer au suivi des factures.",
            "Préparer les pièces nécessaires aux travaux comptables."
        ]
    },

    developpeur: {
        titre: "Développeur web junior",
        entreprise: "Tech Mali",
        ville: "Bamako",
        description:
            "Nous recherchons un débutant motivé pour participer à la création et à l'amélioration de sites web.",
        missions: [
            "Créer des pages avec HTML et CSS.",
            "Ajouter des fonctionnalités avec JavaScript.",
            "Tester les pages et corriger les erreurs."
        ]
    },

    assistant: {
        titre: "Assistant commercial",
        entreprise: "Sahel Distribution",
        ville: "Ségou",
        description:
            "Nous recherchons un assistant commercial pour soutenir l'équipe dans le suivi des clients et des ventes.",
        missions: [
            "Accueillir et renseigner les clients.",
            "Participer au suivi des commandes.",
            "Mettre à jour les documents commerciaux."
        ]
    }
};

const parametres = new URLSearchParams(window.location.search);
const poste = parametres.get("poste");
const offre = offres[poste];
const boutonPostuler = document.getElementById("boutonPostuler");

if (offre && boutonPostuler) {
    const destinataire = "recrutement@example.com";
    const sujet = encodeURIComponent("Candidature : " + offre.titre);
    const corps = encodeURIComponent(
        "Bonjour,\n\nJe souhaite postuler au poste de " +
        offre.titre +
        ".\n\nCordialement."
    );

    boutonPostuler.href =
        "mailto:" + destinataire +
        "?subject=" + sujet +
        "&body=" + corps;
}

const messageErreur = document.getElementById("messageErreur");

if (offre) {
    document.getElementById("titrePoste").textContent = offre.titre;
    document.getElementById("entreprise").textContent = offre.entreprise;
    document.getElementById("ville").textContent = offre.ville;
    document.getElementById("description").textContent = offre.description;

    const listeMissions = document.getElementById("listeMissions");

    offre.missions.forEach(function(mission) {
        const element = document.createElement("li");
        element.textContent = mission;
        listeMissions.appendChild(element);
    });
} else {
    document.getElementById("titrePoste").textContent =
        "Offre introuvable";

    messageErreur.textContent =
        "Cette offre n'existe pas ou le lien est incorrect.";
}
