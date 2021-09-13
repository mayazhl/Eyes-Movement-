const balls = document.getElementsByClassName('ball');
var eyes = document.getElementsByClassName('eyes');
var eye_list = []
var eye_number = 0;

const addOne = ()=>{
    eye_number += 1;
    var div = document.createElement('div');
    let eye = eyes[0].appendChild(div);
    eye.classList.add('eye');
    eye.setAttribute('id',`eye${eye_number-1}`);
    eye_list.push(eye);
    console.log(eye_list)
    eye_list[eye_number - 1].appendChild(document.createElement('div')).classList.add('ball');
}

document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    for (let i=0;i<eye_number;i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
};

const removeOne = () => {
    document.getElementById(`eye${eye_number-1}`).remove();
    eye_list.pop();
    eye_number -= 1;
    console.log(eye_list)
};