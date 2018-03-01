function gdprSubscribeModal(formID, privacyPolicyURL, linkColour, buttonTextColour) {

	var modalSelector = '.section-gdpr-subscribe-modal';
	var GDRPaccepted = false;
	var policyURL;
	var colorLink;
	var btnTextColour;

	if(privacyPolicyURL) {
		policyURL = privacyPolicyURL;
	}
	else {
		policyURL = 'privacy-policy.html';
	}

	if(linkColour) {
		colorLink = linkColour;

	}
	else {
		colorLink = '#22B573';
	}

	if(buttonTextColour) {
		btnTextColour = buttonTextColour;

	}
	else {
		btnTextColour = '#006837';
	}

	if($(modalSelector).length == 0) {
		$('body').append("<section class=\"section-gdpr-subscribe-modal\" style='display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index:9999;'>\n" +
			"\t\t\t<div class=\"sub-overlay\" style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0, 0.75); z-index: 0;'></div>\n" +
			"\t\t\t<div class=\"sub-content\" style='position: absolute; top: 30%; left: 0; right: 0; width: 100%; max-width: 660px; margin: 0 auto; z-index: 1; background: #fff; padding: 70px 0 60px; text-align: center; cursor: pointer;'>\n" +
			"\t\t\t\t<div class=\"btn-close\" style='position: absolute; top: 25px; right: 20px; display: block;'>\n" +
			"\t\t\t\t\t<div class=\"mod-bar bar-1\" style='background: #B3B3B3; display: block; width: 25px; height: 1.4px; transform: translate(0px, 3px) rotate(-45deg);'></div>\n" +
			"\t\t\t\t\t<div class=\"mod-bar bar-2\" style='background: #B3B3B3; display: block; width: 25px; height: 1.4px; transform: translate(0px, 2px) rotate(45deg);'></div>\n" +
			"\t\t\t\t</div>\n" +
			"\t\t\t\t<div class=\"container\" style='width: 100%; max-width: 490px; margin: 0 auto; text-align: center;'>\n" +
			"\t\t\t\t\t<div class=\"sub-title\"><h4 style='font-size: 18px; font-weight: 500; margin: 0 0 45px;'>Thank you for your interest in our email updates.</h4></div>\n" +
			"\t\t\t\t\t<div class=\"sub-intro\" style='margin: 0 0 50px;'>\n" +
			"\t\t\t\t\t\t<p style='font-size: 16px; font-weight: 300; margin: 0;'>We wanted to make sure you are aware that we will be storing your details securely and won't share them with any third party advertisers</br>Full details are available in our\n" +
			"\t\t\t\t\t\t\t<a style='color: " + colorLink +";' href=\""+policyURL+"\" target='_blank'>privacy policy</a></p>\n" +
			"\t\t\t\t\t</div>\n" +
			"\t\t\t\t\t<div class=\"sub-confirm-title\" style='font-size: 14px; color: #808080; margin: 0 0 45px; font-weight: 300;'>Please confirm you'd like to subscribe...</div>\n" +
			"\t\t\t\t\t<a class=\"btn btn-confirm\" style='padding: 16px 35px; font-size: 15px; font-weight: 700;\tborder-radius: 10px; display: inline-block; border: none; background: " + colorLink +"; color: " + btnTextColour+"; '>SUBSCRIBE NOW</a>\n" +
			"\t\t\t\t</div>\n" +
			"\t\t\t</div>\n" +
			"\t\t</section>");
	}

	// Fade out on confirm and submit form
	$(modalSelector + ' .btn-confirm').click(function () {
		$(modalSelector).fadeOut();
		GDRPaccepted = true;
		$(formID).submit();
	});

	// Fade out on btn close
	$(modalSelector + ' .btn-close, ' + modalSelector + ' .sub-overlay').click(function () {
		$(modalSelector).fadeOut();
	});


	$(formID).submit(function (e) {
		if(GDRPaccepted === false) {
			e.preventDefault();
			e.stopImmediatePropagation();

			// Fade modal in
			$(modalSelector).fadeIn();

		}
	});
}