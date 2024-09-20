function validate() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gname = document.getElementById('gname').value;
    let gphone = document.getElementById('gphone').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let start_date = document.getElementById('start_date').value;
    let select = document.getElementById('select').value;
    let select1 = document.getElementById('select1').value;

    let valid = true;

    let aErr = document.getElementById('aErr');
    let bErr = document.getElementById('bErr');
    let cErr = document.getElementById('cErr');
    let dErr = document.getElementById('dErr');
    let eErr = document.getElementById('eErr');
    let fErr = document.getElementById('fErr');
    let gErr = document.getElementById('gErr');
    let hErr = document.getElementById('hErr');
    let iErr = document.getElementById('iErr');

    if (name === "") {
        aErr.innerHTML = 'Student name cannot be blank';
        valid = false;
    } else {
        aErr.innerHTML = "";
    }

    if (age === "") {
        bErr.innerHTML = 'Age cannot be empty';
        valid = false;
    } else {
        bErr.innerHTML = "";
    }

    if (age < 18) {
        if (gname === "") {
            cErr.innerHTML = 'Guardian name cannot be blank';
            valid = false;
        } else {
            cErr.innerHTML = "";
        }

        if (gphone === "") {
            dErr.innerHTML = 'Guardian phone cannot be blank';
            valid = false;
        } else {
            dErr.innerHTML = "";
        }
    }

    if (phone === "") {
        eErr.innerHTML = 'Phone number cannot be blank';
        valid = false;
    } else {
        eErr.innerHTML = "";
    }

    if (email === "") {
        fErr.innerHTML = 'Email cannot be blank';
        valid = false;
    } else {
        fErr.innerHTML = "";
    }

    if (start_date === "") {
        gErr.innerHTML = 'Start date cannot be blank';
        valid = false;
    } else {
        gErr.innerHTML = "";
    }

    if (select === "") {
        hErr.innerHTML = 'Language course cannot be blank';
        valid = false;
    } else {
        hErr.innerHTML = "";
    }

    if (select1 === "") {
        iErr.innerHTML = 'Class schedule cannot be blank';
        valid = false;
    } else {
        iErr.innerHTML = "";
    }

    return valid;
}


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
    if (!validate()) {
        e.preventDefault();
        console.log('Form validation failed');
    } else {
        console.log('Form Submitted Successfully');
        openModal()

    }
});
function openModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
}


const course = [
    {
        category: "Spanish",
        items: {
            "Weekdays": [
                { slot: "10 slot Weekdays morning", cost: 100 },
                { slot: "20 slot Weekdays evening", cost: 180 }
            ],
            "Weekends": [
                { slot: "10 slot Weekend morning", cost: 110 },
                { slot: "20 slot Weekend evening", cost: 190 }
            ],
            "Evenings": [
                { slot: "10 slot Weekdays evening", cost: 120 },
                { slot: "20 slot Weekend evening", cost: 200 }
            ]
        }
    },
    {
        category: "French",
        items: {
            "Weekdays": [
                { slot: "20 slot Weekdays morning", cost: 200 },
                { slot: "13 slot Weekdays evening", cost: 150 }
            ],
            "Weekends": [],
            "Evenings": [
                { slot: "10 slot Weekdays evening", cost: 130 },
                { slot: "20 slot Weekend evening", cost: 210 }
            ]
        }
    },
    {
        category: "Mandarin",
        items: {
            "Weekdays": [
                { slot: "10 slot Weekdays morning", cost: 120 },
                { slot: "15 slot Weekdays evening", cost: 170 }
            ],
            "Weekends": [
                { slot: "10 slot Weekend morning", cost: 130 },
                { slot: "20 slot Weekend evening", cost: 220 }
            ],
            "Evenings": [
                { slot: "10 slot Weekdays evening", cost: 140 },
                { slot: "20 slot Weekend evening", cost: 180 }
            ]
        }
    }
    ,
    {
        category: "Italian",
        items: {
            "Weekdays": [
                { slot: "10 slot Weekdays morning", cost: 120 },
                { slot: "15 slot Weekdays evening", cost: 170 }
            ],
            "Weekends": [
                { slot: "19 slot Weekend morning", cost: 130 },
                { slot: "25 slot Weekend evening", cost: 190 }
            ],
            "Evenings": [
            ]
        }
    }
    ,
    {
        category: "German",
        items: {
            "Weekdays": [
                { slot: "12 slot Weekdays morning", cost: 160 },
                { slot: "15 slot Weekdays evening", cost: 150 }
            ],
            "Weekends": [
                { slot: "15 slot Weekend morning", cost: 150 },
                { slot: "15 slot Weekend evening", cost: 170 }
            ],
            "Evenings": [
                { slot: "10 slot Weekdays evening", cost: 140 },
                { slot: "10 slot Weekend evening", cost: 180 }
            ]
        }
    }
];


