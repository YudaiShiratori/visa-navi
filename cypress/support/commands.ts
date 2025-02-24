// Use this to create a new user and login with that user
// Simply call this with:
// cy.login()
// cy.cleanupUser() // cleanup the user
// cy.logout() // logout

declare global {
  namespace Cypress {
    interface Chainable {
      // 認証関連のコマンドを削除
    }
  }
}

export {};
