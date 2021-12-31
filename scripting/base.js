function warmup() {
    console.log("We're just getting started")
}

function randDice(input, label) {
    var i
    var out = 0
    var outStr = ""

    // Fixed this logic, it wasn't making sense prior
    for (i = 0; i < document.getElementById("diceSlider").value; i++) {
        out += (Math.floor(Math.random() * input) + 1)
    }

    // For the D20, label a critical success or failure
    if (out == 20 && label == 'Label_D20') {
        outStr += "Critical Success "
    } else if (out == 1 && label == 'Label_D20') {
        outStr += "Critical Failure "
    }

    // Write next to the button the result of the 
    document.getElementById(label).innerHTML = outStr + out
}