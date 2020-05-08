describe('save campaign', ()=> {


    it('message rapide',()=>{
        
        cy.login('237667646589', 'inet12345')
        cy.get('div.main-page nav.navbar.navbar-expand-lg div:nth-child(3) ul.navbar-nav.ml-auto.nav-flex-icons li.nav-item.nav-link-btn:nth-child(2) > span:nth-child(1)')
          .click() //click sur sms rapide
        cy.log('add new contact')
        cy.get('#phone').type('650044824')
        cy.get('#title').type('klaus')
        cy.get('#textarea').type('hello')
        cy.get('.form > :nth-child(4)')
          .click() //click sur envoyer
        cy.get('#toast-container').contains('message envoyé')
        
    })
})