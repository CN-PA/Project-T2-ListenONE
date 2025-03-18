// 音乐源切换
let musicplatform = document.querySelector('.music')
musicplatform.addEventListener('click',function(){
    
})
// lyric切换
const lyric = document.querySelector('#lyric')
const lyricpage = document.querySelector('#lyricpage')
const closelyric1 = document.querySelector('#left') 
const closelyric2 = document.querySelector('#rightside')


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