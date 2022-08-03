import request from './request/request.js'
import {create_table} from './render/create_table.js' 
import sheet from './assets/css/table.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];


const root  = document.getElementById('root')
export const table = document.createElement('table')


request('https://jsonplaceholder.typicode.com/users').then(data => create_table(data))

root.appendChild(table)