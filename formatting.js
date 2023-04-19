function format() {
    var medications = document.getElementById('medications').value;
    const results = document.getElementById('results');

    formatted_medications = medications
        /* Remove spaces */
        .replace(/\s+/g, ' ').trim()
        /* Remove parenthesis */
        .replace(/\(.*\)/g, '');


    /* Return results */
    results.innerHTML = formatted_medications;
    console.log(formatted_medications);

    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(formatted_medications.value);
}