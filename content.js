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
  else if(i == 3){
  	meals = parseInt(data);
  }
}
window.alert(dineX);
window.alert(meals);


var daysLeft = getDaysLeft();

window.alert(daysLeft);

function getDaysLeft(){
	var monthArray = [31,28,31,30,31,30,31,31,30,31,30,31];
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = today.getMonth();
	var year = today.getFullYear();
	var dayOfYear = 0;
	var endDate = 0;
	if(year == 2019){
		endDate = 349;
	}
	else if(year == 2020){
		endDate = 137;
	}
	for(var i = 0; i < month; i++)
	{
		if(i==2 && year%4==0)
		{
			dayOfYear += 29;
		}
		else if(i==2 && year%4!=0)
		{
			dayOfYear += 28;
		}
		else
		{
			dayOfYear += monthArray[i];
		}
	}
	if(year == 2019)
	{
		return endDate - dayOfYear - 3;
	}
	else
	{
		return endDate - dayOfYear - 5;
	}

}




//extract meal plan type
//calculate



