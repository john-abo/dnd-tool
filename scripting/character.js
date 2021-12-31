// Hide all sections for race
function hideAll_race() {
    var i
    var all_races = document.getElementsByClassName("user_race")

    // Hides all the race options
    for (i = 0; i < all_races.length; i++) {
        all_races.item(i).style.display = "none"
    }
}

// Hide all sections for class
function hideAll_class() {
    var i
    var all_classes = document.getElementsByClassName("user_class")

    // Hides all the class options
    for (i = 0; i < all_classes.length; i++) {
        all_classes.item(i).style.display = "none"
    }
}

// Sets displays depending on the class chosen by the character
function classSelected() {
    var userClass = document.getElementById("classes").value
    hideAll_class();    // Clears the display

    // Massive wall of classes
    switch(userClass) {
        case "barb": document.getElementById("barb_sub").style.display = "block"; break
        case "bard": document.getElementById("bard_sub").style.display = "block"; break
        case "cleric": document.getElementById("cleric_sub").style.display = "block"; break
        case "druid": document.getElementById("druid_sub").style.display = "block"; break
        case "fighter": document.getElementById("fighter_sub").style.display = "block"; break
        case "monk": document.getElementById("monk_sub").style.display = "block"; break
        case "paladin": document.getElementById("paladin_sub").style.display = "block"; break
        case "ranger": document.getElementById("ranger_sub").style.display = "block"; break
        case "rogue": document.getElementById("rogue_sub").style.display = "block"; break
        case "sorcerer": document.getElementById("sorcerer_sub").style.display = "block"; break
        case "war": document.getElementById("war_sub").style.display = "block"; break
        case "wizard": document.getElementById("wizard_sub").style.display = "block"; break
        default: break
    }

}

// Sets displays depending on the race chosen by the character
function raceSelected() {
    var userRace = document.getElementById("races").value
    hideAll_race();     // Clears the display

    // Massive wall of switch shenanigans
    switch(userRace) {
        case "dwarf": document.getElementById("dwarf_Subchoice").style.display = "block"; break
        case "elf": document.getElementById("elf_Subchoice").style.display = "block"; break
        case "half": document.getElementById("half_Subchoice").style.display = "block"; break
        case "human": document.getElementById("human_Subchoice").style.display = "block"; break
        case "dragon": document.getElementById("dragon_Subchoice").style.display = "block"; break
        case "gnome": document.getElementById("gnome_Subchoice").style.display = "block"; break
        case "half_E": document.getElementById("halfE_Subchoice").style.display = "block"; break
        case "half_O": document.getElementById("halfO_Subchoice").style.display = "block"; break
        case "tief": document.getElementById("tief_Subchoice").style.display = "block"; break
        default: break
    }
}

// Show tabs
function showTab(tab) {
    var i
    var tabs = document.getElementsByClassName("serviceTab")
    // Sets other tabs to not display
    for (i = 0; i < tabs.length; i++) {
        tabs.item(i).style.display = "none"
    }

    // Displays the chosen tabs
    document.getElementById(tab).style.display = "block"
} 