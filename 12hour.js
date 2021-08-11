const now   = new Date();
const year  = now.getFullYear();
const month = now.getMonth();
const date  = now.getDate();
const hour  = now.getHours();
const min   = now.getMinutes();

let ampm = '';

if(hour < 12){
  ampm = '午前'
}else{
  ampm = '午後'
}

const output = `　${year}年　${month + 1}月　${date}日　${ampm} ${hour % 12}時　${min}分`;
document.getElementById('time').textContent = output;