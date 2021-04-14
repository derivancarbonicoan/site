function validar(){

    var nome = formuser.firstname.value;

    if(nome == ""){
        alert('Preencha o campo nome para Continuar.')
        formuser.nome.focus();
        return false;
    }

}