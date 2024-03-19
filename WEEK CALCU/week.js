function calculate(){
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const target = document.getElementById("target").value;

    const start_mil = new Date(start);
    const end_mil = new Date(end);

    var mil_difference =  Math.abs(end_mil-start_mil);
    //Math.abs incase the start_mil is bigger than that of end_mil

    //converting the milliseconds to days. it should be rounded up cos decimal milliseconds is already in another day
    var day_difference = Math.ceil(mil_difference/(60*60*24*1000));

    //converting finally to week and days(iff encountered)
    var week = Math.floor(day_difference / 7);
    //used floor to round it down , then if decimal should be used as the days

    //might be zero sometimes
    var day = (day_difference % 7);

    //prepare the output, check if day exists along with the weeks
    var result;
    if(day>0){
        result = `You have ${week} weeks and ${day} days between ${start} and ${end}.`;
    }
    else{
        result = `You have ${week} weeks between ${start} and ${end}.`;
    }

    //display output
    document.getElementById("ans").innerHTML = result;

    var remark = "Remark: ";

    //check if you are on the right path.
    if(week >= target){
        remark += `😀😀 You are on the right path!!.`;
    }
    else{
        remark += `😢😢😢Chaii, so sorry you can check the advice button to see how to attain ${target} weeks`;
    }

    document.getElementById("remark").innerHTML = remark;


}


function reloadPage(){ 
    //reloads page
    location.reload();

} 


function comment(){
    const target1 = document.getElementById("target").value;

    const start1 = document.getElementById("start").value;
    var start_mil = new Date(start1);

    const end1 = document.getElementById("end").value;
    var end_mil = new Date(end1);

    var start_adv = `If you must start with ${start1} then i suggest you should end by at least on the `;
    var end_adv = `If you must end on ${end1} then i suggest you start on or before `;
    var mil_difference = target1 * 1000 * 7 * 60 * 60 * 24;
    var end_obj = new Date(start_mil.getTime() + mil_difference);
    start_adv += `${end_obj.toLocaleDateString()}`;
    var start_obj = new Date(end_mil.getTime() - mil_difference);
    end_adv += `${start_obj.toLocaleDateString()}`;

    document.getElementById("comm").innerHTML = `${start_adv} or ${end_adv}`;
}

