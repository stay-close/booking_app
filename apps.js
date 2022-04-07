// Change Date and time type on focus

const dateInput = document.querySelector('#date');
const timeInput = document.querySelector('#time');
dateInput.onfocus = dateFocus;
timeInput.onfocus = timeFocus;

function dateFocus() {
    dateInput.setAttribute('type', 'date')
}

function timeFocus() {
    timeInput.setAttribute('type', 'time')
}

// info form (1st form) submit
const tableInfo = document.querySelector('.info_table');
const infoForm = document.querySelector('.info_form');
const confirmForm = document.querySelector('.confirm_details');
const paymentForm = document.querySelector('.payment_info');
const okForm = document.querySelector('.ok_form');
const billInfo = document.querySelector('.billing_table');
const editBtn = document.querySelector('.edit_btn');
const customerName = document.querySelector('.customer_name');
infoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    infoForm.classList.remove('active');
    confirmForm.classList.add('active');
    const fullName = document.querySelector('#fullname').value;
    const email = document.querySelector('#email').value;
    const fromWhere = document.querySelector('#fromwhere').value;
    const destination = document.querySelector('#destination').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;
    const adult = document.querySelector('#adult').value;
    const child = document.querySelector('#child').value;
    customerName.innerText = fullName;
    tableInfo.innerHTML = "";
    tableInfo.innerHTML = `
            <tr>
                <td>Full Name</td>
                <td>: ${fullName}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>: ${email}</td>
            </tr>
            <tr>
                <td>From Where</td>
                <td>: ${fromWhere}</td>
            </tr>
            <tr>
                <td>Your Destination</td>
                <td>: ${destination}</td>
            </tr>
            <tr>
                <td>Date </td>
                <td>: ${date}</td>
            </tr>
            <tr>
                <td>Time </td>
                <td>: ${time}</td>
            </tr>
            <tr>
                <td>Adult </td>
                <td>: ${adult}</td>
            </tr>
            <tr>
                <td>Children </td>
                <td>: ${child}</td>
            </tr>

`;
    billInfo.innerHTML = '';
    billInfo.innerHTML = `
       
        <tr>
            <td>You Select ${adult} Adult Person($120 Per Adult)</td>
            <td>: $120 * ${adult}  = $${adult * 120}</td>
        </tr>
        <tr>
            <td>You Select ${child} Child ($60 Per Child)</td>
            <td>:  $60 * ${child} = $${child * 60}</td>
        </tr>
        <tr>
            <td>total amount to pay </td>
            <td>: $${(adult * 120) + (child * 60)}</td>
        </tr>
        <tr>
            <td>Payment Method</td>
            <td>: <select name="payment method" id="payment_method">
            <option value="bkash" selected>Bkash</option>
            <option value="rocket">Rocket</option>
            <option value="nagad">Nagad</option>
            <option value="upay">Upay</option>
        </select> </td>
        </tr>

`

});
editBtn.addEventListener('click', (e) => {
    e.preventDefault();

    confirmForm.classList.remove('active');
    infoForm.classList.add('active')

})
confirmForm.addEventListener('submit', (e) => {
    e.preventDefault();
    confirmForm.classList.remove('active');
    paymentForm.classList.add('active');

});

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    paymentForm.classList.remove('active');
    okForm.classList.add('active');
});