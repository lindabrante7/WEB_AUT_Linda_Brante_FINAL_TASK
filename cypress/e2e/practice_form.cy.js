    Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    });

    describe('Automation Practice Form Test', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');

        cy.get('footer').invoke('attr', 'style', 'display: none');
        cy.get('#fixedban').invoke('attr', 'style', 'display: none');
    });

    it('Fills out and submits the form', () => {
        cy.get('#firstName').type('Linda');
        cy.get('#lastName').type('Brante');
        cy.get('#userEmail').type('linda@example.com');
        cy.contains('label', 'Female').click();
        cy.get('#userNumber').type('1234567890');

        // Date of birth
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();

        // Subject
        cy.get('#subjectsInput').type('Economics{enter}');

        // Hobby
        cy.contains('label', 'Music').click();

        // Uplode picture
        cy.get('#uploadPicture').selectFile('cypress/files/test-image.jpg');
        // Address
        cy.get('#currentAddress').type('Example Street 123');

        // State and City
        cy.get('#state').click().contains('div', 'NCR').click();
        cy.get('#city').click().contains('div', 'Delhi').click();

        // Submit
        cy.get('#submit').click();

        // Validation
        cy.get('.modal-content').should('be.visible');
        cy.get('td').contains('Linda Brante');
        cy.get('td').contains('linda@example.com');
        cy.get('td').contains('Female');
        cy.get('td').contains('1234567890');
        cy.get('td').contains('28 February,1930');
        cy.get('td').contains('Economics');
        cy.get('td').contains('Music');
        cy.get('td').contains('test-image.jpg');
        cy.get('td').contains('Example Street 123');
        cy.get('td').contains('NCR Delhi');
    });
    });
