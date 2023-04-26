function format() {
    const medications = document.getElementById('medications').value;
    const results = document.getElementById('results');

    formatted_medications = medications
        /* Remove extra spaces */
        .replaceAll(/[ \t]+/g, ' ')

        /* Remove spaces at line start */
        .replaceAll(/^\s/mg, '')
        /* Replace Swedish chars */
        .replaceAll(/[‰]/g, 'ä')
        .replaceAll(/[ˆ]/g, 'ö')
        /* Remove @ */
        .replaceAll(/@/g, '')
        /* Remove HSAID */
        .replaceAll(/ \(cs....\)\,|cs....\,/gi, '')
        .replaceAll(/ cs....\.\.\./gi, '')
        .replaceAll(/ \(cs....\)/gi, '')
        .replaceAll(/ cs..../gi, '')

        /* Replace dosage intervals */
        .replaceAll(/\/ 24 h/g, 'x 1')
        .replaceAll(/\/ 12 h/g, 'x 2')
        .replaceAll(/\/ 8 h/g, 'x 3')
        .replaceAll(/\/ 6 h/g, 'x 4')
        .replaceAll(/\/ 4 h/g, 'x 6')

        /* Replace ... with - */
        .replaceAll(/(\d)\.\.\.(\d)/g, '$1-$2')

        /* Trim trailing spaces */
        .replaceAll(/\s+$/gm, '')

    /* Return results */
    results.value = formatted_medications;
    autosize(results);
    success();
    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(formatted_medications);
}

function autosize(element) {
    element.style.height = "12rem";
    element.style.width = "820px";
    if (element.scrollHeight > 192) {
        element.style.height = (element.scrollHeight + 5) + "px";
    }
    if (element.scrollWidth > 820) {
        element.style.width = (element.scrollWidth + 20) + "px";
    }
}

function reset() {
    document.getElementById('medications').value = '';
    document.getElementById('results').value = '';
}

function copy() {
    navigator.clipboard.writeText(document.getElementById('results').value);
}

function success() {
    /* Animate success icon */
    document.getElementById('success').classList.replace('h-0', 'h-6')
    document.getElementById('success').classList.replace('w-0', 'w-6')
    document.getElementById('success').classList.replace('opacity-0', 'opacity-1')

    setTimeout(function () {
        document.getElementById('success').classList.replace('h-6', 'h-0')
        document.getElementById('success').classList.replace('w-6', 'w-0')
        document.getElementById('success').classList.replace('opacity-1', 'opacity-0')
    }, 3000)
}