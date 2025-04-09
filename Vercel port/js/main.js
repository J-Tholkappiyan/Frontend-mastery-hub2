// Smooth scrolling for navigation links
$(document).ready(function () {
	$("a.js-scroll").on("click", function (event) {
	  if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$("html, body").animate(
		  {
			scrollTop: $(hash).offset().top,
		  },
		  800,
		  function () {
			window.location.hash = hash;
		  }
		);
	  }
	});
  
	// Typed.js for typing animation
	var typed = new Typed("#typed", {
		strings: [
		  "Web Developer",
		  "Tech Enthusiast",
		  "Problem Solver",
		],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true,
		cursorChar: "|", // Custom cursor
		backDelay: 1500, // Delay before backspacing
	  });
  
	// Counter-Up for statistics
	$(".counter").counterUp({
	  delay: 10,
	  time: 1000,
	});
  
	// Lightbox for project images
	$(document).on("click", '[data-lightbox="gallery-mf"]', function (event) {
	  event.preventDefault();
	  $(this).ekkoLightbox();
	});
  
	// Form validation
	$(".contactForm").validate({
	  rules: {
		name: {
		  required: true,
		  minlength: 4,
		},
		email: {
		  required: true,
		  email: true,
		},
		message: {
		  required: true,
		},
	  },
	  messages: {
		name: {
		  required: "Please enter your name",
		  minlength: "Your name must be at least 4 characters long",
		},
		email: {
		  required: "Please enter your email",
		  email: "Please enter a valid email address",
		},
		message: {
		  required: "Please write a message",
		},
	  },
	  submitHandler: function (form) {
		$("#sendmessage").addClass("show");
		$("#errormessage").removeClass("show");
		$(".contactForm").find("input, textarea").val("");
		return false;
	  },
	});
  });
  document.addEventListener("DOMContentLoaded", function () {
	const progressBars = document.querySelectorAll(".progress-bar");
	progressBars.forEach((bar) => {
	  const percent = bar.getAttribute("data-percent");
	  bar.style.setProperty("--percent", `${percent}%`);
	});
  });