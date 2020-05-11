describe('save campaign', ()=> {


    it('check list of campaigns carried out',()=>{
        
        cy.login('237667646589', 'inet12345')
        cy.log('add new contact')
        cy.newContact('650044824', 'klaus',  'douala', 'male', 'venderlich', '13')

        //fill other chmaps
        cy.log("save Message")
        cy.saveMessage('klausCamp','klaus', 'hello')

        cy.log('check if  campaign name exist in the list')
        cy.get('tbody > :nth-child(1) > :nth-child(2)')
          .contains('klausCamp')

       
        
    })
})