//Student ID : 25011322

document.addEventListener('DOMContentLoaded',()=>{
    const tn = document.querySelector('.fun-facts button');
    const textEl = document.querySelector('.funfact');

    const facts = [
    "Aotearoa means 'Land of the Long White Cloud'.",
    "New Zealand was the first country to give women the vote (1893).",
    "Kiwis are flightless birds and a national symbol.",
    "There are more sheep than people in New Zealand.",
    "Waitomo Caves are famous for their glowworms.",
    "Fiordland contains Milford Sound - a world-famous fjord.",
    "The haka is a traditional Maori posture dance.",
    "There are no native land snakes in New Zealand.",
    "Aoraki/Mount Cook is New Zealand's tallest peak.",
    "Many NZ beaches are named for their Maori heritage."
    ]

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i-- ){
            const j = Math.floor(Math.random() * (i+1));
            [a[i],a[j]] = [a[j],a[i]];
        }
        return a;
    }

    let order = shuffle(facts);
    let index = 0;

    function showNextFact() {
        if (index >= order.length) {
            order = shuffle(facts);
            index = 0;
        }
        textEl.textContent = order[index];
        index++;
    }

    tn.addEventListener('click', showNextFact);
})

const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit',function(event){
    event.preventDefault();


const name = document.querySelector('#name').value;
const email = document.querySelector('#email').value;
const message = document.querySelector('#message').value

if (!name|| !email|| !message){
    alert('Please fill in all fields!');
    return;
}

alert('Thank you for your message,'+ name + '!');
contactForm.reset();

});