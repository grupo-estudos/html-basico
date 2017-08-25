function validarFormulario(){
	var input1 = document.getElementById("input1");
	var input2 = document.getElementById("input2");
	
	input2.value = input1.value;
		
	if(!input1.value){
		alert("Deu Ruim!");
		return false;		
	}
	
	if(/Rafael/i.test(input1.value)){
		alert("Seu lindo!");
	}
		
	return true;		
}