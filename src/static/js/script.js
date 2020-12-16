const input = document.querySelector('.input')
const data = document.querySelectorAll('.table-all tr')

input.addEventListener('input', () => {
    console.log(input.value.length)
    if(input.value.length === 0) {
        for(let i = 0; i < data.length; i++) {
            data[i].style.display = ""
        }
    }

    for(let i = 1; i < data.length; i++) {
        if((data[i].innerText).includes(input.value)) {
            data[i].style.display = ""
        } else {
            data[i].style.display = "none"
        }
    }
})

const tableBottom = document.querySelectorAll(".table-set td")
const tableTop = document.querySelectorAll(".table-all td")
const bottomDiv = document.querySelector(".bottom-div")

for(let i = 0; i < tableBottom.length; i++) {
    tableBottom[i].addEventListener('click', (event) => {
    console.log("mrs")
        for(let j = 0; j < tableTop.length; j++) {
            if(tableBottom[i].innerText === tableTop[j].innerText) {
                let clickedItem = tableTop[j].parentElement.cloneNode(true)
                bottomDiv.appendChild(clickedItem)
            }
        }

    })
}