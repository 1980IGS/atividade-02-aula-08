function resumo(){
var destinatario= document.getElementById("destinatario").value
var rua= document.getElementById("rua").value
var residencia= document.getElementById("residencia").value
var bairro= document.getElementById("bairro").value
var cidade= document.getElementById("cidade").value
var cep= document.getElementById("cep").value
var texto= "NOME:"+" "+destinatario+"</br>"+"RUA:"+" "+rua+"</br>"+"Nº:"+" "+residencia+"</br>"+"BAIRRO:"+" "+bairro+"</br>"+"CIDADE:"+" "+cidade+"</br>"+"CEP:"+" "+cep
document.getElementById("resumo").innerHTML=texto
}