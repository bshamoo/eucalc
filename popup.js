
function addHex() {
    if (btn_active != "hex"){

        btn_active = "hex";

        document.getElementById("btn-hex").style.color = "#FFFFFF";
        document.getElementById("btn-hex").style.backgroundColor = "#0F9D58";

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
}

function addBin() {
    if (btn_active != "bin"){

        btn_active = "bin";

        document.getElementById("btn-bin").style.color = "#FFFFFF";
        document.getElementById("btn-bin").style.backgroundColor = "#F4B400";

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
}

function addGCD() {
    if (btn_active != "gcd"){

        btn_active = "gcd";

        document.getElementById("btn-gcd").style.color = "#FFFFFF";
        document.getElementById("btn-gcd").style.backgroundColor = "#4285F4";

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
}

function addFME() {
    if (btn_active != "fme"){

        btn_active = "fme";

        document.getElementById("btn-fme").style.color = "#FFFFFF";
        document.getElementById("btn-fme").style.backgroundColor = "#DB4437";

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


var btn_active = "";

var btn_bin = document.getElementById("btn-bin");
var btn_hex = document.getElementById("btn-hex");
var btn_gcd = document.getElementById("btn-gcd");
var btn_fme = document.getElementById("btn-fme");

btn_bin.addEventListener("click", function(){addBin()});
btn_hex.addEventListener("click", function(){addHex()});
btn_gcd.addEventListener("click", function(){addGCD()});
btn_fme.addEventListener("click", function(){addFME()});