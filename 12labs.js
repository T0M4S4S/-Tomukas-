function validateInput(input, regex, errorMessage) {
    if (!regex.test(input)) {
        alert(errorMessage);
        return false;
    }
    return true;
}

function handleSubmit() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!validateInput(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Neteisingas el. pašto formatas!')) return;
    if (!validateInput(phone, /^\+?[0-9]{7,15}$/, 'Neteisingas telefono numerio formatas!')) return;

    const question1 = parseInt(document.getElementById('question1').value);
    const question2 = parseInt(document.getElementById('question2').value);
    const question3 = parseInt(document.getElementById('question3').value);
    const question4 = parseInt(document.getElementById('question4').value);
    const question5 = parseInt(document.getElementById('question5').value);

    const average = ((question1 + question2 + question3 + question4 + question5) / 5).toFixed(2);

    const result = {
        name,
        surname,
        email,
        phone,
        address,
        average,
    };

    console.log(result);
    let colorClass = '';
    if (average <= 4) {
        colorClass = 'red';
    } else if (average <= 7) {
        colorClass = 'orange';
    } else {
        colorClass = 'green';
    }
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p class="${colorClass}"><strong>${name} ${surname}</strong> (${email}): Vidurkis - ${average}</p>`;
}
