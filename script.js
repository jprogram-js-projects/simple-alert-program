function checkValue(){
	var numero = document.getElementById('valorNum').value;
	
	if (numero < 10) {
		window.alert('Insuficiente | Insufficient');
	}
	
	else if(numero < 14){
		window.alert('Bom | Good');
	}
	
	else if(numero >= 14){
		window.alert('Muito Bom | Very Good');
	}

	else{
		window.alert('Valor Informado Inválido! | Invalid Informed Value');
	}

	printTableVal();
}

function printTableVal(){
	var valores = "Entre 0 e 10, 10 excluído, mostra “Insuficiente” "+
		"<br> Entre 10 e 14, 14 excluído, mostra “Bom” "+
		"<br> Maior que 14, mostra “Muito Bom” ";

	document.getElementById("evaluative_table").innerHTML = valores;	
}