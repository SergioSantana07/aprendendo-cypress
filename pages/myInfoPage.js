class MyInfoPage {

    selectorsList () {
        const selectors = {
            myInfoGrid: ".orangehrm-edit-employee",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            savedConfirmed: ".oxd-toast-close",
            genericSelectButton: ".oxd-select-text",
            firstSelectableOption:".oxd-select-dropdown > :nth-child(28)",
            secondSelectableOption:".oxd-select-dropdown > :nth-child(2)",
            genericDateField: "[placeholder='yyyy-dd-mm']",
            genderButton:".oxd-radio-input"
        }

        return selectors

    }

    ConferenceMyInfo() {
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
        cy.get(this.selectorsList().myInfoGrid)
    }

    MyInfoInformation() {
        cy.get(this.selectorsList().firstNameField).clear().type("FirstNameTest")
        cy.get(this.selectorsList().middleNameField).clear().type("MiddleNameTest")
        cy.get(this.selectorsList().lastNameField).clear().type("LastNameTest")
        //cy.get(this.selectorslist().genericField).eq(3).clear().type("NicknameTest")
        cy.get(this.selectorsList().genericField).eq(3).clear().type("Employee")
        cy.get(this.selectorsList().genericField).eq(4).clear().type("OtherIdTest")
        cy.get(this.selectorsList().genericField).eq(5).clear().type("DriverLicenseTest")
        cy.get(this.selectorsList().genericDateField).eq(0).clear().type("2034-05-13")
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
        cy.get(this.selectorsList().genericSelectButton).eq(0).click({force: true})
          cy.get(this.selectorsList().firstSelectableOption).click()
        cy.get(this.selectorsList().genericSelectButton).eq(1).click()
          cy.get(this.selectorsList().secondSelectableOption).click()
        cy.get(this.selectorsList().genericDateField).eq(1).clear().type("2034-05-13")
        cy.get(this.selectorsList().dateCloseButton).click({force: true})
        cy.get(this.selectorsList().genderButton).eq(0).click({force: true})
        //cy.get(this.selectorsList().genericField).eq(8).clear().type("SSNTest")
        //cy.get(this.selectorsList().genericField).eq(8).clear().type("SINTest")
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get(this.selectorsList().savedConfirmed)
        

    }

    

}

export default MyInfoPage