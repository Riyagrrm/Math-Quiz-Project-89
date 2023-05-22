function send()
{
    num1=document.getElementById("number1").value
    num2=document.getElementById("number2").value
    ans=parseInt("num1")*parseInt("num2")
    question_num="<h4>"+num1+"X"+num2+"</h4>";
    input_box="<br> Answer : <input id='input_check_box'>"
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_num+input_box+check_btn
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=" "
    document.getElementById("number2").value=" "
}