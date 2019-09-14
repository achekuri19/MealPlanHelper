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
var daysLeft = Math.ceil(getDaysLeft());
var blocksWeek = Math.round(calculateAverageBlockWeeklyQuota(meals, daysLeft));
var blocksDay = Math.round(10*calculateAverageBlockDailyQuota(meals, daysLeft))/10;
var dineXWeek = Math.round(100*calculateAverageDinexWeeklyQuota(dineX, daysLeft))/100;
var dineXDay = Math.round(100*calculateAverageDinexDailyQuota(dineX, daysLeft))/100;
window.alert("Blocks left: " + meals + "\nBlocks per week: "+blocksWeek+"\nBlocks per day: "+blocksDay+"\nDineX Left: "+dineX+"\nDineX per week: "+dineXWeek+"\nDineX per day: "+dineXDay);

function getDaysLeft(){
	var currentDate = new Date();
	var endDate = new Date();
	if(currentDate.getMonth() >=7 && currentDate.getMonth() <= 11) {
		endDate = new Date(currentDate.getFullYear(), 11, 19);
	}
	else if(currentDate.getMonth() >=0 && currentDate.getMonth() <= 6) {
		endDate = new Date(currentDate.getFullYear(), 4, 21);
	}
	return (endDate.getTime() - currentDate.getTime())/(1000 * 3600 * 24);
	/*
	var monthArray = [31,28,31,30,31,30,31,31,30,31,30,31];
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
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
	*/
}




//extract meal plan type
//calculate

function calculateAverageBlockDailyQuota(meals, daysLeft){
    return meals/daysLeft;
}

function calculateAverageBlockWeeklyQuota(meals, daysLeft){
    return meals/(daysLeft/7);
}
function calculateAverageDinexDailyQuota(dinex, daysLeft){
    return dinex/daysLeft;
}

function calculateAverageDinexWeeklyQuota(dinex, daysLeft){
    return dinex/(daysLeft/7);
}



