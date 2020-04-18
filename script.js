var now = moment().format("LLLL");
var weekdate = moment().weekday();
//Calender entry variable

var time = [09,10,11,12,13,14,15,16,17];
//Append the date to page
$("#currentDay").append(now);
//Function to bring up any localstorage data
init();
//Check current day for weekday or weekend
//weekdate = 3; //Testing with weekdate as today is Weekend

if (weekdate > 5 )
    {
    //TODAY IS WEEKEND - won't show planner for weekend
    $(".container").text("Today is the weekend! Stop working!");  
    }
else 
{   
    //TODAY IS WEEKDAY - create timeblocks with function
    //Generate current hour figure     
    hourNow = moment().format('HH');
    //Iterate through the time array
    for (var i=0;i<time.length;i++)
    {   
        //Create timeblocks
        timeslot();
        //Determine whether timeblock generate is in past, present or future
        selector = "#hr"+time[i];
        if (hourNow > time[i])
        {   
            $(selector).attr("moment","past");   
        }
        else if (hourNow == time[i]) 
        {   
            $(selector).attr("moment","present");
        }
        else
        {   
            $(selector).attr("moment","future");   
        }
    }
    
    //Save event into local storage based on the hour clicked
    $(".iconBtn").on("click",function()
    {
        hourKey = $(this).attr("time");
        hourId = "#hr"+ hourKey;
        //console.log(hourId);
        
        localStorage.setItem(hourId, $(hourId).val());
    })
}


//Function to generate the time slots
function timeslot()
{   
    //Generates new one timeblock period
    newContainer = $("<div>");
    newContainer.addClass("input-group-prepend blockContainer container-fluid");
    newRow = $("<div>");
    newRow.addClass("row justify-content-md-center .d-flex");
    newcol1 = $("<div class='col'>");
    newSpan = $("<span>");
    newSpan.addClass("input-group-text");
    newSpan.attr("id", "timeblock");
    //Check for AM/PM and convert if required
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

//Initiate function
function init()
{
    for (var i=0;i<time.length;i++)
    {   
        //Get data from Local Storage
        var newhourId = '#hr' + time[i];
        var text = localStorage.getItem(newhourId);
        if (text!=null)
        {
            $(newhourId).val(text);
        }
    }

}
