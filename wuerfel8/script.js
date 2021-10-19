function rollDice() {

    let diceNumber = Math.floor(((Math.random() * 6) + 1));

    for(let i = 0; i < 10; i++) {
        
        switch(diceNumber) {
            case 1:
                document.getElementById("dice").src = "images/PinClipart_cube_1.png";
                break;
            case 2:
                document.getElementById("dice").src = "images/PinClipart_cube_2.png";
                break;
            case 3:
                document.getElementById("dice").src = "images/PinClipart_cube_3.png";
                break;
            case 4:
                document.getElementById("dice").src = "images/PinClipart_cube_4.png";
                break;
            case 5:
                document.getElementById("dice").src = "images/PinClipart_cube_5.png";
                break;
            case 6:
                document.getElementById("dice").src = "images/PinClipart_cube_6.png";
                break;
        }
    }

}