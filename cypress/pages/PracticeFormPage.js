    class PracticeFormPage {
    visit() {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('footer').invoke('attr', 'style', 'display: none');
        cy.get('#fixedban').invoke('attr', 'style', 'display: none');
    }

    fillForm(data) {
        cy.get('#firstName').type(data.firstName);
        cy.get('#lastName').type(data.lastName);
        cy.get('#userEmail').type(data.email);
        cy.contains('label', data.gender).click();
        cy.get('#userNumber').type(data.phone);
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('February');
        cy.get('.react-datepicker__year-select').select('1930');
        cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
        cy.get('#subjectsInput').type(`${data.subjects}{enter}`);
        cy.contains('label', data.hobbies).click();
        cy.get('#uploadPicture').selectFile('files/' + data.image, { force: true });
        cy.get('#currentAddress').type(data.address);
        cy.get('#state').click().contains('div', data.state).click();
        cy.get('#city').click().contains('div', data.city).click();
    }

    submit() {
        cy.get('#submit').click();
    }

    validateSubmission(data) {
        cy.get('.modal-content').should('be.visible');
        cy.get('td').contains(`${data.firstName} ${data.lastName}`);
        cy.get('td').contains(data.email);
        cy.get('td').contains(data.gender);
        cy.get('td').contains(data.phone);
        cy.get('td').contains(data.dob);
        cy.get('td').contains(data.subjects);
        cy.get('td').contains(data.hobbies);
        cy.get('td').contains(data.image);
        cy.get('td').contains(data.address);
        cy.get('td').contains(`${data.state} ${data.city}`);
    }
    }

    export default new PracticeFormPage();
