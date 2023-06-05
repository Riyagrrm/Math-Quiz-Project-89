player1_name=localStorage.getItem("player1Name")
player2_name=localStorage.getItem("player2Name")
player1_score=0
player2_score=0
question_turn="player1"
answer_turn="player2"
ans=0
document.getElementById("player_question").innerHTML="Question turn - "+ player1_name
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name
document.getElementById("player1_score").innerHTML="Score 1- "+ player1_score
document.getElementById("player2_score").innerHTML="Score 2- "+ player2_score
function send()
{
    num1=document.getElementById("number1").value
    num2=document.getElementById("number2").value
    ans=parseInt(num1)*parseInt(num2)
    console.log(ans)
    question_num="<h4>"+num1+"X"+num2+"</h4>";
    input_box="<br> Answer : <input id='input_check_box'>"
    check_btn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=question_num+input_box+check_btn
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=" "
    document.getElementById("number2").value=" "
}
function check()
{
    get_answer=document.getElementById("input_check_box").value
    console.log(get_answer)
    console.log(ans)
    if (get_answer==ans)
    {
        if(answer_turn=="player1")
        {
            player1_score=player1_score+1
            document.getElementById("player1_score").innerHTML= "Score 1- "+ player1_score 
        }
        else
        {
          player2_score=player2_score+1
            document.getElementById("player2_score").innerHTML = "Score 2- "+ player2_score
        }
    }
    if (question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question turn - "+ player2_name
    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn - "+player1_name
    }
    if (answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name
    }
    else
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1_name
    }
}