const messages = [
  "Are you sure?",
  "Say sure??",
  "i will eat you, Are you sure?",
  "I will hit you,Pookie please...",
  "Just think about it!",
  "If you say no, I will be really sad...",
  "I will be very sad...",
  "I will be very very very sad...",
  "Ok fine, I will stop asking...",
  "Just kidding, say yes please! ❤️",
];

const images = [
  "https://media.giphy.com/media/jTfQtwVaqQaVh4ePJn/giphy.gif?cid=790b7611xbs8erkspnbhyshhowfoazmie26nxukp5bnpdbj6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/y9QemIlaYYWdi/giphy.gif?cid=ecf05e473pgtabybf9w7dnsa9f75td9ki8is09gv43wodchg&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/taEegvj6drkGc/giphy.gif?cid=ecf05e473pgtabybf9w7dnsa9f75td9ki8is09gv43wodchg&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTh6a2ozdDdrNXcwam43MjRpdTBveGt1NnY3ODhobzAweXMxZzc1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oQvpRPoB6BCyk/giphy.gif",
  "https://media.giphy.com/media/ae2iQ92YNHm4hR3Fcm/giphy.gif?cid=ecf05e47sauhuktmmjepg1noz77uim3zseq4vqoqpgken1h2&ep=v1_gifs_related&rid=giphy.gif&ct=g",
];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const gifImage = document.getElementById("gifImage");

  // Update text
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Increase YES button size
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  // Update image
  gifImage.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
