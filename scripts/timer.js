function timreInit(){
    function timerLoop() {
        var current_data = new Date();
        var finish_data_obj = {
            day: 1,
            month: 8,
            hour: 0,
            minutes: 0,
            seconds: 0
        }
    
        var current_data_obj = {
            day: current_data.getDate(),
            month: current_data.getMonth()+1,
            hour: current_data.getHours(),
            minutes: current_data.getMinutes(),
            seconds: current_data.getSeconds()
        }
        
        var left_month = finish_data_obj.month - current_data_obj.month;
        var left_day = finish_data_obj.day - current_data_obj.day;
        var left_hour = finish_data_obj.hour - current_data_obj.hour;
        var left_minutes = finish_data_obj.minutes - current_data_obj.minutes;
        var left_seconds = finish_data_obj.seconds - current_data_obj.seconds;

        if(left_seconds < 0) {
            left_minutes -= 1;
            left_seconds = 60 - current_data_obj.seconds;
        }

        if(left_minutes < 0) {
            left_hour -= 1;
            left_minutes = 60 - current_data_obj.minutes;
        }

        if(left_hour < 0) {
            left_day -= 1;
            left_hour = 24 - current_data_obj.hour;
        }

        if(left_day < 0) {
            left_month -= 1;
            left_day = 31 - current_data_obj.day;
        }
        
        if(left_month < 0) {
            left_year -= 1;
            left_month = 12 - current_data_obj.month;
        }

        $('.counter_item_month .counter_digits').text(left_month);
        $('.counter_item_days .counter_digits').text(left_day);
        $('.counter_item_hours .counter_digits').text(left_hour);
        $('.counter_item_minutes .counter_digits').text(left_minutes);
        $('.counter_item_seconds .counter_digits').text(left_seconds);

        return {month: left_month, day: left_day, hour: left_hour, minutes: left_minutes, second: left_seconds};
    }

    function updateTimer(value,con) {
        con.strokeStyle = "#84bc22";
        con.beginPath();
        con.arc(55, 55, 55, value * Math.PI, 1.5*Math.PI);
        con.stroke();
    }
    
    function startTimer(t,c,m,s) {
        var b = 2/t;
        var a = -0.5;
        var first = true;
        
        setInterval(function(){
            // if (first) {
            //     first = false;
            // } else {
            //     a +=b;
            // }
            a +=b;
            if (a > 1.5) {
                a = -0.5;
            }
            c.clearRect(0, 0, m.width, m.height);
            updateTimer(a,c);
        },1000)
    }

    var month_canvas = document.getElementById("month_timer");
    var month_ctx = month_canvas.getContext("2d");
    var days_canvas = document.getElementById("days_timer");
    var days_ctx = days_canvas.getContext("2d");
    var hours_canvas = document.getElementById("hours_timer");
    var hours_ctx = hours_canvas.getContext("2d");
    var minutes_canvas = document.getElementById("minutes_timer");
    var minutes_ctx = minutes_canvas.getContext("2d");
    var second_canvas = document.getElementById("second_timer");
    var second_ctx = second_canvas.getContext("2d");

    startTimer(60,second_ctx,second_canvas);
    startTimer(60 * 60,minutes_ctx,minutes_canvas);
    startTimer(24 * 60 * 60,hours_ctx,hours_canvas);
    startTimer(31 * 24 * 60 * 60,days_ctx,days_canvas);
    startTimer(12 * 31 * 24 * 60 * 60,month_ctx,month_canvas);

    setInterval(function(){
        timerLoop();
    }, 1000);
}