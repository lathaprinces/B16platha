describe('conditional testing', () => {
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq', 'Wikipedia')
    })
    it('1. if link not available then click another link', () => {


        cy.wait(3000)
        cy.get('body').then(($body1) => {  // $body1  - any string can give, include $ symbol

           // if (cy.get('span[data-jsl10n="uwikivoyage.name"]').should('be.visible')){  --- if locator not available, Error raising
           
           if ($body1.find('span[data-jsl10n="ywikivoyage.name"]').length > 0) {

                cy.get('span[data-jsl10n="wikivoyage.name"]').click()  // link1 : wikivoyage
                cy.wait(3000)
                cy.origin('www.wikivoyage.org', () => {

                    cy.title().should('eq', 'Wikivoyage')
                })
            }
            else {
                cy.get('span[data-jsl10n="commons.name"]').click()  // link2 : commons
                cy.wait(3000)
                cy.origin("commons.wikimedia.org", () => {
                    cy.title().should('eq', 'Wikimedia Commons')

                })
            }
        })
    })
})