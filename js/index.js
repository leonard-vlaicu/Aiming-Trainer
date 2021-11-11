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

function target() {
    let time = Math.floor(Math.random() * 10) + 1;
    console.log(time);
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

    setTimeout(async function () {
        for (let index = 0; index < 10; index++) {
            const element = index;
            target();
            await sleep(3000);
        }
    }, 3000);

    $('#target').click(function (e) {
        e.preventDefault();

        if (isValid) {
            timeEnd = Date.now();
            let reactionTime = timeEnd - timeStart;
            $('#time1').text(reactionTime / 1000 + 's');
        } else {
            $('#time1').text('MISS');
        }
    });
});