
var random1=Math.random()*6;
var randomNumber1 = Math.floor(random1+1);//generated no. between 1-6
var randomImg1= "dice"+randomNumber1+".png"; //dice1.png
var randomImgSource1="images/"+randomImg1;//images/dice1.png
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImgSource1);




var random2=Math.random()*6;
var randomNumber2 = Math.floor(random2+1);//generated no. between 1-6
var randomImg2= "dice"+randomNumber2+".png"; //dice1.png
var randomImgSource2="images/"+randomImg2;//images/dice1.png
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImgSource2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else
{
    document.querySelector("h1").innerHTML="Match Draw";

}