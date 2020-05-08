// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//customise 

Cypress.Commands.add("login",(username,password)=>{
    
    cy.visit("http://server3.inet-cm.com:7016/#/home")
    //body > app-root > app-auth > div > app-sign-in > div > form > div:nth-child(5) > button
    cy.get('mdb-navbar.home-nav nav.navbar.navbar-expand-lg.navbar-dark div.navbar-collapse.collapse:nth-child(3) links:nth-child(1) ul.navbar-nav.auth-navbar-nav:nth-child(2) li:nth-child(1) > a.btn-primary.btn-submit.btn')
    .should('be.visible').click()
    cy.get('[id=username]').should('be.visible').type(username)
    cy.get('[id=password]').should('be.visible').type(password)
    cy.get('body > app-root > app-auth > div > app-sign-in > div > form > div:nth-child(5) > button').should('be.visible').click()
    //cy.get('div.container app-sign-in:nth-child(3) div.row form.form.z-depth-1.ng-pristine.ng-invalid.ng-touched div.md-form:nth-child(5) > button.btn.form-control').should('be.visible').click()
    //cy.wait(6000)
})

//  Cypress.Commands.add("login",(username,password)=>{
//     cy.request({
//         log: false,
//         method: 'POST',
//         failOnStatusCode: false,
//          url: 'http://localhost:4200/#/login',
//          body:{
//              user:{
//                  username,
//                 surName: "Super User",
//                   name: "Super User",
//                   email: "user@gmail.com",
//                   phone: "675048695"      

//                  },
//                rolename:{
//                 Gestionnaire: "Gestionnaire",
//                 dministrateur: "Administrateur"
//                }
//             },
//      }).then(response =>{
//        const { userName, username, password} = response.body.user
     
//        window.localStorage.setItem('encryptOp', this.authenticationService.encrypt(password));
//        window.localStorage.setItem('userName', userName);
//        cy.log('Logged now with' + username)
//      })
      
//  })

Cypress.Commands.add("newContact",(number,ville,sexe,nom,age)=>{
    
    //cy.get('')
    cy.get('[href="#/admin/history/new-sms"]', { timeout: 80000 })
      .should('be.visible').click() // click on nouvelle campagne
    cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div.main-directory-container.ng-star-inserted > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(1) > button').click() // click on nouveau contact
    cy.get('[id=number]').type(number)
    cy.get('[id=ville]').type(ville)
    cy.get('[id=sexe]').type(sexe)
    cy.get('[id=nom]').type(nom)
    cy.get('[id=age]').type(age)
    cy.get('body > mdb-modal-container > div > div > app-contact-form > div > div.modal-body > form > div > button').click() //best pratique
})

Cypress.Commands.add("sendMessage",(campaignName,sender,sms)=>{
    
        cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-pristine.ng-invalid div.ng-autocomplete.md-form:nth-child(3) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(campaignName)
        cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-invalid.ng-dirty div.ng-autocomplete.md-form:nth-child(4) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(sender)
        cy.get('[id=textarea]').type(sms) 
        cy.get('[style="display: flex;width: 100%;"] > :nth-child(4)').click() //click sur envoyer
        //cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div:nth-child(2) > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(7) > button.form-control.btn-primary.btn-submit.btn.waves-effect').click()

})

Cypress.Commands.add("planCampaign",(campaignName,sender,sms)=>{
    
    cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-pristine.ng-invalid div.ng-autocomplete.md-form:nth-child(3) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(campaignName)
    cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-invalid.ng-dirty div.ng-autocomplete.md-form:nth-child(4) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(sender)
    cy.get('[id=textarea]').type(sms) 
    cy.get('[style="display: flex;width: 100%;"] > :nth-child(3)').click()
    //cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 div:nth-child(2) form.form.send-sms-form.ng-dirty.ng-touched.ng-valid div.md-form:nth-child(7) > button.form-control.btn-primary.btn-submit.btn:nth-child(3)').click() //click sur planifier
    //cy.get('body > app-root > app-main-pages > div > div:nth-child(2) > div.container > app-history > div:nth-child(2) > app-new-campaign > div > app-new-campaign-from-directory > div > div > form > div:nth-child(7) > button.form-control.btn-primary.btn-submit.btn.waves-effect').click()

})

Cypress.Commands.add("saveMessage",(campaignName,sender,sms)=>{
    
    cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-pristine.ng-invalid div.ng-autocomplete.md-form:nth-child(3) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(campaignName)
    cy.get('div.main-page div.container div.main-directory-container:nth-child(2) div.container.send-sms-container.z-depth-1 form.form.send-sms-form.ng-untouched.ng-invalid.ng-dirty div.ng-autocomplete.md-form:nth-child(4) ng-autocomplete.ng-autocomplete.ng-untouched.ng-pristine.ng-invalid div.autocomplete-container div.input-container:nth-child(1) > input.ng-untouched.ng-pristine.ng-valid').type(sender)
    cy.get('[id=textarea]').type(sms) 
    cy.get('[style="background-color: #fff !important;color: #a25e0c !important;border: 2px solid #a25e0c;"][type="submit"]')
    .click() //click sur save

})

