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

function clearRecords() {
    let elems = document.getElementsByClassName('time');

    for (let index = 0; index < elems.length; index++) {
        const elem = elems[index];
        elem.textContent = '';
    }
}



$('#click').click(function (e) {
    e.preventDefault();
    clearRecords();

    let elems = document.getElementsByClassName('time');

    targetInvalid('#target');
    $('#click').hide();
    $('#target').show();

    let timeStart, timeEnd, index, targetClick, clickBlock;

    setTimeout(async function () {
        for (index = 0; index < 10; index++) {
            clickBlock = false;
            let time = Math.floor(Math.random() * 10) + 1;

            targetInvalid('#target');
            await sleep(time*1000);

            timeStart = Date.now();
            targetValid('#target');
            await sleep(1000);

            if(!clickBlock) {
                elems[index].textContent = 'MISS';
            }
        }
        $('#target').hide();
        $('#click').show();
    }, 3000);

    $('#target').click(function (e) {
        e.preventDefault(); 

        if(!clickBlock) {
            clickBlock = true;
            if (isValid) {
                targetClick = true;
                timeEnd = Date.now();
                let reactionTime = timeEnd - timeStart;
                elems[index].textContent = reactionTime / 1000 + 's';
            } else {
                targetClick = false;
                elems[index].textContent = 'MISS'
            }
        }
    });
});