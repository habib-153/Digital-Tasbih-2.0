const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulillahDisplay = document.getElementById('AlhamdulillahDisplay');
const alhamdulillahIncrementBtn = document.getElementById('AlhamdulillahIncrementBtn');
const alhamdulillahDecrementBtn = document.getElementById('AlhamdulillahDecrementBtn');

const allahuAkbarDisplay = document.getElementById('AllahuakbarDisplay');
const allahuAkbarIncrementBtn = document.getElementById('AllahuakbarIncrementBtn');
const allahuAkbarDecrementBtn = document.getElementById('AllahuakbarDecrementBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 100){
        return alert("Subhan Allah Complete. Please Fillup anoter one");
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})
subhanAllahDecrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert("You can't added nagetive value");
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

alhamdulillahIncrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 100){
        return alert("Alhamdulillah Complete. Please Fillup anoter one");
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})
alhamdulillahDecrementBtn.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return alert("You can't added nagetive value");
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

allahuAkbarIncrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 100){
        return alert("Allahu Akbar Complete. Please Fillup anoter one");
    }
    allahuAkbarInitialValue += 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
})
allahuAkbarDecrementBtn.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 0){
        return alert("You can't added nagetive value");
    }
    allahuAkbarInitialValue -= 1;
    allahuAkbarDisplay.innerText = allahuAkbarInitialValue;
})

resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahuAkbarDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
})