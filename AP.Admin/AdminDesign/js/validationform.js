$(window).load(function() {
	$(function() {
		//Initiate Global variables
		var input = $('.field input'),
			holder = {},
			active;
		//Initiate fieldInfo type
		function fieldInfo(lbl, length) {
			Array.prototype.max = function() {
				return Math.max.apply(null, this);
			};
			Array.prototype.min = function() {
				return Math.min.apply(null, this);
			};

			//Input name value
			this.name = lbl;
			//Input Max - Min value
			if (typeof length === 'string') {
				var x = length.split(',', 2);
				for (i = 0; i < x.length; i++) {
					x[i] = parseInt(x[i]);
				}
				this.max = x.max();
				this.min = x.min();
			}
		}
		//Initiate Object for each input
		input.each(function() {
			holder[$(this).attr('id')] = new fieldInfo(
				$(this).next().text(),
				$(this).attr('data-length')
			);
		});
		//Focus Event
		input.on('focus', function() {
			$(this).parent().addClass('focused');
			//Fill golbal value
			active = holder[$(this).attr('id')];
			//Case Input Has Any Error
			if ($(this).parent().hasClass('error'))
				$(this).next().text(active.name);
		});
		//Blur Event
		input.on('blur', function() {
			$(this).parent().removeClass('focused');
			//Case input is empty
			if ($(this).val() === '') {
				$(this).parent().removeClass('full');
				//Case input is empty and is required
				if ($(this).attr('required'))
					$(this).next().text('This Filed Is Required')
					.parent().addClass('error');
			}
			//Case input is Not empty
			else {
				$(this).parent().addClass('full');
				//Case input is Not empty and is required
				if ($(this).attr('required'))
					$(this).parent().removeClass('error');
				//Check for Max - Min length
				if ($(this).attr('data-length')) {
					if ($(this).val().length < active.min || $(this).val().length > active.max) {
						$(this).next().text('The ' + active.name + ' must be more than ' + active.min + ' and less than ' + active.max + ' characters')
							.parent().addClass('error');
					}
				}
			}
		});
	});

	// Talk to Us JS


	//variables
	var name = $(".number input");
	email = $(".email input");
	comment = $(".comment textarea");
	captcha = $(".captcha input")
	modal_name = $(".modal span");
	modal = $(".modal");

	//hide modal
	modal.hide();

	//check if name is empty
	name.on("blur", function() {
		var $this = $(this);
		if ($this.val().length === 0 ||
			$this.val() === "Name") {
			$this.addClass("invalid");
			$this.val("Name");
		} else {
			$this.addClass("valid");
		}
	});

	//check if email is empty
	email.on("blur", function() {
		var $this = $(this);
		if ($this.val().length === 0 ||
			$this.val() === "Email") {
			$this.addClass("invalid");
		}
	});

	//check if email is valid
	email.on("blur", function() {
		var $this = $(this);
		if ($this.val().indexOf("." && "@") > -1) {
			$this.addClass("valid");
		} else {
			$this.addClass("invalid");
			$this.val("Email");
		}
	});

	//check if textarea is empty
	comment.on("blur", function() {
		var $this = $(this);
		if ($this.val() === "") {
			$this.addClass("invalid");
			$this.val("Comments");
		} else {
			$this.addClass("valid");
		}
	});
	// Checks the captcha is empty or not
	captcha.on("blur", function() {
		var $this = $(this);
		if ($this.val() === "") {
			$this.addClass("invalid");
		} else {
			$this.addClass("valid");
		}
	});

	//clear inputs on click
	$(".input").on("focus", function() {
		$(this).val("");
	});

	//show modal when inputs are valid and button
	//is clicked
	$(".submit").on("click", function() {
		if (name.val() !== "Name" && name.val() !== "" &&
			email.val() !== "Email" &&
			email.val() !== "" &&
			comment.val() !== "Comments" &&
			comment.val() !== "" &&
			captcha.val() !== "captcha" &&
			captcha.val() !== ""
		) {
			//remove invalid/valid classes
			name.removeClass().addClass("input");
			email.removeClass().addClass("input");
			comment.removeClass().addClass("input");
			captcha.removeClass().addClass("input");

			//modal box
			modal_name.text(name.val());
			modal.slideDown("medium")
				.delay(2000).slideUp("fast");

			//put default text back
			name.val("Name");
			email.val("Email");
			comment.val("Comments");
			captcha.val('');

			return false;
		} else {

			return false;
		}
	});
});


$(function() {

	var mathenticate = {
		bounds: {
			lower: 5,
			upper: 50
		},
		first: 0,
		second: 0,
		generate: function() {
			this.first = Math.floor(Math.random() * this.bounds.lower) + 1;
			this.second = Math.floor(Math.random() * this.bounds.upper) + 1;
		},
		show: function() {
			return this.first + ' + ' + this.second;
		},
		solve: function() {
			return this.first + this.second;
		}
	};
	mathenticate.generate();
	var $auth = $('<input type="text" id="" name="auth" required="required" />');
	$auth
		.attr('placeholder', mathenticate.show())
		.insertAfter('.confirm');

	$('#form').on('submit', function(e) {
		e.preventDefault();
		if ($auth.val() != mathenticate.solve()) {
			alert('Wrong Captcha!');
		}
	});

});

// Captcha JS Starts Here
$(document).ready(function() {
	initCaptcha();

	setInterval(function() {
		initCaptcha();
	}, 10000);
});

function initCaptcha() {
	var captcha = generateCaptcha(),
		captchaAns = eval(captcha);

	$("#captcha")
		.attr("placeholder", captcha + " = ")
		.on("keyup", function() {
			if ($(this).val() !== "" && $(this).val() == captchaAns)
				$(this).addClass("correct");
			else
				$(this).removeClass("correct");
		});
}

function generateCaptcha() {
	var randomNo = function(n) {
		return Math.floor(Math.random() * n + 1);
	}

	var randomOp = function() {
		return "+-*" [randomNo(3) - 1];
	}
	return randomNo(10) + " " + randomOp() + " " + randomNo(10);
}



// Captcha JS Starts Here
$(document).ready(function() {
	initCaptcha();

	setInterval(function() {
		initCaptcha();
	}, 10000);
});

function initCaptcha() {
	var captcha = generateCaptcha(),
		captchaAns = eval(captcha);

	$("#captcha")
		.attr("placeholder", captcha + " = ")
		.on("keyup", function() {
			if ($(this).val() !== "" && $(this).val() == captchaAns)
				$(this).addClass("correct");
			else
				$(this).removeClass("correct");
		});
}

function generateCaptcha() {
	var randomNo = function(n) {
		return Math.floor(Math.random() * n + 1);
	}

	var randomOp = function() {
		return "+-*" [randomNo(3) - 1];
	}
	return randomNo(10) + " " + randomOp() + " " + randomNo(10);
}
