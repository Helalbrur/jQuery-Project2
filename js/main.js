var c=prompt("Enter 1 for calculate grade \nEnter 2 for calculator");
switch(c){
	case "1":
		var m=prompt("Enter your mark");
		// if(m>=80){
		// 	alert("Your grade is A+");
		// }else if(m>=70){
		// 	alert("Your grade is A");
		// }
		// else if(m>=60){
		// 	alert("Your grade is A-");
		// }
		// else if(m>=50){
		// 	alert("Your grade is B");
		// }
		// else if(m>=40){
		// 	alert("Your grade is C");
		// }
		// else if(m>=33){
		// 	alert("Your grade is D");
		// }
		// else{
		// 	alert("Your grade is F");

		// }
		switch(m){
			case "100":
			case "99":
			case "98":
			case "97":
			case "96":
			case "95":
			case "94":
			case "93":
			case "92":
			case "91":
			case "90":
			case "89":
			case "88":
			case "87":
			case "86":
			case "85":
			case "84":
			case "83":
			case "82":
			case "81":
			case "80":
				alert("Your grade is A+");
				break;
			case "79":
			case "78":
			case "77":
			case "76":
			case "75":
			case "74":
			case "73":
			case "72":
			case "71":
			case "70":
				alert("Your grade is A");
				break;
			case "69":
			case "68":
			case "67":
			case "66":
			case "65":
			case "64":
			case "63":
			case "62":
			case "61":
			case "60":
				alert("Your grade is A-");
				break;
			case "59":
			case "58":
			case "57":
			case "56":
			case "55":
			case "54":
			case "53":
			case "52":
			case "51":
			case "50":
				alert("Your grade is B");
				break;
			case "49":
			case "48":
			case "47":
			case "46":
			case "45":
			case "44":
			case "43":
			case "42":
			case "41":
			case "40":
				alert("Your grade is C");
				break;
			case "39":
			case "38":
			case "37":
			case "36":
			case "35":
			case "34":
			case "33":
				alert("Your grade is D");
				break;

			default:
				alert("You have failed ");
				break;
		}
		break;
	case "2":
		var f=parseInt(prompt("Enter first number"));
		var ch=prompt("Enter + \nor - \nor * \nor / \nor % ");
		

		switch(ch){
			case "+":
				var s=parseInt(prompt("Enter second number"));
				var res=f+s;
				alert("The summation is "+res);
				break;
			case "-":
				var s=parseInt(prompt("Enter second number"));
				var res=f-s;
				alert("The substruction is "+res);
				break;
			case "*":
				var s=parseInt(prompt("Enter second number"));
				var res=f*s;
				alert("The multiplication is "+res);
				break;
			case "+":
				var s=parseInt(prompt("Enter second number"));
				var res=f/s;
				res=parseFloat(res);
				alert("The division is "+res);
				break;
			case "%":
				var s=parseInt(prompt("Enter second number"));
				var res=f%s;
				alert("The remainder is "+res);
				break;
			default:
				var s=parseInt(prompt("Enter second number"));
				alert("You have Entered wrong keyword ");
				break;
		}
	default:
		alert("You have Entered wrong keyword ");
		break;
}