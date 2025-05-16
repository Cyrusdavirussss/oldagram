const allHearts = document.querySelectorAll(".icon-heart");
const allComments = document.querySelectorAll(".icon-comment")
const allDMs = document.querySelectorAll(".icon-dm")

for (let i = 0; i < allHearts.length; i++) {
    const heart = allHearts[i] // This defines heart within the loop block

    heart.addEventListener("click", () => {
        heart.classList.toggle("liked")
    })
}

for (let i =0; i <allComments.length; i++) {
    const comment = allComments[i]
    
    comment.addEventListener("click", () => {
        comment.classList.toggle("commented")
    })
}

for (let i =0; i < allDMs.length; i++) {
    const dms = allDMs[i]
    
    dms.addEventListener("click", () => {
        dms.classList.toggle("shared")
    })
}