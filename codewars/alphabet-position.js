function alphabetPosition(text) {
    var alphabet, subText, myPos, finalText, newText;

    text = text.toLowerCase();

    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    subText = [];
    for (var i = 0; i <= text.length; i++) {
        subText[i] = text.charAt(i);
        console.log(subText[i])
    }
    finalText = [];

    for (i in subText) {
        for (j in alphabet) {
            if (subText[i] == alphabet[j]) {
                finalText[i] = Number(j) + 1;
                //console.log(subText[i] + ' = ' + j);
            }
        }

    }
    newText = '';

    for (i in finalText) {

        if (i == 0) {
            newText = finalText[i];
        } else {
            newText += " " + finalText[i];

        }

    }
    console.log(newText, finalText[1])


    return newText;
}