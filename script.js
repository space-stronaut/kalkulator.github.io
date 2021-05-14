const input1 = document.querySelector('.search-1');
const input2 = document.querySelector('.search-2');
const plus = document.querySelector('#plus');
const min = document.querySelector('#min');
const bagi = document.querySelector('#bagi');
const kali = document.querySelector('#kali');
const res = document.querySelector('#result');


function tambahkan(a,b) {
    return a + b
}

function kalikan(a,b) {
    return a * b
}

function bagikan(a,b) {
    return a / b
}

function kurangi(a,b) {
    return a - b
}

plus.addEventListener('click', function(){
    if (input1.value === '') {
        input1.focus()

        return false
    }
    else if(input2.value === ''){
        input2.focus()

        return false
    }
    res.textContent = tambahkan(parseInt(input1.value),parseInt(input2.value))
    input1.value = '';
    input2.value = '';

    return true
})

min.addEventListener('click', function(){
    if (input1.value === '') {
        input1.focus()

        return false
    }
    else if(input2.value === ''){
        input2.focus()

        return false
    }
    res.textContent = kurangi(parseInt(input1.value),parseInt(input2.value))
    input1.value = '';
    input2.value = '';

    return true;
})

bagi.addEventListener('click', function(){
    if (input1.value === '') {
        input1.focus()

        return false
    }
    else if(input2.value === ''){
        input2.focus()

        return false
    }
    res.textContent = bagikan(parseInt(input1.value),parseInt(input2.value))
    input1.value = '';
    input2.value = '';

    return true;
})

kali.addEventListener('click', function(){
    if (input1.value === '') {
        input1.focus()

        return false
    }
    else if(input2.value === ''){
        input2.focus()

        return false
    }
    res.textContent = kalikan(parseInt(input1.value),parseInt(input2.value))
    input1.value = '';
    input2.value = '';

    return true
})

