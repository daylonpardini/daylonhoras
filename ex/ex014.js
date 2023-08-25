var agora = new Date()
var hora = agora.getDay()

if(hora < 12){
    console.log(`Bom dia, a hora exata é ${hora}`)
}
else if(hora <= 4){
    console.log(`Boa madrugada, a hora exata é ${hora}`)
}

else if(hora < 18){
    console.log(`Boa tarde, a hora exata é ${hora}`)
}
else{
    console.log(`Boa noite, a hora exata é ${hora}`)
}