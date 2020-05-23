const correctAnswer = ['B','A','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //check answers..
    userAnswer.forEach((value,index) => {
        
        if (value===correctAnswer[index]){
            score+=25;
        }
    });
    // console.log(score);
    scrollTo(0,0);
    i=0;
    let counter=setInterval(() => {
    // console.log('helo');
    i++;
    // console.log(i);
    result.classList.remove('d-none'); 
    result.querySelector('span').textContent=`${i}%`;
    if (i==score) {
        
        clearInterval(counter);
    }
    // else{
    //     counter++;
    // }
}, 30);
});
// window.console.log('sidd');
// setTimeout(()=>{
//     console.log('hello')
// },3000);
// i=0;
// const counter=setInterval(() => {
//     // console.log('helo');
//     i++;
//     console.log(i);
//     if (i==5) {
        
//         clearInterval(counter);
//     }
// }, 1000);

