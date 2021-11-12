let isValid = false;

window.onload =
    () => {
        let inputArr = document.getElementsByName("input")
        inputArr.forEach(() => "")
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function targetValid(id) {
    $(id).css('fill', 'green');
    isValid = true;
}

function targetInvalid(id) {
    $(id).css('fill', 'red');
    isValid = false;
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
    var timeStart;
    var timeEnd;
    var index;
    setTimeout(async function () {
        for (index = 0; index < 10; index++) {
            let time = Math.floor(Math.random() * 10) + 1;
            console.log(time);
            targetInvalid('#target');
            await sleep(time*1000);
            timeStart = Date.now();
            targetValid('#target');
            await sleep(1000);
        }
    }, 3000);

    $('#target').click(function (e) {
        e.preventDefault();

        if (isValid) {
            timeEnd = Date.now();
            let reactionTime = timeEnd - timeStart;
            elems[index].innerText = reactionTime / 1000 + 's';
        } else {
            elems[index].innerText = 'MISS'
        }
    });
});