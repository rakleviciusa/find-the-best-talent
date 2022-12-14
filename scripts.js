const directorsBtn = document.getElementById("directors-btn")
const directorsBtnCristian = document.getElementById("directors-btn-cristian")
const directorsBtnCruz = document.getElementById("directors-btn-cruz")
const directorsBtnDrake = document.getElementById("directors-btn-drake")
const directorsBtnGriffin = document.getElementById("directors-btn-griffin")
const directorsBtnAden = document.getElementById("directors-btn-aden")
const closeBtn = document.getElementById("close-span")
const directorTextEl = document.getElementById("director-text-id")



directorsBtn.addEventListener("click", function(){
    directorsBtn.classList.toggle("close-btn-style")
})

directorsBtnCristian.addEventListener("click", function(){
    directorsBtnCristian.classList.toggle("close-btn-style")
})

directorsBtnCruz.addEventListener("click", function(){
    directorsBtnCruz.classList.toggle("close-btn-style")
})

directorsBtnDrake.addEventListener("click", function(){
    directorsBtnDrake.classList.toggle("close-btn-style")
})

directorsBtnGriffin.addEventListener("click", function(){
    directorsBtnGriffin.classList.toggle("close-btn-style")
    document.getElementById("director-text-id-griffin").toggle("director-text")
    document.getElementById("director-avatar-description-griffin").classList.toggle("director-text")
})

directorsBtnAden.addEventListener("click", function(){
    directorsBtnAden.classList.toggle("close-btn-style")
    directorTextEl.classList.toggle("director-text")
    document.getElementById("director-avatar-description").classList.toggle("director-text")
})