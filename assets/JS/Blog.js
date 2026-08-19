// الانتظار حتى يتم تحميل عناصر الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تفعيل البحث عند الكتابة (بديل onkeyup)
    const searchInput = document.getElementById('searchinput');
    if (searchInput) {
        searchInput.addEventListener('keyup', filterposts);
    }

    // 2. تفعيل أزرار قلب الكروت (بديل onclick)
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.horizontal-flip-card').classList.toggle('flipped');
        });
    });

    // 3. فتح الفيديو (بديل onclick)
    const videoBox = document.querySelector('.framed-video-box');
    if (videoBox) {
        videoBox.addEventListener('click', openVideoModal);
    }

    // 4. قفل الفيديو (بديل onclick)
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeVideoModal);
    }

});

// ----------------------------------------------------
// الدوال الأصلية بتاعتك زي ما هي بدون أي تغيير
// ----------------------------------------------------

function filterposts() {
    let filter = document.getElementById('searchinput').value.toLowerCase();
    let posts = document.getElementsByClassName('simple-dropdown-post');
    for (let i = 0; i < posts.length; i++) {
        let title = posts[i].querySelector('.title').innerText.toLowerCase();
        if (title.indexOf(filter) > -1) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}
       
function openVideoModal() {
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideoModal() {
    document.getElementById("videoModal").style.display = "none";
    var iframe = document.getElementById("youtubeVideo");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc; 
}