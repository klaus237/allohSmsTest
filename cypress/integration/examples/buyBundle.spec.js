describe('Buy bundle', ()=> {


    it('select bundle',()=>{
        cy.login('237667646589', 'inet12345')
        cy.get('[href="#/admin/bundles-purchase"]')
          .click() //cliquer sur recharge
        cy.wait(3000)
          cy.log('250 souscription')
        cy.get('div.main-page div.container app-bundles-purchase.ng-star-inserted:nth-child(2) div.container.ng-star-inserted div.row:nth-child(2) div.plan-category div.row div.col-md-3.ng-star-inserted:nth-child(1) div.plan-card > button.btn.btn-more')
          .click() //click sur souscris
          cy.log('coût: 250 FCFA doit etre visible')
        //   cy.get('[style="float: right;font-weight: bold;"]')
        //   .contains('coût: 250 FCFA')
          cy.log('select orange Money')
          cy.get(':nth-child(1) > .row > :nth-child(1) > .payment-method-container > .title')
          .click() //select orange money
          cy.log('enter number')
          cy.get('#phone').click({force: true}).type('650044824')
        cy.log('click sur pousuivre')
        cy.get('.btn')
          .click()
          cy.get('[style="font-weight: bolder;margin: auto;padding: 13px;"]').should('be.visible')

          cy.log('bundle payment NO WORKING')
        
        
    })
})