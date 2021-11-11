let isValid = false;

window.onload =
    () => {
        let inputArr = document.getElementsByName("input")
        inputArr.forEach(() => "")
    }

function targetValid(id) {
    $(id).css('fill', 'green');
    isValid = true;
}

function targetInvalid(id) {
    $(id).css('fill', 'red');
    isValid = false;
}

function target(time) {
    let timeStart = Date.now();
    let timeEnd = Date.now();

    setTimeout(() => {
        targetValid('#target');
    }, time*1000);
}

$('#click').click(function (e) {
    e.preventDefault();

    let elems = document.getElementsByClassName('time');
    for (let index = 0; index < elems.length; index++) {
        const elem = elems[index];
        elem.innerText = '';
    }

    $('#click').hide();
    $('#target').show();
    console.log("click");
    var timeStart;
    var timeEnd;
    let time = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
        targetValid('#target');
        timeStart = Date.now();
        setTimeout(() => {
            targetInvalid('#target');
            $('#click').css('display', '');
        }, 1000);
    }, time * 1000);

    $('#target').click(function (e) {
        e.preventDefault();

        if (isValid) {
            timeEnd = Date.now();
            let reactionTime = timeEnd - timeStart;
            $('#time1').text(reactionTime/1000+'s');
        } else {
            $('#time1').text('MISS');
            clearTimeout();
            clearTimeout();
        }
    });

    console.log(time);
});