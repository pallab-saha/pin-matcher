    //Random Number
    const generateBtn = document.getElementById("generateBtn");
    generateBtn.addEventListener("click", function(){
        document.getElementById("formControl").value = Math.floor(Math.random() * 9000) + 1000;
        document.getElementById("correct").style.display="none";
        document.getElementById("wrong").style.display="none";
        document.getElementById("NumPadDisplay").value = ""
    })

    //Number Pad Display
    function valueAssign(digit){
        var numPadDisplay = document.getElementById("NumPadDisplay").value;
        var multiDigitView = numPadDisplay + digit;
        document.getElementById("NumPadDisplay").value = multiDigitView;
        console.log(multiDigitView);
    }

    //Clear and Backspace Button Workable
    function insert(sign){
        if(sign == '<'){
            var numPadDisplay = document.getElementById("NumPadDisplay").value;
            var reduceNum = numPadDisplay.substring(0, numPadDisplay.length - 1);
            document.getElementById("NumPadDisplay").value = reduceNum;
        }else{
            document.getElementById("NumPadDisplay").value = "";
        }
    }

    // Output of two display
    function submitOutput(){
        var formControl = document.getElementById("formControl").value;
        var numPadDisplay = document.getElementById("NumPadDisplay").value;
        document.getElementById("formControl").value = "";
        if(formControl == numPadDisplay){
            document.getElementById("correct").style.display="block";
        }else{
            document.getElementById("wrong").style.display="block";
        }
    }

    // Action Left Counter
    var count = 0;
    function clickCount(){
        count += 1;
        console.log("Counting");
        if(count == 0){
            document.getElementById("actionLeft").innerText = "3 try left";
        }else if(count == 1){
            document.getElementById("actionLeft").innerText = "2 try left";
        }else if(count == 2){
            document.getElementById("actionLeft").innerText = "1 try left";
        }else{
            document.getElementById("actionLeft").innerText = "";
            document.getElementById("submitBtn").disabled = true;
            document.getElementById("submitBtn").style.backgroundColor ="#A0A6AB";
        }
    }
