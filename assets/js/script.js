document.querySelector(".card-number-input").oninput = () => {
    document.querySelector(".card-number-box").innerText =
      document.querySelector(".card-number-input").value;
  };

  document.querySelector(".card-holder-input").oninput = () => {
    document.querySelector(".card-holder-name").innerText =
      document.querySelector(".card-holder-input").value;
  };


  document.querySelector(".month-input").oninput = () => {
    document.querySelector(".exp-month").innerText =
      document.querySelector(".month-input").value;
  };

  document.querySelector(".year-input").oninput = () => {
    document.querySelector(".exp- ").innerText =
      document.querySelector(".year-input").value;
  };

  document.querySelector(".cvv-input").onmouseenter = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  };

  document.querySelector(".cvv-input").onmouseleave = () => {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  };

  document.querySelector(".cvv-input").oninput = () => {
    document.querySelector(".cvv-box").innerText =
      document.querySelector(".cvv-input").value;
  };

  document.getElementById('card-number').addEventListener('input', function (event) {
    const cardNumber = event.target.value;
    const cardImage = document.getElementById('card-image');
    const cardFront = document.getElementById('front');
    const cardBack = document.getElementById('back');
  
    // Check card type and update image and background cardBack
    if (/^4/.test(cardNumber)) {
      cardImage.src = 'visa.png';
      cardImage.alt = 'Visa Card';
      cardFront.style.background = 'linear-gradient(45deg, #4B9CD3, #1A73E8)';
      cardBack.style.background = 'linear-gradient(45deg, #4B9CD3, #1A73E8)';
    } else if (/^5/.test(cardNumber)) {
      cardImage.src = 'mastercard.png';
      cardImage.alt = 'MasterCard';
      cardFront.style.background = 'linear-gradient(45deg, #000 90%, #FF5F00 90%, #FF9E1A)';
      cardBack.style.background='linear-gradient(45deg, #000 90%, #FF5F00 90%, #FF9E1A)';
    } else if (/^3  /.test(cardNumber)) {
      cardImage.src = 'amex.png';
      cardImage.alt = 'American Express';
      cardFront.style.background = 'linear-gradient(45deg, #2D4B7F, #0A5D96)';
      cardBack.style.background= 'linear-gradient(45deg, #2D4B7F, #0A5D96)';
 
    } else if (/^6/.test(cardNumber)) {
      cardImage.src = 'discover.png';
      cardImage.alt = 'Discover Card';
      cardFront.style.background = 'linear-gradient(45deg, #bfbfbf, #FF9900)'; // Discover gradient (orange tones)
      cardBack.style.background=  'linear-gradient(45deg, #bfbfbf, #FF9900)';

  } else {
    //   cardImage.src = 'visa.png';
    //   cardImage.alt = 'Visa Card';
      cardFront.style.background = 'linear-gradient(45deg, #BB1900, #FD6F01, #FFB000);'; // Reset background if no match
      cardBack.style.background = 'linear-gradient(45deg, #BB1900, #FD6F01, #FFB000);';

    }
  });
 
