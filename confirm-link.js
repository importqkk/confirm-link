/*
    확인 메세지 출력 후 이동하는 링크 구현
    만든이: import_qkk
*/

window.addEventListener("load", function(){
    var confirmLinks = document.querySelectorAll(".confirm-link");
    for(var i=0; i<confirmLinks.length; i++) {
        confirmLinks[i].addEventListener("click", function(e) {
            // 안내메세지 설정
            var text = this.dataset.message || "정말 이동하시겠습니까?";
            var choice = window.confirm(text);
            if(!choice) e.preventDefault();
        })
    }
});
