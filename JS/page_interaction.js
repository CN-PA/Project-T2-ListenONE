// 音乐源切换
let musicplatform = document.querySelector('.music')
musicplatform.addEventListener('click',function(){
    
})
// lyric和loading界面
const lyric = document.querySelector('#lyric')
const lyricpage = document.querySelector('#lyricpage')
const closelyric1 = document.querySelector('#left') 
const closelyric2 = document.querySelector('#rightside')
const personalinformation = document.querySelector('#pi')
const loading = document.querySelector('#loadingpage')
const front = document.querySelector('#f')

lyric.addEventListener('click', function(){
    lyricpage.classList.remove('hidden');
    setTimeout(() => {
        lyricpage.classList.add('show')
    }, 10);
})

closelyric1.addEventListener('click', function(){
    lyricpage.classList.remove('show');
    setTimeout(() => {
        lyricpage.classList.add('hidden')
    }, 500);
})
closelyric2.addEventListener('click', function(){
    lyricpage.classList.remove('show');
    setTimeout(() => {
        lyricpage.classList.add('hidden')
    }, 500);
})
personalinformation.addEventListener('click', function(){
    personalinformation.style.color='black'
    loading.classList.remove('hid');
    setTimeout(() => {
        loading.classList.add('sho')
    }, 10);
})
front.addEventListener('click', function(){
    loading.classList.remove('sho');
    setTimeout(() => {
        loading.classList.add('hid')
    }, 500);
})