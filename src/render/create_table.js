import render_headers_page from './header-table.js'
import User from '../users/User.js'
import {COLUMNS} from '../data/COLUMNS.js'
import {table} from '../index.js'


export function create_table(users){
    table.appendChild( render_headers_page(COLUMNS))
    users.forEach(el => {
        const user = new User(el)
        table.appendChild(user.render(COLUMNS))
    });
}