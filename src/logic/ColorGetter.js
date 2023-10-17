export default function getColor(number){
    let red = Math.floor(number/65536);
    let green = Math.floor(number/256); 
    let blue = Math.floor(number%256);

    let redTensPlace = getNumNotation(Math.floor(red/16));
    let redOnesPlace = getNumNotation(Math.floor(red%16));

    let greenTensPlace = getNumNotation(Math.floor(green/16));
    let greenOnesPlace = getNumNotation(Math.floor(green%16));

    let blueTensPlace = getNumNotation(Math.floor(blue/16));
    let blueOnesPlace = getNumNotation(Math.floor(blue%16));

    return "#"+redTensPlace+redOnesPlace+greenTensPlace+greenOnesPlace+blueTensPlace+blueOnesPlace;
};

let getNumNotation = (number) => {
    if(number>=0 && number<=9){
        return ""+number;
    }
    else if(number == 10){
        return "a";
    }
    else if(number == 11){
        return "b";
    }
    else if(number == 12){
        return "c";
    }
    else if(number == 13){
        return "d";
    }
    else if(number == 14){
        return "e";
    }
    else {
        return "f";
    }
};

