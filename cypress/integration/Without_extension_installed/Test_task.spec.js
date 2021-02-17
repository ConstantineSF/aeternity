
import { v4 as uuidv4 } from 'uuid'

const uuid = uuidv4()


describe('Test task', () => {

  before(() => {
    cy.reload()
  })

  it('1. Create and edit profile', () => {

    // Open superhero.com

    // navigate to the right section and create an account

    // Locate the "My profile" section and go there.

    // Edit your profile to add a cover image

    // Add a bio and/or location

    // Save

    cy.visit('/')
    cy.get('.right-section-wallet > .button-plain').click()

    cy.wait(3000)
    cy.get('iframe[src="https://wallet.superhero.com"]').then($element => {

      const $body = $element.contents().find('body')

      cy.wrap($body).find('label').click()
      cy.wrap($body).find('[data-cy="generate-wallet"]').click()
      cy.wrap($body).find('.skip-button').click()
      cy.wrap($body).find('[data-cy="generate-wallet"]').click()
      cy.wrap($body).find('[data-cy="proceed-to-wallet"]').click()
      cy.wrap($body).find('.ae-address').invoke('text').then(text =>{
        // cy.visit('/user-profile/'+text)
      })
      // My Profile page not opened
    })

  })

  it('2. Submit a comment', () => {

    // Go to superhero.com

    // Find a post and click the comment button
    
    // Add a comment
    
    // Add a reply to a comment

    cy.visit('/').wait(2000)
    cy.get('.tip__comments').last().click().wait(2000)
    cy.get('textarea[placeholder="Add reply"]').first().type('test_comment'+uuid)
    cy.get('button[title="Reply"]').click()
    cy.contains('Confirm').click().wait(2000)
    cy.get('.tip__comments').last().click()
    cy.get('.note').first().should('contain.text','test_comment'+uuid)

  })

  it('3. Allow/disallow cookies from 3rd party providers', () => {

    // Go to the main feed

    // Find a post that includes a video from youtube or Soundcloud music.
    
    // Try to play it. (should ask for permissions)
    
    // Allow cookies for the selected provider.
    
    // Try to play it again. (should work)

    cy.visit('/')
    cy.wait(2000)
    cy.get('[placeholder="Search Superhero"]').type('soundcloud{enter}').wait(3000)
    cy.get('.play').first().click()
    cy.contains(' Superhero.com respects your privacy. Third-party tracking cookies are blocked by default. In order to play content such as video or audio you have to allow third-party cookies by content provider. ')
      .should('be.visible')
    cy.contains('Allow SoundCloud').click()
    cy.get('.play').first().click()
    cy.get('.sound-wave').should('be.visible')

  })

  
})
