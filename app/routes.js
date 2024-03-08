//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//know-where-router

router.all('/know-where-router', function (req, res, next) {
    if ((req.session.data['know-where'] == 'yes')) {
      return res.redirect('/UK-question');
      next();
    } else {
      return (res.redirect('/Q1-end-page'))
    }});

//when-last-contact-router

router.all('/when-last-contact-router', function (req, res, next) {
  if ((req.session.data ['whenLastContact'] == 'unknown')) {
    return res.redirect('/Q2-end-page');
    next();
  } else {
    return (res.redirect('/last-contact'))
  }});

//Q3-start-page-router

router.all('/Q3-start-page-router', function (req, res, next) {
  if ((req.session.data ['multipleVictims'] == 'yes')) {
    return res.redirect('/future-concerns-plural');
    next();
  } else {
    return (res.redirect('/future-concerns-singular'))
  }});

///future-concerns-plural-router

router.all('/future-concerns-plural-router', function (req, res, next) {
  if ((req.session.data ['futureConcernsPlural'] == 'yes')) {
    return res.redirect('/future-concerns');
    next();
  } else {
    return (res.redirect('/Q3-end-page'))
  }});

///future-concerns-singular-router

router.all('/future-concerns-singular-router', function (req, res, next) {
  if ((req.session.data ['futureConcernsSingular'] == 'yes')) {
    return res.redirect('/future-concerns');
    next();
  } else {
    return (res.redirect('/Q3-end-page'))
  }});
