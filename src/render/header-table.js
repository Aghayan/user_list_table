
export default function render_headers_page(title){
    const tr = document.createElement('tr')
    title.forEach(element => {
        const th = document.createElement('th')
        th.textContent = element
        tr.appendChild(th)
    });
    return tr
}