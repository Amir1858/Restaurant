c = 2
d = 250
a1 = 0
const a = document.querySelector(".st1") 
a.addEventListener("click", ()=>{
    a1++
    document.querySelector(".tt").innerHTML = a1
    document.querySelector(".egg-h2").innerHTML = 250 * a1

})
const b = document.querySelector(".st2")
b.addEventListener("click", ()=> {
    a1--
    if(c < 0) {
        document.querySelector(".tt").innerHTML = 0
        document.querySelector(".egg-h2").innerHTML = 250
    }
    else {
        document.querySelector(".tt").innerHTML = a1
        document.querySelector(".egg-h2").innerHTML = 250 * a1
    }
})


const q = document.querySelector(".inpd1") 
x = 1
q.addEventListener("input", ()=>{
    x++
    d + 450
    if (x % 2 == 0){
        document.querySelector(".egg-h2").innerHTML = d + 450
    }
    else{
        document.querySelector(".egg-h2").innerHTML = d - 450
    }
} )

// const m = document.querySelector(".inpd2") 
// s = 1
// m.addEventListener("input", ()=>{
//     const t = 250
//     s++
//     if (s % 2 == 0){
//         t + 80
//         document.querySelector(".egg-h2").innerHTML = t + 80
//     }else{
//         document.querySelector(".egg-h2").innerHTML = 250
//     }
// } )
// const q = document.querySelector(".inpd1") 
// x = 1
// q.addEventListener("input", ()=>{
//     const f = 250
//     x++
//     if (x % 2 == 0){
//         f + 450
//         console.log("asda")
//         document.querySelector(".egg-h2").innerHTML = f + 450
//     }else{
//         document.querySelector(".egg-h2").innerHTML = 250
//     }
// } )
// const l = document.querySelector(".inpd4") 
// x = 1
// l.addEventListener("input", ()=>{
//     const e = 250
//     x++
//     if (x % 2 == 0){
//         e + 80
//         document.querySelector(".egg-h2").innerHTML = f + 800
//     }else{
//         document.querySelector(".egg-h2").innerHTML = 250
//     }
// } )