import jobtitle from "../../Pages/jobtitle.po";
import data from "../../fixtures/addjobtitle.json"

describe('checkbox Test', function () {

    it('Working with Check boxes', function () {
 
       cy.visit("https://register.rediff.com/register/register.php");

 //CheckBox 
 
       cy.get('input[name^=chk_altemail]').check().should('be.checked');
 
       // cy.wait(10000)
 
        cy.get('input[name^=chk_altemail]').uncheck().should('not.be.checked');
 
  // //Radio 
 
 //cy.xpath('input[value="f"]', { timeout: 20000 }).check().should('be.checked');

// cy.xpath('input[value="m"]', { timeout: 20000 }).should('not.be.checked');
cy.get('input[value="f"]', { timeout: 20000 }).check().should('be.checked');

 cy.get('input[value="m"]', { timeout: 20000 }).should('not.be.checked');

//Uncheck will not work for Radio
 
//   // //Dropdowns

//   //  //3 ways we can handle 

  //     //Text
           // cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("APR").should("have.value", "04" )
           cy.get('select[name^="DOB_Month"]').select("APR").should("have.value", "04" )
           cy.get('select[name^="DOB_Day"]').select("04").should("have.value", "04" )
           cy.get('select[name^="DOB_Year"]').select("2023").should("have.value", "2023" )

         // cy.wait(5000)
           //.should("have.value", "05" )
//           cy.wait(5000)
// //   //     //Value

           cy.get('select[name^="DOB_Month"]').select("05").should("have.value", "05" )
           cy.get('select[name^="DOB_Day"]').select("06").should("have.value", "06" )
           cy.get('select[name^="DOB_Year"]').select("2012").should("have.value", "2012" )
 
       // cy.xpath('//select[starts-with(@name,"DOB_Month")]').select("09").should("have.value", "09" )
//         cy.wait(5000)
//         cy.get('select[name*="DOB_Month"]').select('12')
// //   //   // Index 
      // cy.xpath('//select[starts-with(@name,"DOB_Month")]').select(6).should("have.value", "06" )

//      cy.wait(5000)
//      cy.get('select[name*="DOB_Month"]').select(3)

        jobtitle.selectMonth("AUG")
    });
 });
 