import {flatobject} from '../data/flatobject.js'

export default class User{
    constructor({id , name , username , email , address : _address}){
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this._address = _address
    }

    get address(){
        return flatobject(this._address)
    }

    render(COLUMNS){
        const tr = document.createElement('tr')
        COLUMNS.length = 5 
        COLUMNS.forEach(colum =>{
            const td = document.createElement('td')
            td.textContent = this[colum]
            tr.appendChild(td)
        })
        const div = document.createElement('div')
        div.style.cursor = 'pointer'
        div.style.color = 'darkred'
        div.style.margin = '10px'
        div.textContent = 'X'
        const deleteIcon = document.createElement('td')
        div.addEventListener('click' , (event) =>{
            event.target.parentElement.parentElement.remove()
        })
        deleteIcon.appendChild(div)
        tr.appendChild(deleteIcon)
        return tr
    }
}