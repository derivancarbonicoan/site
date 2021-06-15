var nodemailer = require('nodemailer');

var remetente = nodemailer.createTransport({
    host: 'br924.hostgator.com.br',
    service: 'br924.hostgator.com.br',
    port: 587,
    secure: false,
    auth:{
    user: 'ti@transportesbaggeto.com.br',
    pass: '5kr8@1.' }
    });

    var emailASerEnviado = {
        from: 'ti@transportesbaggeto.com.br',
        to: 'ti@transportesbaggeto.com.br',
        subject: 'Enviando Email com Node.js',
        text: 'Estou te enviando este email com node.js',
        };


        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log('Email enviado com sucesso.');
            }
            });
