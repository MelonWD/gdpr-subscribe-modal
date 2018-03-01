# Melon Web Design GDPR Subscribe Modal

This is the GDPR required modal for email signups. This is required for all forms that allow the user to signup with their email address to receive marketing emails.

## What it does
This code will stop the submission of any form it's added to and require the user to accept the before their details are subscribed to.

## Adding to your project
// TODO: Add Source

add the following line to your index file above the site JS.
```html
<script type="text/javascript" src=""></script>
```

## Parameters
The function takes the following 4 parameters

* formID - Required
    * ID of the form you want to apply the modal to
* privacyPolicyURL - Optional
    * url to the privacy policy of the site
    * will default to 'privacy-policy.html' if not used
* linkColour - Optional
    * colour of all links including button background on the GDPR modal
    * Will default to '#22B573' if not used
* ButtonTextColour - Optional
    * Colour of the button text incase it clashes
    * Will default to '#006837' if not used


## Usage 
```Javascript
// Default Construct
gdprSubscribeModal(formID, privacyPolicyURL, linkColour, buttonTextColour);
```
```Javascript
// Usage within file your JS
gdprSubscribeModal('form#footer-subscribe', '#E31522', '#FFF', 'privacy-policy.html');
```

## Contributors

Liam Canetti
