function validar(){

    var nome = formuser.firstname.value;
    var sobrenome = formuser.lastname.value;
    var telefone = formuser.telefone.value;
    var cpf = formuser.cpf.value;
    var rg = formuser.rg.value;
    var carteira = formuser.carteira.value;
    var endereco = formuser.endereco.value;
    var cidade = formuser.cidade.value;
    var cep = formuser.cep.value;
    var habilitacao = formuser.habilitacao.value;
    var empresa9 = formuser.empresa9.value;
    var empresa10 = formuser.empresa10.value;
    var dataNasc = document.getElementById("dataNasc");
    var dataVenc = document.getElementById("dataVenc");
    var dataEmi = document.getElementById("dataEmi");
    var dataPri = document.getElementById("dataPri");

    if(nome == ""){
        alert('Preencha o campo nome para Continuar.')
        formuser.firstname.focus();
        return false;
    }

    if(sobrenome == ""){
        alert('Preencha o campo Sobre Nome para Continuar.')
        formuser.lastname.focus();
        return false;
    }

    if(telefone == ""){
        alert('Preencha o campo Telefone para Continuar.')
        formuser.telefone.focus();
        return false;
    }

    if(cpf == ""){
        alert('Preencha o campo CPF para Continuar.')
        formuser.cpf.focus();
        return false;
    }

    if(rg == ""){
        alert('Preencha o campo RG para Continuar.')
        formuser.rg.focus();
        return false;
    }

    if(carteira == ""){
        alert('Preencha o campo Carteira de Trabalho para Continuar.')
        formuser.carteira.focus();
        return false;
    }

    if(endereco == ""){
        alert('Preencha o campo Endereço para Continuar.')
        formuser.endereco.focus();
        return false;
    }

    if(cidade == ""){
        alert('Preencha o campo Cidade para Continuar.')
        formuser.cidade.focus();
        return false;
    }

    if(cep == ""){
        alert('Preencha o campo CEP para Continuar.')
        formuser.cep.focus();
        return false;
    }

    if(habilitacao == ""){
        alert('Preencha o campo Habilitação para Continuar.')
        formuser.habilitacao.focus();
        return false;
    }

    if(empresa9 == ""){
        alert('Preencha o campo Nome (Referências Pessoais) para Continuar.')
        formuser.empresa9.focus();
        return false;
    }

    if(empresa10 == ""){
        alert('Preencha o campo Telefone (Referências Pessoais) para Continuar.')
        formuser.empresa10.focus();
        return false;
    }
	
    if(dataNasc.value == ''){
    	alert("Data Nascimento não Preenchida!");
    	return false;
    }

    if(dataVenc.value == ''){
    	alert("Data Vencimento não Preenchida!");
    	return false;
    }

    if(dataEmi.value == ''){
    	alert("Data Emissão não Preenchida!");
    	return false;
    }

    if(dataPri.value == ''){
    	alert("Data Primeira Habilitação não Preenchida!");
    	return false;
    }

    else{
        alert("Seu Formulário foi enviado com Sucesso! Entraremos em Contato.");
        window.location.reload();
       
    }
    
    formuser.firstname.focus();
    return false;
    
}