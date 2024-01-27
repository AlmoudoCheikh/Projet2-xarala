


let contact = [
    // { titre: "banane", montant: "300.000" },
    // { titre: "pomme", montant: "200.000" },
]


function calculerTotalDepense(contacts) {
    const totalDepense = contacts.reduce((acc, depense) => Number(depense.montant) + acc, 0)
    document.getElementById('totalDepense').textContent = totalDepense + ' FCFA'
}
const countElement = document.querySelector('.count')
const table = document.querySelector('.table')
const tblBody = document.createElement('tbody')
//   fonction de compteur


//  Remplissage de la table
function createTable() {
    for (let index = 0; index < 2; index++) {
        let row = document.createElement('tr')
        // creer le button de suppression
        let buttonCell = document.createElement("td")
        let deleteButton = document.createElement("button")
        let buttonText = document.createTextNode("Supprimez")
        deleteButton.setAttribute("class", "delete-btn")
        deleteButton.appendChild(buttonText)
        for (let element = 0; element < contact.length; element++) {

            // ajouter les td
            const cell = document.createElement('td')
            const cellText = document.createTextNode(
                Object.values(contact[index])[element]
            )


            deleteButton.setAttribute('contactphone', contact[index].titre)
            buttonCell.appendChild(deleteButton)
            cell.appendChild(cellText)
            row.appendChild(cell)
            row.appendChild(buttonCell)
            row.setAttribute('id', contact[index].titre)

        }
        tblBody.appendChild(row)
    }
    table.appendChild(tblBody)
    document.body.appendChild(table)

}
createTable()
let deleteButton = document.querySelectorAll(".delete-btn")
deleteButton.forEach(function (button) {
    button.addEventListener('click', function () {
        const titre = this.getAttribute("contactphone");
        let row = document.getElementById(titre)
        row.parentNode.removeChild(row)
        // enléver l'élément supprimer
        let filterdContact = contact.filter((contact) => contact.titre !== titre)
        contact = filterdContact
        // setCount(contact.length)
    })
})

// modal
let modal = document.getElementById('contactModal')
let modalButton = document.getElementById('addContactModalButton')
let close = document.querySelector('.close')

modalButton.onclick = function () {
    modal.style.display = 'block'
}

