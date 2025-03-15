 const textElement = document.getElementById('sculptorText');
		const text = textElement.textContent;

		function animateText() {
			//fade out the text
			textElement.classList.add('fade-out');

			setTimeout(() => {
				//clear the text
				textElement.textContent = '';
				textElement.classList.remove('fade-out');

				//Add the typewriter effect
				textElement.classList.add('typewriter');
				let i = 0;
				const typingInterval = setInterval(() => {
					if (i < text.length) {
						textElement.textContent += text.charAt(i)
						i++;
					}

					else {
						clearInterval(typingInterval);
						//Remove typewriter effect after completion
						setTimeout(() => {
							textElement.classList.remove('typewriter');
							///Restart the animation
							setTimeout(animateText, 760);
						}, 760);
					}
				}, 76); // Adjust typing speed here
			}, 760); //Wait for fade-out to complete

		}
		//Start the animation
		animateText();

		// ---------------------------Toggle Menu------------------

		function showMenu() {
			document.getElementById("navLinks").style.right = "0";
		}
		
		function hideMenu() {
			document.getElementById("navLinks").style.right = "-200px";
		}
		

		//----------------------Facebook ---------------------
		function openFacebookProfile() {
			var appLink = "fb://profile/100007563167816";
			var webLink = "https://www.facebook.com/profile.php?id=100007563167816";
		
			// Create a hidden iframe to attempt to open the Facebook app
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = appLink;
			document.body.appendChild(iframe);
		
			// Fallback to the web link if the app is not installed
			setTimeout(function() {
				window.location = webLink;
				document.body.removeChild(iframe);
			}, 1500);
		}

 // ---------------JavaScript to load content based on URL parameters----------

		function redirectToDescription(imageSrc, description) {
			const url = `description.html?image=${encodeURIComponent(imageSrc)}&description=${encodeURIComponent(description)}`;
			window.location.href = url;
		}


		