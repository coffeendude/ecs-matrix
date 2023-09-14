const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'ベダホ・ビゼ・ブオハ・グェィ・ギフ・ヱド・オ・ヅゴヌセレ・マィポ'
const Katakana2 = 'アセヘポ・ホク・ベェ・ハヘプアザケ'

const nums = '123456789';

const happy1 =  'ANDREW IS WONDERFUL!';
// const happy2 = 'HAPPY';
// const n3w = 'NEW';
// const year = 'YEAR 2022!'
const alphabet = katakana + Katakana2;

const fontSize = 18;
const columns = canvas.width/fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    // The index of an element is it's x coordinate, 
    // the value of an element is it's y coordinate
    rainDrops[x] = 1;
}
const matrixHappy = [];
for (let j = 0; j < columns; j++) {
    matrixHappy[j] = 1;
}

const draw = () => {
    // black canvas to fade out already drawn characters
    context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        // loop through a character of our alphabet string
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*(fontSize+2), rainDrops[i]*fontSize);

        // we use the fill text method of context to draw a character on a screen
        // param1 is character, param2 is x coordinate, and param3 is y. We multiply
        // x and y coordinates with font size to get the 'perfect spacing
        // context.fillText(alphabet, i*fontSize, rainDrops[i]*fontSize);

        // This checks whether rain drop clear's the bottom border of the canvas...basically when the y > canvas height
        // if so, we set y coordinate to 0 so it can start falling from the top of the viewport
        // We also add random element so we get a rainlike effect

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.99) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    context.fillStyle = 'rgba(0, 0, 0, .002)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for (let z = 0; z <= matrixHappy.length; z++) {
       
        // context.fillText(happy, z*fontSize, rainDrops[z]*fontSize);
        
        const text2 = happy1.charAt(z);
        const cheers = 'ANDREW IS SUCCESS'.charAt(z);
        const wish = 'TO-HEALTH-WEALTH-JOY!'.charAt(z)
        const peace = 'PEACE--HAPPINESS'.charAt(z)
        const spread = '   ' + text2 + '                                 ' + cheers + '            ' + wish + '                                   ' + text2 + '                                ' + cheers + '              ' + peace + '                            ' + cheers + '              ' + text2;
        context.fillText(spread, z*fontSize, rainDrops[z]*fontSize);

        if (rainDrops[z] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[z] = 0;
        }
        rainDrops[z]++;
    }
}

// const draw2 = () => {
    
//     context.fillStyle = 'rgba(0, 0, 0, .002)';
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     context.fillStyle = '#0F0';
//     context.font = fontSize + 'px monospace';

//     for (let z = 0; z <= matrixHappy.length; z++) {
       
//         // context.fillText(happy, z*fontSize, rainDrops[z]*fontSize);
        
//         const text2 = happy1.charAt(z);
//         const cheers = 'CHEERS!'.charAt(z);
//         const wish = 'TO-HEALTH-WEALTH-JOY!'.charAt(z)
//         const peace = 'PEACE--HAPPINESS'.charAt(z)
//         const spread = '   ' + text2 + '                                 ' + cheers + '            ' + wish + '                                    ' + text2 + '                                 ' + cheers + '              ' + peace + '                                ' + cheers + '            ' + text2;
//         context.fillText(spread, z*fontSize, rainDrops[z]*fontSize);

//         if (rainDrops[z] * fontSize > canvas.height && Math.random() > 0.975) {
//             rainDrops[z] = 0;
//         }
//         rainDrops[z]++;
//     }
// }


// continuous rain effect in ms
setInterval(draw, 65);
// setInterval(draw2, 55);