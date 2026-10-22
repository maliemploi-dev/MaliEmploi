
const champPoste = document.getElementById("recherchePoste");
const champVille = document.getElementById("rechercheVille");
const boutonRecherche = document.getElementById("boutonRecherche");
const messageResultat = document.getElementById("messageResultat");
const cartes = document.querySelectorAll(".carte-offre");

function rechercherOffres() {
    const poste = champPoste.value.trim().toLowerCase();
    const ville = champVille.value.trim().toLowerCase();

    let nombreResultats = 0;

    cartes.forEach(function(carte) {
        const nomPoste = carte.dataset.poste.toLowerCase();
        const nomVille = carte.dataset.ville.toLowerCase();

        const posteCorrespond = nomPoste.includes(poste);
        const villeCorrespond = nomVille.includes(ville);

        if (posteCorrespond && villeCorrespond) {
            carte.classList.remove("masquee");
            nombreResultats++;
        } else {
            carte.classList.add("masquee");
        }
    });

    if (nombreResultats === 0) {
        messageResultat.textContent =
            "Aucune offre trouvée. Essaie d'autres mots.";
    } else {
        messageResultat.textContent =
            nombreResultats + " offre(s) trouvée(s).";
    }
}

boutonRecherche.addEventListener("click", rechercherOffres);

champPoste.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rechercherOffres();
    }
});

champVille.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        rechercherOffres();
    }
});