function availableslots() {
    const slotCategory = document.getElementById('select').value;
    const showSlot = document.getElementById('select1').value;
    const answers = document.getElementById('answers');
    const select2 = document.getElementById('select2');

   
    answers.textContent = '';
    select2.innerHTML = '';

    let found = false;

    course.forEach(category => {
        if (slotCategory === category.category) {
            if (category.items[showSlot] && category.items[showSlot].length > 0) {
                answers.textContent = `We have ${category.category} available for ${showSlot}.`;
                found = true;

                category.items[showSlot].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.slot;
                    option.textContent = item.slot;
                    select2.appendChild(option);
                });
            } else {
                answers.textContent = `No slots available for ${showSlot}.`;
            }
        }
    });

    if (!found) {
        answers.textContent = `We do not have ${slotCategory}.`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('select');
    let select1 = document.getElementById('select1');
    select.addEventListener('change', availableslots);
    select1.addEventListener('change', availableslots);

    let ageInput = document.getElementById('age');
    let guardianDetails = document.getElementById('guardianDetails');

    ageInput.addEventListener('input', () => {
        let age = parseInt(ageInput.value);
        guardianDetails.style.display = (age < 18) ? 'block' : 'none';
    });

    
    function calculateCost() {
      
        if (!validate()) {
            console.log('Cannot calculate cost. Form is not valid.');
            // return; 
        }
    
       
        const select = document.getElementById('select').value;
        const select1 = document.getElementById('select1').value;
        let totalCost = 0;
    
        course.forEach(category => {
            if (select === category.category) {
                const slots = category.items[select1];
                slots.forEach(slot => {
                    if (slot.slot === document.getElementById('select2').value) {
                        totalCost = slot.cost;
                    }
                });
            }
        });
    
        
        document.getElementById('totalCost').textContent = `Total Cost: $${totalCost}`;
    }
    
    
    

    document.querySelector('.btn-cost').addEventListener('click', calculateCost);
});

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let select = document.getElementById('select').value;
    let select1 = document.getElementById('select1').value;
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value);
    let gname = document.getElementById('gname').value;
    let gphone = document.getElementById('gphone').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let start_date = document.getElementById('start_date').value;
    let personal = document.getElementById('personal');

    personal.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age} ${age < 18 ? `<br>Guardian name:${gname}<br>Guardian phone: ${gphone}` :'' }</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Start Date:</strong> ${start_date}</p>
        <p><strong>Language Course:</strong> ${select}</p>
        <p><strong>Class Schedule:</strong> ${select1}</p>
    `;

});

// let modal = document.querySelector(".modal");
// let overlay = document.querySelector(".overlay");
// let openbtn = document.querySelector(".btn-open");
// let closebtn = document.querySelector(".btn-close");

// let openmodal = function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// };

// openbtn.addEventListener("click", openmodal);

// let closemodal = function () {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// };

// closebtn.addEventListener("click", closemodal);
// overlay.addEventListener("click", closemodal);

// document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//         closemodal();
//     }
// });
