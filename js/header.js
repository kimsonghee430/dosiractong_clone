window.addEventListener("load" , function(){
    // 헤더를 스크롤할때 바뀌는 헤더 변경 기능
    const header = this.document.querySelector(".header")
    let scy = 0;
    // console.log(scy); 스크롤 위치 측정. 바디 높이를 키우고 시작할것
    //스크롤이 조금이라도 내려가면 active 내용으로 변경
        this.window.addEventListener("scroll", function(){
            scy = this.window.document.documentElement.scrollTop
            if(scy > 0) {
            header.classList.add("active")
            }
            else{
            header.classList.remove("active")
            }
        })
    }
)