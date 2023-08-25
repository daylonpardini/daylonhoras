function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 8//data.getHours()
    var night1 = window.document.getElementById('night1')
    var night2 = window.document.getElementById('night2')
    var night3 = window.document.getElementById('night3')
    var back = window.document.getElementById('back')
    msg.innerHTML = `Agora sao <strong>${hora}</strong> Horas!`

    if (hora >= 5 && hora <= 12){
        img.src = 'img/dia.png'
        back.style.background = 'red'
        night1.style.display = 'none'
        night2.style.display = 'none'
        night3.style.display = 'none'
        

    }

    else if (hora > 12 && hora < 18){
        img.src = 'img/tarde.png'
        back.style.background = 'orange'
    }

    else {
        img.src = 'img/noite.png'
        night1.style.display = 'unset'
        night2.style.display = 'unset'
        night3.style.display = 'unset'

    }
}



