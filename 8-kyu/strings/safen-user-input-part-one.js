/*Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*
* */

function sanitizeInput(inputString) {
    if (typeof inputString !== 'string') {
        return ''; // Return an empty string if input is not a string
    }

    let sanitizedArray = [];
    for (let i = 0; i < inputString.length; i++) {
        let currentChar = inputString[i];
        if (currentChar === '<') {
            sanitizedArray.push('&lt;');
        } else if (currentChar === '>') {
            sanitizedArray.push('&gt;');
        } else if (currentChar === '"') {
            sanitizedArray.push('&quot;');
        } else if (currentChar === '&') {
            sanitizedArray.push('&amp;');
        } else {
            sanitizedArray.push(currentChar);
        }
    }

    return sanitizedArray.join('');
}


