//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/v2/review-live-with', function (req, res) {
  const editChoice = req.session.data['review-live-with']

  if (editChoice === 'yes') {
    res.redirect('review-plan')
  } else if (editChoice === 'change') {
    res.redirect('suggest-change-live-with')
  } 
});


router.post('/v2/review-changes', function (req, res) {
  const editChoice = req.session.data['review-changes']

  if (editChoice === 'yes') {
    res.redirect('review-plan')
  } else if (editChoice === 'change') {
    res.redirect('suggest-change-changes')
  } 
});


router.post('/v3/living-visiting/where-children-live', function (req, res) {
  const editChoice = req.session.data['where-children-live']

  if (editChoice === 'With Heather') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'With Richard') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'They’ll spend equal time with Heather and Richard​') {
    res.redirect('split-equally')
  } else if (editChoice === 'Another arrangement') {
    res.redirect('#')
  }   
});


router.post('/v3/living-visiting/how-often-overnight', function (req, res) {
  const editChoice = req.session.data['how-often-overnight']

  if (editChoice === 'There are no current plans for overnight stays') {
    res.redirect('how-often-overnight')
  } else if (editChoice === 'Yes, every week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every other week') {
    res.redirect('which-days-overnight')
  } else if (editChoice === 'Yes, every month') {
    res.redirect('how-often-month')
  } else if (editChoice === 'Another arrangement') {
    res.redirect('#')
  }    
});


router.post('/v3/content-1', function (req, res) {
  const editChoice = req.session.data['safe-check-1']

  if (editChoice === 'Yes') {
    res.redirect('content-2')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-1-no')
  } 
});


router.post('/v3/content-2', function (req, res) {
  const editChoice = req.session.data['safe-check-2']

  if (editChoice === 'Yes') {
    res.redirect('content-3')
  } else if (editChoice === 'No') {
    res.redirect('safe-check-content-2-no')
  } 
});