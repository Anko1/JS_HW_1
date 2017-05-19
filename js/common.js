$( document ).ready(function() {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    getP24Currency();
});

var my_event;
var usd;
var eur;

function setEvent() {
    my_event = prompt('Яка подія?', '');

    var event = document.getElementById('event');
    event.classList.remove("pulse");

    var submit = document.getElementById('submit');
    submit.classList.add("pulse");

}

function getAnswer () {
    console.log(my_event);
    var answer = document.getElementById('answer');

    var name = document.getElementById('name');
    var date = document.getElementById('date');
    var place = document.getElementById('place');

    answer.innerHTML = name.value + ' has a ' + my_event + ' at ' + date.value + ' somewhere in ' + place.value + '.';
    answer.parentElement.style.display = 'block';
}

function getP24Currency() {
    $.ajax({
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
        type: 'get',
        success: function (data) {
            var currencies = JSON.parse(JSON.stringify(data));

            usd = currencies[2].buy;
            eur = currencies[0].buy;



            console.log(eur);
        },
        error: function (data) {
            alert('Error!');
            console.log(data);
        }
    });
}

function currencyCalculator() {
    var eur_count = prompt('Кілкість євро', '');
    var usd_count = prompt('Кілкість долларів', '');


    var answer = eur_count + ' euros are equal '+ eur_count * eur +' grn, '+ usd_count +' dollars are equal '+ usd * usd_count +', one euro is equal '+ eur / usd +' dollars.';

    alert( answer );
}