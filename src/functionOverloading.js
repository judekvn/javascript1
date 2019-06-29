function greet(firstname, lastname, lang){
    
    if(lang === 'en'){
        console.log(firstname + ' ' + lastname + ' ' + lang)
    }

    if(lang === 'es'){
        console.log(firstname + ' ' + lastname + ' ' + lang)
    }
    
}

function greetEng(firstname, lastname) {
    greet(firstname, lastname, 'en')    
}

function greetSpa(firstname, lastname) {
    greet(firstname, lastname, 'es') 
}

greetEng('john', 'kennedy')
greetSpa('james', 'gunn')