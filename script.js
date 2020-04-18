var now = moment().format("LLLL");
var weekdate = moment().weekday();
//Calender entry variable

var time = [09,10,11,12,13,14,15,16,17];
//Append the date to page
$("#currentDay").append(now);

//Check current day for weekday or weekend

//--------------------------------------------------------------------------
/*if (weekdate > 5 )
    {
    //TODAY IS WEEKEND
    $(".container").text("Today is the weekend! Stop working!");  
    }
    else 
    {
    timeslot(); 
        //TODAY IS WEEKDAY
        //EVENT LISTENER FOR SAVING CALENDER ENTRY when save button is pushed---------------------------------------------------------------------
        $(".btn").on("click",function()
        {
            //Grab the button number assigned to each timeblock  
            calenderEntry = ($(this).attr("value"));
            console.log(calenderEntry)
            //Use the button number to retrieve the calender entry input
            console.log(inputEntry)
        })
}
*/

//Function to generate the time slots
function timeslot()
{
    newContainer = $("<div>");
    newContainer.addClass("input-group-prepend blockContainer container-fluid");
    newRow = $("<div>");
    newRow.addClass("row justify-content-md-center .d-flex");
    newcol1 = $("<div class='col'>");
    newSpan = $("<span>");
    newSpan.addClass("input-group-text");
    newSpan.attr("id", "timeblock");
    //New Code here
    if (time[i]>12)
    {
        timeText = time[i]-12;
        newSpan.text(timeText + ":00PM");
    }
    else
    {
        newSpan.text(time[i] + ":00AM");
    }
    //newSpan.text(time[i] + ":00AM");
    newcol2 = $("<div class = 'col col-10'>");
    newInput = $("<input>");
    newInput.addClass("form-control text-input");
    newInput.attr("id", "hr"+ time[i]);
    newcol3 = $("<div class = 'col'>");
    newBtn = $("<img>");
    newBtn.addClass("btn btn-outline-secondary iconBtn");
    newBtn.attr("time",time[i]);
    newBtn.attr("src","./icon.jpg");
    newcol1.append(newSpan);
    newcol2.append(newInput);
    newcol3.append(newBtn);
    newContainer.append(newcol1).append(newcol2).append(newcol3)
    $(".container").append(newContainer);
}


hourNow = moment().format('HH');

for (var i=0;i<time.length;i++)
{
    timeslot();
    console.log("The time now is: "+ hourNow);
    console.log("the time block is: " + time[i]);
    //debugger;
    selector = "#hr"+time[i];
    if (hourNow > time[i])
    {   
        $(selector).attr("moment","past");
        //$(".text-input").attr("moment","past");
        console.log("the past");
    }
    else if (hourNow == time[i]) 
    {   
        $(selector).attr("moment","present");
        //$(".text-input").attr("moment","present");
        console.log("the present");
    }
    else
    {   
        $(selector).attr("moment","future");
        //$(".text-input").attr("moment","future");
        console.log("the future");
    }
    
}

$(".iconBtn").on("click",function()
{
    hourKey = $(this).attr("time");
    hourId = "#hr"+ hourKey;
    //console.log(hourId);
    
    localStorage.setItem(hourId, $(hourId).val());
})

function init()
{
    for (var i=0;i<time.length;i++)
    {
        var newhourId = '#hr' + time[i];
        var text = localStorage.getItem(newhourId);
        if (text!=null)
        {
            $(newhourId).val(text);
        }
    }

}

init();
