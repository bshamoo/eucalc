
function btnColor() {

    if(btn_active == "hex") {
        btn_hex.classList.remove("btn-green");
        btn_hex.classList.add("green");
        btn_hex.classList.add("btn-black");
    }
    if(btn_active == "bin") {
        btn_bin.classList.remove("btn-yellow");
        btn_bin.classList.add("yellow");
        btn_bin.classList.add("btn-black");
    }
    if(btn_active == "gcd") {
        btn_gcd.classList.remove("btn-blue");
        btn_gcd.classList.add("blue");
        btn_gcd.classList.add("btn-black");
    }
    if(btn_active == "fme") {
        btn_fme.classList.remove("btn-red");
        btn_fme.classList.add("red");
        btn_fme.classList.add("btn-black");
    }
}


function addElements(btn_active) {
    
    if(btn_active == "hex"){

        btn_hex.classList.remove("btn-black");
        btn_hex.classList.remove("green");
        btn_hex.classList.add("btn-green");

        document.getElementById("int").classList.add("my-3");
        document.getElementById("eq").classList.add("mb-2");
        document.getElementById("bot-ans").classList.add("mb-3");

        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"><sub> 10</sub></div>';

        document.getElementById("eq").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">=</h6></div>';
        document.getElementById("bot-ans").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"><sub> 16</sub></div>';
        document.getElementById("clear").innerHTML +=  
        '<div class="col text-center"><button type="button" class="btn btn-gray">Clear</button></div>';
    }

    if(btn_active == "bin"){

        btn_bin.classList.remove("btn-black");
        btn_bin.classList.remove("yellow");
        btn_bin.classList.add("btn-yellow");

        document.getElementById("int").classList.add("my-3");
        document.getElementById("eq").classList.add("mb-2");
        document.getElementById("bot-ans").classList.add("mb-3");

        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"><sub> 10</sub></div>';

        document.getElementById("eq").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">=</h6></div>';
        document.getElementById("bot-ans").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"><sub> 2</sub></div>';
        document.getElementById("clear").innerHTML +=  
        '<div class="col text-center"><button type="button" class="btn btn-gray">Clear</button></div>';
    }

    if(btn_active == "gcd"){

        btn_gcd.classList.remove("btn-black");
        btn_gcd.classList.remove("blue");
        btn_gcd.classList.add("btn-blue");

        document.getElementById("int").classList.add("my-3");
        document.getElementById("eq").classList.add("mb-2");
        document.getElementById("bot-ans").classList.add("mb-3");

        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-input-GCD" name="bottom-x" placeholder="x"></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col-2 text-center"><h6 class="input-text">mod</h6></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-input-GCD" name="bottom-y" placeholder="y"></div>';

        document.getElementById("eq").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">=</h6></div>';
        document.getElementById("bot-ans").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"></div>';
        document.getElementById("clear").innerHTML +=  
        '<div class="col text-center"><button type="button" class="btn btn-gray">Clear</button></div>';
    }

    if(btn_active == "fme"){

        btn_fme.classList.remove("btn-black");
        btn_fme.classList.remove("red");
        btn_fme.classList.add("btn-red");

        document.getElementById("int").classList.add("my-3");
        document.getElementById("eq").classList.add("mb-2");
        document.getElementById("bot-ans").classList.add("mb-3");

        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-input-FME" name="bottom-x" placeholder="x"></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">^</h6></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-input-FME" name="bottom-e" placeholder="e"></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">mod</h6></div>';
        document.getElementById("int").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-input-FME" name="bottom-y" placeholder="y"></div>';

        document.getElementById("eq").innerHTML +=  
        '<div class="col text-center"><h6 class="input-text">=</h6></div>';
        document.getElementById("bot-ans").innerHTML +=  
        '<div class="col text-center"><input type="text" id="bottom-ans" name="bottom-ans" placeholder="0"></div>';
        document.getElementById("clear").innerHTML +=  
        '<div class="col text-center"><button type="button" class="btn btn-gray">Clear</button></div>';
    }
}


function clearElements() {

    document.getElementById("int").innerHTML = "";
    document.getElementById("eq").innerHTML = "";
    document.getElementById("bot-ans").innerHTML =  "";
    document.getElementById("clear").innerHTML =  "";
}


function addHex() {

    if(btn_active == "bin" || btn_active == "gcd" || btn_active == "fme"){
        
        btnColor();
        clearElements();
    }
    if (btn_active != "hex"){

        btn_active = "hex";
        addElements(btn_active);
    }
}
function addBin() {

    if(btn_active == "hex" || btn_active == "gcd" || btn_active == "fme"){

        btnColor();
        clearElements();
    }
    if (btn_active != "bin"){

        btn_active = "bin";
        addElements(btn_active);
    }
}
function addGCD() {

    if(btn_active == "hex" || btn_active == "bin" || btn_active == "fme"){

        btnColor();
        clearElements();
    }
    if (btn_active != "gcd"){

        btn_active = "gcd";
        addElements(btn_active);
    }
}
function addFME() {

    if(btn_active == "hex" || btn_active == "bin" || btn_active == "gcd"){

        btnColor();
        clearElements();
    }
    if (btn_active != "fme"){

        btn_active = "fme";
        addElements(btn_active);
    }
}


var btn_active = "";

var btn_bin = document.getElementById("btn-bin");
var btn_hex = document.getElementById("btn-hex");
var btn_gcd = document.getElementById("btn-gcd");
var btn_fme = document.getElementById("btn-fme");

btn_bin.addEventListener("click", function(){addBin()});
btn_hex.addEventListener("click", function(){addHex()});
btn_gcd.addEventListener("click", function(){addGCD()});
btn_fme.addEventListener("click", function(){addFME()});