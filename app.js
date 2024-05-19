const introInput = document.querySelector("[data-intro-input]");
const earlyAccessInput = document.querySelector("[data-early-access-input]");
const introBtn = document.querySelector("[data-intro-btn]");
const earlyAccessBtn = document.querySelector("[data-early-access-btn]");
const introErrorText = document.querySelector(".intro-error-text");
const earlyAccessErrorText = document.querySelector(".early-access-error-text");
const introFormInput = document.querySelector(".intro-input");
const earlyAccessFormInput = document.querySelector(".early-access-input");
const introForm = document.querySelector("[data-intro-form]");
const earlyAccessForm = document.querySelector("[data-early-access-form]");

//FUNCTIONS
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const checkInputsIntro = () => {
  let introInputValue = introInput.value.trim();
  console.log(introInputValue);
  if (introInputValue === "") {
    introErrorText.classList.add("active");
    introFormInput.style.borderColor = "red";
  } else if (!isValidEmail(introInputValue)) {
    introErrorText.classList.add("active");
    introFormInput.style.borderColor = "red";
  } else {
    introErrorText.classList.remove("active");
    introFormInput.style.borderColor = "hsl(238, 22%, 44%)";
  }
  introInput.value = "";
};

const checkInputsEarlyAccess = () => {
  let earlyAccessInputValue = earlyAccessInput.value.trim();
  console.log(earlyAccessInputValue);
  if (earlyAccessInputValue === "") {
    earlyAccessErrorText.classList.add("active");
    earlyAccessFormInput.style.borderColor = "red";
  } else if (!isValidEmail(earlyAccessInputValue)) {
    earlyAccessErrorText.classList.add("active");
    earlyAccessFormInput.style.borderColor = "red";
  } else {
    earlyAccessErrorText.classList.remove("active");
    earlyAccessFormInput.style.borderColor = "hsl(238, 22%, 44%)";
  }
  earlyAccessInput.value = "";
};

//EVENT LISTENERS
introForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsIntro();
});

earlyAccessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputsEarlyAccess();
});

introBtn.addEventListener("click", () => {
  checkInputsIntro();
});

earlyAccessBtn.addEventListener("click", () => {
  checkInputsEarlyAccess();
});
