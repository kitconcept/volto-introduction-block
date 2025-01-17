import { getSlateEditorAndType } from '@plone/volto/cypress/support/helpers';

context('Introduction Acceptance Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('macbook-16');
    cy.createContent({
      contentType: 'Document',
      contentId: 'document',
      contentTitle: 'Document',
    });
    cy.autologin();
  });

  it('As editor I can add an Introduction block', () => {
    // Given a Document with the title document
    cy.visit('/document/edit');

    // Create an Introduction block
    cy.getSlate().click();
    cy.get('.button .block-add-button').click({ force: true });
    cy.get('.ui.basic.icon.button.introduction')
      .contains('Introduction')
      .click({ force: true });
    getSlateEditorAndType(
      '.text-slate-editor-inner.detached-slate-editor .slate-editor [contenteditable=true]',
      'This is an introduction',
    );
    cy.get('#toolbar-save').click();

    // Check for Introduction block
    cy.visit('/document');
    cy.get('.block.introduction').should(
      'have.text',
      'This is an introduction',
    );
  });
});
