function render(users)
{
    let html = ''
    
    users.forEach((item) => {
        html += `
            <li class="list-group-item">
                <img src="${item.profile_img}">
                <a href="${item.username}">${item.username}</a>
            </li>`
    })
    
    document.querySelector('ul').innerHTML = html
    document.querySelector('input').value = ''
}