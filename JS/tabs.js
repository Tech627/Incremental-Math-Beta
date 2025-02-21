const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content")
const sub_tabs = document.querySelectorAll(".subtab-btn");
const sub_content = document.querySelectorAll(".sub-content")

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", () => {
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active")

        all_content.forEach(content=>{content.classList.remove("active")})
        all_content[index].classList.add("active")
    })
})

sub_tabs.forEach((subtab, index)=>{
    subtab.addEventListener("click", () => {
        sub_tabs.forEach(subtab=>{subtab.classList.remove("active")})
        subtab.classList.add("active")

        sub_content.forEach(subcontent=>{subcontent.classList.remove("active")})
        sub_content[index].classList.add("active")
    })
})