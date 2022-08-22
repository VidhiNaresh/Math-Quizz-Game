function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 +"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box' style='border-color:rgb(55, 27, 78) ;  border-width: 3px; font-size:x-large; height: 40px;'";
    check_button =" <br><br><button type='button' id='check_button' style=' color:black; background-color: rgb(125, 170, 107); color:rgb(0, 0, 0); width: 200px; height: 30px; border-radius: 3px; font-family: Franklin Gothic Medium, Arial Narrow, Arial, sans-serif; border-style: none;' >CHECK</button> <br><br>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}
