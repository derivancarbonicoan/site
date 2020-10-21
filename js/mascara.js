function mascaraCPF(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }

 function mascaraRG(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "9");
    if (v.length == 1 || v.length == 5) i.value += ".";
     
 }

 function mascaraCarteiraTrabalho(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 9) i.value += ".";
    if (v.length == 12) i.value += "-";
 
 }

 function mascaraCep(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "9");
    if (v.length == 5) i.value += "-";
 
 }

 function mascaraHabilitacao(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ 
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "11");
     
 }

 function mascaraTelefoneCelular(telefone){ 

    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 

    if(telefone.value.length == 3)
        telefone.value = telefone.value + ')'; 

        if(telefone.value.length == 5)
        telefone.value = telefone.value + '.';

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-';

        telefone.setAttribute("maxlength", "15")
}

function mascaraTelefoneFixo(telefone){ 

    if(telefone.value.length == 0)
        telefone.value = '(' + telefone.value; 

    if(telefone.value.length == 3)
        telefone.value = telefone.value + ')'; 

        if(telefone.value.length == 5)
        telefone.value = telefone.value + '.';

    if(telefone.value.length == 10)
        telefone.value = telefone.value + '-';

        telefone.setAttribute("maxlength", "13")
}