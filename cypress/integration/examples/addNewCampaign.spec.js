//// <reference types="cypress"  />

describe('create new campaign', ()=> {

    beforeEach(()=>{
        cy.login('237667646589', 'inet12345')
        cy.log('add new contact')
        cy.newContact('650044824', 'klaus',  'douala', 'male', 'venderlich', '13')
    })

    it('add new contact',()=>{

        cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div:nth-child(2) > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(2) > div > angular2-multiselect > div > div.selected-list > div > div > div > span.c-label.ng-star-inserted > span').contains('650044824')
        cy.log("send Message")
        cy.sendMessage('klausCamp','klaus', 'hello')
        cy.log('confirmer')
        cy.get('body > mdb-modal-container > div > div > app-confirm-action > div > div.modal-body > div > button:nth-child(2)').click({force: true})
        //cy.get('[style="background-color: #a25e0c !important;color: #fff !important;"]').click()
        
    })

//     it('Send sms with  expediteur name  caractères > 8 ',()=>{
        
//         cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div:nth-child(2) > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(2) > div > angular2-multiselect > div > div.selected-list > div > div > div > span.c-label.ng-star-inserted > span').contains('650044824')
//         cy.log("send Message")
//         cy.sendMessage('klausCamp','venderlich', 'hello')
//         cy.get('#toast-container').contains("Le nom de l'expediteur doit etre inferieur à 8 caractères")

//     })

   it('Send sms with missing sms ',()=>{
        
        cy.log("NO sms")
        cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-pristine.ng-invalid div.ng-autocomplete.md-form:nth-child(3) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type('campaignName')
        cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-invalid.ng-dirty div.ng-autocomplete.md-form:nth-child(4) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type('sender')
        cy.get('[style="display: flex;width: 100%;"] > :nth-child(3)').click()
        cy.get('.toast-error').contains('Entrées invalides ou incomplete')
        
    })



        it('Plan campaign',()=>{
             
             cy.planCampaign('klausCamp','klaus', 'hello') 

            cy.log("select day and date")
            cy.get('#plannedDate').type('2020-12-20')
            cy.get('#hour').select('20')
            cy.get('#minute').select('30')
            cy.get(':nth-child(2) > .form-control').click() //Planifier
            cy.log('check is the planned campaign is save in save')
            cy.log('verification')
            cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('klausCamp')
            
        })

    // it('Cancel campaign',()=>{
        
    //     cy.log("plan campaign")
    //     cy.planCampaign('klausCamp','klaus', 'hello')
    //     cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 div:nth-child(2) form.form.send-sms-form.ng-untouched.ng-pristine.ng-invalid div.md-form:nth-child(7) > button.form-control.btn-primary.btn-submit.btn:nth-child(1)').click()// click on cancel button
    //     cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div:nth-child(2) > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(2) > div > angular2-multiselect > div > div.selected-list > div > div > div > span.c-label.ng-star-inserted > span').should('be.empty')
        
    // })

   

    
})