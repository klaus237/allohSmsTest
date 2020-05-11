//// <reference types="cypress"  />

describe('create new campaign', ()=> {

    beforeEach(()=>{
        cy.login('237667646589', 'inet12345')
        cy.log('add new contact')
        cy.newContact('650044824', 'klaus',  'douala', 'male', 'venderlich', '13')
    })


     it('check list of campaigns planned',()=>{
        
        cy.log("plan campaign")
        cy.planCampaign('klausCamp','klaus', 'hello')

        cy.log("select day and date")
        cy.get('#plannedDate').type('2020-12-20')
        cy.get('#hour').select('20')
        cy.get('#minute').select('30')
        cy.get(':nth-child(2) > .form-control').click() //Planifier

        cy.log('check  campaign name ')
        cy.get('tbody > :nth-child(1) > :nth-child(2)')
          .contains('klausCamp')

        cy.log('check  sender name')
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('klaus')

        cy.log('check if receiver contact exist in the campaign list')
        cy.get('tbody > :nth-child(1) > :nth-child(8)')
          .contains('1 contact(s)')

        
        

        // cy.log('check credit')
        // cy.get('tbody > :nth-child(1) > :nth-child(9)')
        //   .contains('1') 
        
    })

    // it('check list of campaigns carried out',()=>{
    
    //     cy.log("send Message")
    //     cy.sendMessage('klausCamp','klaus', 'hello')
    //     cy.log('confirmer')
    //     cy.get('body > mdb-modal-container > div > div > app-confirm-action > div > div.modal-body > div > button:nth-child(2)').click({force: true})
    //     cy.get('div.main-page div:nth-child(2) div.container app-history.ng-star-inserted:nth-child(2) div.sub-link > a.active:nth-child(2)').click()//click on effectuee button

    //     cy.log('check  campaign name ')
    //     cy.get('tbody > :nth-child(1) > :nth-child(2)')
    //       .contains('klausCamp')

    //     cy.log('check  sender name')
    //     cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('klaus')

    //     cy.log('check if receiver contact exist in the campaign list')
    //     cy.get('tbody > :nth-child(1) > :nth-child(7)')
    //       .contains('1 contact(s)')

        
    //     cy.log('check status')
    //     cy.get('tbody > :nth-child(1) > :nth-child(10)')
    //       .contains('FAILED') 

    //     cy.log('check credit')
    //     cy.get('tbody > :nth-child(1) > :nth-child(8)')
    //       .contains('1') 
        
    // })

   
})