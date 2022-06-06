const input = document.querySelectorAll('input')

input.forEach(add =>{
    add.addEventListener('focus', e =>{   
        const span = add.previousElementSibling
        span.classList.add('span-com-foco')
    })
})

input.forEach(remove =>{
    remove.addEventListener('focusout', e =>{   
        if(remove.value == ''){
        const span = remove.previousElementSibling
        span.classList.remove('span-com-foco')
    }})
})







