describe('Address Book', ()=> {


    it('create group',()=>{

        cy.login('237667646589', 'inet12345')
        
        cy.get('[href="#/admin/directory"]')
          .click() //click sur carnet 
          cy.get('[href="#/admin/directory/contacts-groups"]')
          .click() //click sur groupe de contact

       cy.get('div.main-page div.container app-directory.ng-star-inserted:nth-child(2) div.main-directory-container div:nth-child(1) div.action-btn-group.ng-star-inserted > button.custom-btn.btn')
         .click()  //click sur nouveau groupe

      cy.get('#groupName').type('VIP')
      
      cy.get('.form > :nth-child(2) > .form-control')
        .click() //click sur creer ce groupe
       
      cy.get('#toast-container').contains('Creation du groupe effectuée avec succèss')

      //verification

      cy.log('check  group name ')
      cy.get('tbody > :nth-child(1) > :nth-child(2)')
        .contains('VIP')
        
    })
})