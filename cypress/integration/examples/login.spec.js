describe('User Login', ()=> {

    // TODO Refactor me to avoid duplication!
    beforeEach(()=>{
        cy.visit("#/home")
    })

     function showToastMessage(){

         cy.get('#toast-container').contains('Entrées invalides ou incomplete').should('be.visible')
    }
 
    it('display error message when username and password are empty ',()=>{

        cy.get('mdb-navbar.home-nav nav.navbar.navbar-expand-lg.navbar-dark div.navbar-collapse.collapse:nth-child(3) links:nth-child(1) ul.navbar-nav.auth-navbar-nav:nth-child(2) li:nth-child(1) > a.btn-primary.btn-submit.btn')
          .should('be.visible').click()
          cy.get('body > app-root > app-auth > div > app-sign-in > div > form > div:nth-child(5) > button').should('be.visible').click()  
          showToastMessage()

    })

    it('display error message when username field is empty ',()=>{

        cy.get('mdb-navbar.home-nav nav.navbar.navbar-expand-lg.navbar-dark div.navbar-collapse.collapse:nth-child(3) links:nth-child(1) ul.navbar-nav.auth-navbar-nav:nth-child(2) li:nth-child(1) > a.btn-primary.btn-submit.btn')
          .should('be.visible').click()
        cy.get('[id=password]').should('be.visible').type('0101abc')
        cy.get('body > app-root > app-auth > div > app-sign-in > div > form > div:nth-child(5) > button').should('be.visible').click()  
          showToastMessage()   
         
        
    })

    it('display error message when password field is empty ',()=>{
        
        cy.get('mdb-navbar.home-nav nav.navbar.navbar-expand-lg.navbar-dark div.navbar-collapse.collapse:nth-child(3) links:nth-child(1) ul.navbar-nav.auth-navbar-nav:nth-child(2) li:nth-child(1) > a.btn-primary.btn-submit.btn')
          .should('be.visible').click()
        cy.get('[id=username]').should('be.visible').type('237695859504')
        cy.get('body > app-root > app-auth > div > app-sign-in > div > form > div:nth-child(5) > button').should('be.visible').click()    
          showToastMessage()
        
    })

      it('display error message when username and password are wrong ',()=>{
        
        cy.login('inet', 'B0101abc')
        cy.get('#toast-container').contains("Erreur d'authentification").should('be.visible')  
            
     })

     it(' display error message when username is wrong ',()=>{
        
        cy.login('Sinet', '0101abc')
        cy.get('#toast-container').contains("Erreur d'authentification").should('be.visible') 
        
    })

     it('display error message when password is wrong ',()=>{

       cy.login('237695859504', 'B0101abc')
       cy.get('#toast-container').contains("Erreur d'authentification").should('be.visible') 
      
        
    })

     it('display success message when credentials are good ',()=>{
        
         cy.login('237667646589', 'inet12345')
          cy.get('app-main-pages.ng-star-inserted:nth-child(2) div.main-page div:nth-child(2) div.container app-history.ng-star-inserted:nth-child(2) div.sub-link > a:nth-child(1)')
            .should('be.visible')
        
     })

  //    it('display success message when login with username',()=>{
  //       //here valid login number is 237667646589
  //     cy.login('inet', 'inet12345')
  //      cy.get('app-main-pages.ng-star-inserted:nth-child(2) div.main-page div:nth-child(2) div.container app-history.ng-star-inserted:nth-child(2) div.sub-link > a:nth-child(1)')
  //        .should('be.visible')
     
  // })

  // it(' display success message when login with valid number without 237 ',()=>{
  //   //here valid login number is 237667646589
  // cy.login('667646589', 'inet12345')
  //  cy.get('app-main-pages.ng-star-inserted:nth-child(2) div.main-page div:nth-child(2) div.container app-history.ng-star-inserted:nth-child(2) div.sub-link > a:nth-child(1)')
  //    .should('be.visible')
 
  // })


})