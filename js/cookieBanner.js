window.addEventListener("load", function(){
  window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#413b3a",
      "text": "#ccaaa3"
    },
    "button": {
      "background": "#ccaaa3",
      "text": "#413b3a"
    }
  },
  "theme": "classic",
  "type": "opt-in",
  "content": {
    "message": "This website and some of its third-party tools use cookies in order to enable it to function as outlined in the Cookie Policy. By closing this banner, scrolling this page, clicking a link or continuing to browse otherwise, you agree to the use of cookies.  If you want to know more or withdraw your consent to all or some of the cookies, please refer to the",
    "link": "Cookie Policy.",
    "href": "www.getwanderlostandfound.com/cookies"
  },
  onInitialise: function (status) {
  var type = this.options.type;
  var didConsent = this.hasConsented();
  if (type == 'opt-in' && didConsent) {
    // enable cookies
  }
  if (type == 'opt-out' && !didConsent) {
    // disable cookies
  }
},

onStatusChange: function(status, chosenBefore) {
  var type = this.options.type;
  var didConsent = this.hasConsented();
  if (type == 'opt-in' && didConsent) {
    // enable cookies
  }
  if (type == 'opt-out' && !didConsent) {
    // disable cookies
  }
},

onRevokeChoice: function() {
  var type = this.options.type;
  if (type == 'opt-in') {
    // disable cookies
  }
  if (type == 'opt-out') {
    // enable cookies
  }
},
})});
