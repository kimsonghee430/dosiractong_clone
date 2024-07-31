window.addEventListener("load" , function(){
    // 헤더를 스크롤할때 바뀌는 헤더 변경 기능
    const header = this.document.querySelector(".header")
    // 모바일바
    const mbt = this.document.querySelector(".mbt")
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
        // 모바일바 클릭했을 때
        const navMb = this.document.querySelector(".nav-mb")
        const htmlRoot = this.document.querySelector("html")
        mbt.addEventListener("click", function(){
            // 현재 ani 클래스가 있는지 없는지 파악
            const state = this.classList.contains("ani")
            if(state){
                this.classList.remove("ani")
                navMb.classList.remove("active")
                htmlRoot.classList.remove("active")
            }   
            else{
                this.classList.add("ani")
                navMb.classList.add("active")
                htmlRoot.classList.add("active")
            }
        })
        // 반응형일 때
        this.window.addEventListener("resize",function(){
            let windowW = this.window.innerWidth
            if(windowW > 1024){
                mbt.classList.remove("ani")
                navMb.classList.remove("active")
                htmlRoot.classList.remove("active")
                if(scy > 0) {
                    header.classList.add("active")
                    }
                    else{
                    header.classList.remove("active")
                    }
            }
        })
    }
)