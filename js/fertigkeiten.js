import Nodetype from "./nodetype.js"

export default class Fertigkeiten extends Nodetype {
    constructor() {
        super()
        this.Fertigkeiten = document.querySelector('.fertigkeiten')
        this.mentaleFertigkeiten = [
            'Bildung',
            'Fassung',
            'Handwerk',
            'Medizin',
            'Wahrnehmung',
            'Zauberei'
        ]
        this.koerperlicheFertigkeiten = [
            'Diebstahl',
            'Fahren',
            'Fitness',
            'Heimlichkeit',
            'Kämpfen',
            'Schießen',
            'Überleben'
        ]
        this.sozialeFertigkeiten = [
            'Auftreten',
            'Empathie',
            'Etikette',
            'Gassenwissen',
            'Provozieren',
            'Überreden',
            'Tierkunde'
        ]
        this.Fertigkeiten.innerHTML = `
            <div class='fertigkeiten__container'>
                <h3>Mentale Fertigkeiten</h3>
                ${this.mentaleFertigkeiten.map(fertigkeit => createFertigkeit(fertigkeit)).join('')}
            </div>
            <div class='fertigkeiten__container'>
                <h3>Körperliche Fertigkeiten</h3>
                ${this.koerperlicheFertigkeiten.map(fertigkeit => createFertigkeit(fertigkeit)).join('')}
            </div>
            <div class='fertigkeiten__container'>
                <h3>Soziale Fertigkeiten</h3>
                ${this.sozialeFertigkeiten.map(fertigkeit => createFertigkeit(fertigkeit)).join('')}
            </div>
        `
    }
}

function createFertigkeit(title = '') {
    return `
        <div class='fertigkeit'>
            <p>${title}</p>
            <div></div>
        </div>`
}
