/*
#3 Smile counter
Rules for a smiling face:
Every smile face must contain a valid pair of eyes. Valid eyes - ":" or ";"
Every smile face must contain a valid smiling mouth - ")" or "D"
Smile face can contain a nose between eyes and mouth. Valid nose "-" or "~"
Nose is optional
Examples of valid smiley faces ":)", ":D", ";~D", ":-)", ":~)".
Examples of invalid smiley faces ";(", ":>", ";}", ":=D".
Array of smiles:

const faces = [';-)', ':>D', ':~D', 'll:-)', ';-}', ':D', ':-D'];

You can use other array
*/

const faces = [";-)", ":>D", ":~D", "ll:-)", ";-}", ":D", ":-D"];

// The first method
function smileCounterWithForEach(faces) {
    let counter = 0;
    const regExp = /^[:;][-~]?[)D]$/;
    faces.forEach((face) => {
        counter += regExp.test(face) ? 1 : 0;
    });
    return counter;
}

// The second method
function smileCounterWithFilter(faces) {
    const regExp = /^[:;][-~]?[)D]$/;
    return faces.filter((face) => regExp.test(face)).length;
}

const result1 = smileCounterWithForEach(faces);
console.log(result1);

const result2 = smileCounterWithFilter(faces);
console.log(result2);
