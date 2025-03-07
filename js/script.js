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
		

		