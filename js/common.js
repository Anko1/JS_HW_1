$( document ).ready(function() {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

});

var my_event;

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