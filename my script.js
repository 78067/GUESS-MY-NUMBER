var randomNum = Math.trunc (Math.random()*20)
function check(){

var guess =document.getElementById('guess').value
if(randomNum == guess){
document.getElementsByTagName('p')[1].innerHTML = 'correct Answer'
document.body.style.backgroundColor='green'
}
else if(guess>randomNum )      
{
document.getElementsByTagName('p')[1].innerHTML = 'Too high'
document.body.style.backgroundColor='red'
}

else if(guess<randomNum )      
{
document.getElementsByTagName('p')[1].innerHTML = 'Too  low'
document.body.style.backgroundColor='red'
}
}
function again(){
document.body.style.backgroundColor='black'   
document.getElementsByTagName('p')[1].innerHTML ='Start Guessing...'
document.getElementById('guess').value = ''
}
