describe('Accueil de l\'application', () => {
  it('affiche le texte de bienvenue', () => {
    cy.visit('/');
    cy.contains('Bienvenue sur mini-node-app 🚀');
  });
});

