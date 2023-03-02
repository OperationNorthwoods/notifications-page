const readPosts = document.querySelectorAll('.read');
const unreadPosts = document.querySelectorAll('.unread');
const unreadPostsCountDisp = document.querySelector('#notiNum');
const markRead = document.querySelector('#markRead');

let unreadPostsCount = 0


document.addEventListener('DOMContentLoaded', function () {
    unreadPostsCount = unreadPosts.length
    unreadPostsCountDisp.innerHTML = unreadPostsCount
    console.log(unreadPostsCount)
    console.log('DOMContentLoaded Event finished')
});

markRead.addEventListener('click', function () {
    unreadPostsCount = 0
    unreadPosts.forEach(unreadPost => {
        unreadPost.classList.remove('unread')
        unreadPost.classList.add('read')
    })
    unreadPostsCountDisp.innerHTML = unreadPostsCount
});