window.alert('This is running');
var moneyInfo = document.getElementsByClassName('txt grid-cell column2');
var dineX = 0;
var meals = 0;

for(var i = 0; i < moneyInfo.length; i++)
{
  data = moneyInfo[i].innerHTML
  if(i <= 2){
    dineX += parseFloat(data.substring(1));
  }
}

window.alert(dineX);


