(() => {
  const personalValues = {
    email: 'hello@igorluiz.me',
    name: 'Igor Halfeld',
    contact: '--',
    links: 'https://github.com/igorhalfeld - https://www.linkedin.com/in/igorhalfeld/ - https://igorluiz.me/ - https://twitter.com/igorhalfeld',
    bio: 'Microsoft MVP, Software Engineer, Organizador do Vue.js Summit, Vue.js SP, JSSP e NodeBR',
    photo: 'https://avatars3.githubusercontent.com/u/9022134?s=500&v=4'
  }

  const $$ = element => document.querySelectorAll(element)
  const fields = $$('[aria-label]')

  for (const element of fields) {
    const value = element.getAttribute('aria-label')

    if (/(e-mail|email)/i.test(value)) {
      element.value = personalValues.email
    }

    if (/nome/i.test(value)) {
      element.value = personalValues.name
    }

    if (/contato/i.test(value)) {
      element.value = personalValues.contact
    }

    if (/biografia/i.test(value)) {
      element.value = personalValues.bio
    }

    if (/(github|linkedin|blog)/i.test(value)) {
      element.value = personalValues.links
    }

    if (/foto/i.test(value)) {
      element.value = personalValues.photo
    }
  }
})()
