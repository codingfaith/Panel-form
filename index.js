const yearDropdown = document.getElementById('year')
// Create an option for each year from 1923 to 2023
for (let year = 2023; year >= 1923; year--) {
    let option = document.createElement('option')
    option.value = year
    option.text = year
    yearDropdown.appendChild(option)
}
//handle form submission
const form = document.getElementById("form")
const thanksDiv = document.getElementById("thanks")
const submitBtn = document.getElementById("submit")
const consentCheckbox = document.getElementById("consent");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if (consentCheckbox.checked) {
        thanksDiv.style.display = "block"
        form.style.display = "none"  
    }else {
        alert("Please agree to the terms and conditions.")
    }
})  
   