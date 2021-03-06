const webscraper = require('web-scraper-headless')
const sitemap = {
  'startUrl': 'https://www.benefitsystems.pl/en/for-you/multisport/#c3923',
  'selectors': [{
    'parentSelectors': ['_root'],
    'type': 'SelectorLink',
    'multiple': true,
    'id': 'chooseLoc',
    'selector': 'a.btn.btn--inverted',
    'delay': ''
  }, {
    'parentSelectors': ['chooseLoc'],
    'type': 'SelectorLink',
    'multiple': true,
    'id': 'city',
    'selector': 'div.choose-voivodeship a',
    'delay': ''
  }, {
    'parentSelectors': ['city'],
    'type': 'SelectorText',
    'multiple': true,
    'id': 'phone_number',
    'selector': 'div.col-md-6:nth-of-type(2) address',
    'regex': '[0-9][0-9 ]+[0-9]',
    'delay': ''
  }],
  '_id': 'benefit'
}

webscraper(sitemap, {delay: 10, pageLoadDelay: 10})
  .then(function (result) {
    console.log(result)
  }).catch(function (err) {
    console.error('error', err)
  })
