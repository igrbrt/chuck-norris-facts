  describe('Visits the Home Page', () => {
    it('Find buttons', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Random')
      cy.contains('Category')
      cy.contains('Free Text Search')
    })
  })

  describe('Visits the Random Page', () => {
    it('Find text', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Random').click()
      cy.contains('Random Joke')
      cy.get('.back')
    })
  })

  describe('Visits the Category Page', () => {
    it('Find text', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Category').click()
      cy.contains('Select a category')
      cy.get('.back')
    })
  })

  describe('Visits the Free Text Search Page', () => {
    it('Find text', () => {
      cy.visit('http://localhost:3000/')
      cy.contains('Free Text Search').click()
      cy.contains('Be free to search')
      cy.get('.back')
    })
  })