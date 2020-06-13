
    function time() {
        var ourDate = new Date()
        var hrs = ourDate.getHours()
        var min = ourDate.getMinutes()
        var daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
        var day = ourDate.getDay()
        var today = daysInWeek[day]
        var hours = ourDate.getHours()
        var minutes = ourDate.getMinutes()
        var monthsInYear = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        var Month = ourDate.getMonth()
        var month = monthsInYear[Month]
        var year = ourDate.getFullYear()
    
        document.getElementById("Time").style.display = "block";
        document.getElementById("msg").style.display = "none";
        document.getElementById("audio").style.display = "none";
        if (hrs < 12)
            document.getElementById("Time").innerText = hrs + ":" + min + " AM\n" + today + " " + month + " " + year
        else if (hrs == 12 && hrs % 12 == 0)
            document.getElementById("Time").innerText = hrs + ":" + min + " PM\n" + today + " " + month + " " + year
        else if (hrs > 12 && hrs % 12 <= 4)
            document.getElementById("Time").innerText = hrs % 12 + ":" + min + " PM\n" + today + " " + month + " " + year
        else
            document.getElementById("Time").innerText = hrs % 12 + ":" + min + " PM\n" + today + " " + month + " " + year
    }
    
    function message() {
        document.getElementById("Time").style.display = "none";
        document.getElementById("msg").innerText = "hello.!!"
        document.getElementById("msg").style.display = "block";
        document.getElementById("audio").style.display = "none";
        }
    
    function play() {
        document.getElementById("audio").style.display = "block";
        document.getElementById("msg").style.display = "none";
        document.getElementById("Time").style.display = "none";
        document.getElementById("audio").innerHTML+= '<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1E4umBm15jdpM7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
        }