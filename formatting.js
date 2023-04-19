function format() {
    const medications = document.getElementById('medications').value;
    const results = document.getElementById('results');

    formatted_medications = medications
        /* Remove extra spaces */
        .replaceAll(/[ \t]+/g, ' ').trim()
        /* Remove spaces at line start */
        .replaceAll(/^\s/mg, '')
        /* Replace Swedich chars */
        .replaceAll(/[‰]/g, 'ä')
        .replaceAll(/[ˆ]/g, 'ö')
        /* Remove ... , @ */
        .replaceAll(/[...]|,|@/g, '')
        /* Remove HSAID */
        .replaceAll(/ \(CS....\)/g, '')
        .replaceAll(/ cs..../gi, '')

    /* Return results */
    results.value = formatted_medications;
    autosize(results);

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