close.onclick = function () {
    modal.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
// Ajouter un contact
let addContactButton = document.querySelector(".addContactButton")
addContactButton.onclick = function (event) {
    event.preventDefault()
    const titre = document.getElementById("titre").value
    const montant = document.getElementById("montant").value
    if (!titre || !montant) {
        alert("Merci de tout remplir")
        return
    }
    const newContact = { titre, montant }
    contact.push(newContact)
    console.log({ contact })
    calculerTotalDepense(contact)
    // setCount(contact.length)
    // ajouter un tr
    let row = document.createElement("tr")

    let cell0 = row.insertCell(0)
    const cell0Text = document.createTextNode(titre)
    cell0.appendChild(cell0Text)
    row.appendChild(cell0)

    let cell1 = row.insertCell(1)
    const cell1Text = document.createTextNode(montant)
    cell1.appendChild(cell1Text)
    row.appendChild(cell1)
    // creer le button de suppression
    let buttonCell = document.createElement("td")
    let deleteButton = document.createElement("button")
    let buttonText = document.createTextNode("Supprimez")
    deleteButton.setAttribute("class", "delete-btn")
    deleteButton.setAttribute("contactphone", titre)
    deleteButton.appendChild(buttonText)
    // ajouter un événement
    deleteButton.addEventListener('click', function () {

        const titre = this.getAttribute("contactphone");
        let row = document.getElementById(titre)
        row.parentNode.removeChild(row)
        // enléver l'élément supprimer
        let filterdContact = contact.filter((contact) => contact.titre !== titre)
        contact = filterdContact
        calculerTotalDepense(filterdContact)
        // setCount(contact.length)

    })
    buttonCell.appendChild(deleteButton)

    row.appendChild(buttonCell)

    row.setAttribute('id', titre)
    tblBody.appendChild(row)
    table.appendChild(tblBody)

    document.body.appendChild(table)
    // vider les inputs
    document.getElementById("titre").value = ''
    document.getElementById("montant").value = ''
    modal.style.display = 'none'
}

// setCount(contact.length)








// Partie revenue
function calculerTotalRevenu(revenus) {
    const totalRevenu = revenus.reduce((acc, revenu) => Number(revenu.montantR) + acc, 0)
    document.getElementById('totalRevenu').textContent = totalRevenu + ' FCFA'
}





let contactRevenu = [
    // { titreR: "banane", montantR: "300.000" }S
]

const countElementR = document.querySelector('.countR')
const tableR = document.querySelector('.tableR')
const tblBodyR = document.createElement('tbody')
//   fonction de compteur
function setCountR(countR) {
    countElementR.innerHTML = countR
}
//  Remplissage de la table

function createTableR() {
    for (let indexR = 0; indexR < 2; indexR++) {
        let rowR = document.createElement('tr')
        // creer le button de suppression
        let buttonCellR = document.createElement("td")
        let deleteButtonR = document.createElement("button")
        let buttonTextR = document.createTextNode("Supprimez")
        deleteButtonR.setAttribute("class", "delete-btn")
        deleteButtonR.appendChild(buttonTextR)
        for (let elementR = 0; elementR < contactRevenu.length; elementR++) {
            // ajouter les td

            const cellR = document.createElement('td')
            const cellTextR = document.createTextNode(
                Object.values(contactRevenu[indexR])[elementR]
            )


            deleteButtonR.setAttribute('contactphoneR', contactRevenu[indexR].titreR)
            buttonCellR.appendChild(deleteButtonR)
            cellR.appendChild(cellTextR)
            rowR.appendChild(cellR)
            rowR.appendChild(buttonCellR)
            rowR.setAttribute('id', contactRevenu[indexR].titreR)

        }
        tblBodyR.appendChild(rowR)
    }
    tableR.appendChild(tblBodyR)
    document.body.appendChild(tableR)

}
createTableR()


let deleteButtonR = document.querySelectorAll(".delete-btn")
deleteButtonR.forEach(function (button) {
    button.addEventListener('click', function () {
        const titreR = this.getAttribute("contactphoneR");
        let rowR = document.getElementById(titreR)
        rowR.parentNode.removeChild(rowR)
        // enléver l'élément supprimer
        let filterdContactR = contactRevenu.filter((contactRevenu) => contactRevenu.titreR !== titreR)
        contactRevenu = filterdContactR
        setCountR(contactRevenu.length)
    })
})

// modal Revenu

let modalR = document.getElementById('contactModalR')
let modalButtonR = document.querySelector('.addContactModalButtonR')
let closeR = document.querySelector('.closeR')

modalButtonR.onclick = function () {
    modalR.style.display = 'block'
}

closeR.onclick = function () {
    modalR.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == modalR) {
        modalR.style.display = 'none'
    }
}
// Ajouter un contact
let addContactButtonR = document.querySelector(".addContactButtonR")
addContactButtonR.onclick = function (event) {
    event.preventDefault()
    const titreR = document.getElementById("titreR").value
    const montantR = document.getElementById("montantR").value
    if (!titreR || !montantR) {
        alert("Merci de tout remplir")
        return
    }
    const newContactR = { titreR, montantR }
    contactRevenu.push(newContactR)
    calculerTotalRevenu(contactRevenu)
    // setCountR(contactRevenu.length)

    // ajouter un tr
    let rowR = document.createElement("tr")

    let cellR0 = rowR.insertCell(0)
    const cell0TextR = document.createTextNode(titreR)
    cellR0.appendChild(cell0TextR)
    rowR.appendChild(cellR0)

    let cellR1 = rowR.insertCell(1)
    const cell1TextR = document.createTextNode(montantR)
    cellR1.appendChild(cell1TextR)
    rowR.appendChild(cellR1)
    // creer le button de suppression
    let buttonCellR = document.createElement("td")
    let deleteButtonR = document.createElement("button")
    let buttonTextR = document.createTextNode("Supprimez")
    deleteButtonR.setAttribute("class", "delete-btn")
    deleteButtonR.setAttribute("contactphoneR", titreR)
    deleteButtonR.appendChild(buttonTextR)
    // ajouter un événement
    deleteButtonR.addEventListener('click', function () {

        const titreR = this.getAttribute("contactphoneR");
        let rowR = document.getElementById(titreR)
        rowR.parentNode.removeChild(rowR)
        // enléver l'élément supprimer
        let filterdContactR = contactRevenu.filter((contactRevenu) => contactRevenu.titreR !== titreR)
        contactRevenu = filterdContactR
        calculerTotalRevenu(filterdContactR)
        // setCountR(contactRevenu.length)

    })
    buttonCellR.appendChild(deleteButtonR)

    rowR.appendChild(buttonCellR)

    rowR.setAttribute('id', titreR)
    tblBodyR.appendChild(rowR)
    tableR.appendChild(tblBodyR)

    document.body.appendChild(tableR)
    // vider les input
    document.getElementById("titreR").value = ''
    document.getElementById("montantR").value = ''
    modalR.style.display = 'none'
}

// setCountR(contactRevenu.length)
function calculerTotalsolde(soldes) {
    const totalSolde = soldes.reduce((acc, solde) => Number(solde.montant) + acc, 0)
    document.getElementById('totalSolde').textContent = totalSolde + ' FCFA'
}
calculerTotalsolde(soldes)
