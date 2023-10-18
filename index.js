let yearDropdown = document.getElementById('year')

// Create an option for each year from 1923 to 2023
for (let year = 2023; year >= 1923; year--) {
    let option = document.createElement('option')
    option.value = year
    option.text = year
    yearDropdown.appendChild(option)
}