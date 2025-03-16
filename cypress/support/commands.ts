// Use this to create a new user and login with that user
// Simply call this with:
// cy.login()
// cy.cleanupUser() // cleanup the user
// cy.logout() // logout

// モジュール拡張を使用して型を拡張
declare global {
  // namespaceの代わりにモジュール拡張を使用
  interface Cypress {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Chainable: Chainable;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Chainable {
    // 将来的にカスタムコマンドを追加する場合はここに定義
  }
}

// カスタムコマンドをここに追加できます

export {};
