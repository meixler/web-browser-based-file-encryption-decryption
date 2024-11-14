
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

//Inica logica de ecriptacion

//Crear objeto documento para señalar el boton

var botonDes = document.querySelector("#btn-desencriptar");

botonDes.addEventListener("click", function(event){
	event.preventDefault();
	//console.log("This is desencriptacion");
	var desencriptar = document.querySelector("#input-texto").value;
	//console.log(desencriptar);
	var mensajeDes = document.querySelector("#msg");
	desencriptar = desencriptar.toLowerCase();
	var desencriptar2 = "";
	
	//Detectar substring, luego cortar el string, luego meter la vocal en el lugar correcto, luego sumar los substring
	//Finalmente unir todos los substring
	
	
	//Detectar todas las ocurrencias de encriptación
	
	 
	/*
	var detectarA = desencriptar.indexOf("ai");
	var detectarE = desencriptar.indexOf("enter");
	var detectarI = desencriptar.indexOf("imes");
	var detectarO = desencriptar.indexOf("ober");
	var detectarU = desencriptar.indexOf("ufat");
	*/
	
	function seekDestroy (secuencia){
		//First the seek part
		//var detectar = desencriptar.indexOf(secuencia);
		var letra = "";
		if (secuencia == "ai"){
			letra = "a";
			console.log("Entro en ai " + letra);
		}else if (secuencia == "enter"){
			letra = "e";
			console.log("Entro en enter " + letra);
		}else if (secuencia == "imes"){
			letra = "i";
			console.log("Entro en imes " + letra);
		}else if (secuencia == "ober"){
			letra = "o"
			console.log("Entro en ober " + letra);
		}else if (secuencia == "ufat"){
			letra = "u";
			console.log("Entro en ufat " + letra);
		}
		/*
		var detenerWhile = true;
		var count = 0;
		while(detenerWhile){
			if(detectar != -1){
				
				console.log("contando las iteraciones " + count + "This is detectar " + detectar);
				
				var res = desencriptar.split(secuencia);
				console.log("this is res after split "+ res);
				res.splice(detectar,0,letra);
				console.log("index of primero" + res.indexOf("a"));
				console.log("This is res after splice " + res)
				console.log("index of primero" + res.indexOf("a"));
				var res2 = res.join("");
				console.log("this is res2 after join "+ res2);
				
				desencriptar = res2 //a la variable que le hiciste todas las modificaciones
				count++
				var detectar = desencriptar.indexOf(secuencia);
				
				
				
			}else if (detectar == -1) {
				detenerWhile = false;
			}
			if(count == 5){
				detenerWhile = false;
			}
			
		}
		*/
			desencriptar = desencriptar.replaceAll(secuencia, letra);
			console.log("This is desencriptar " + desencriptar);
		
		
		//End of seek part
		
		
		
		
		//Replace by going just one sequence at a time
		
		//End of Replace part
		console.log("this is desencriptar final " + desencriptar)
		return desencriptar;
		
	}
	
	//Final de detectar todas las ocurrencias de la encriptación

	/*
	var detectorIndice = [];
	
	
	if(detectarE != -1){
		var resE = desencriptar.split("enter");
		
		console.log("this is resE first "+ resE);
		resE.splice(detectarE,0,"e");
		var resE2 = resE.join("");
		console.log("this is resE after splice and join "+ resE2);
		var detectarA = resE2.indexOf("ai");
		console.log("This is detectarA " + detectarA);
	} 
	else{
		var detectarA = resE2.indexOf("ai");
	}
	if(detectarA != -1){
		var resA = resE2.split("ai");
		//console.log("this is resE first "+ resE);
		resA.splice(detectarA,0,"a");
		var resA2 = resA.join("");
		var detectarU = resA2.indexOf("ufat");
		console.log("This is resA after join " + resA2);
	}
	
	*/
	
	//console.log("This should be the final product "+resO2);
	
	/*var resA = desencriptar.split("ai");
	var resI = desencriptar.split("imes");
	var resO = desencriptar.split("ober");
	var resU = desencriptar.split("ufat");
	*/
	
	
	seekDestroy("ai");
	seekDestroy("enter");
	seekDestroy("imes");
	seekDestroy("ober");
	seekDestroy("ufat");
	mensajeDes.value = desencriptar;
	
})

//Termina logina de desencriptacion





















//Inicia logica de ecriptacion

var botonEnc = document.querySelector("#btn-encriptar");
 
// hacer funcionar el click del boton y que imprima "codificando". Despues de imprimir codificando, pasamos a imprimir el
// input de la caja de texto
botonEnc.addEventListener("click", function(event){
	event.preventDefault();
	// Tomar el input de la caja de texto e imprimirlo en la consola
	var textoEnc = document.querySelector("#input-texto");
	var encriptado = textoEnc.value;
	//console.log(typeof(encriptado));
	encriptado = encriptado.toLowerCase();
	var encriptadoFinal = encriptado.split('');
	for(var i = 0; i < encriptadoFinal.length; i++){
		//console.log("this encriptado[i] " + encriptado[i]);
		if(encriptadoFinal[i] == "a"){
			encriptadoFinal[i] = "ai";
		
		} else if(encriptadoFinal[i] == "e"){
		encriptadoFinal[i] = "enter";
		
		} else if(encriptadoFinal[i] == "i"){
		encriptadoFinal[i] = "imes";
		} else if(encriptadoFinal[i] == "o"){
		encriptadoFinal[i] = "ober";
		} else if(encriptadoFinal[i] == "u"){
		encriptadoFinal[i] = "ufat";
		}
		
	
	}
	var encriptadoFinal2 = encriptadoFinal.join("");
	var escribirEnc = document.querySelector("#msg");
	escribirEnc.value = encriptadoFinal2; 
	console.log(encriptadoFinal2);
//console.log("this length "+encriptado.length);
	
})


















	
