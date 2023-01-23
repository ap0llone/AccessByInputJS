//connection to HTML
const inputNode = document.querySelector('#js-input');
const btnNode = document.querySelector('#js-btn');
const outputNode = document.querySelector('#js-output');

btnNode.addEventListener('click', function(){
    //access is allowed
    if(inputNode.value >= 18 && inputNode.value <= 70){
        outputNode.innerHTML = 'Access is allowed';
        outputNode.style.color = 'green';
        outputNode.style.margin = '25px';
        setInterval(() => {
            window.location.href = 'https://www.github.com/ap0llone/'
        }, 1000);
        //access is denied
    }else if(inputNode.value < 18){
        outputNode.innerHTML = 'Access is denied';
        outputNode.style.color = 'red';
        outputNode.style.margin = '25px';
    }
        //other case
    else{
        outputNode.innerHTML = 'Access is denied (Too Old)';
        outputNode.style.color = 'red';
        outputNode.style.margin = '25px';
    }

    //clearing input
    inputNode.value = '';

    //focusing input
    inputNode.focus();
});


