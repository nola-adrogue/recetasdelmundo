const form = document.querySelector ("#signup")
const email = document.querySelector ("#email")
const emailHelp = document.querySelector ("#emailHelp")

form.addEventListener ("submit", (event) => {
event.preventDefault ()
{if (email.value === "") {emailHelp.innerText = "please add a valid email address"}
}
else {form.submit ();
}
})