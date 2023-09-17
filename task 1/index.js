const select = document.querySelector("select");


select.addEventListener("change", () => {
    const selectedRange = select.value;

    if (selectedRange === "0-10") {
        document.getElementById("plans1").classList.add("highlight");
    } else if (selectedRange === "10-20") {
        document.getElementById("plans2").classList.add("highlight");
    } else if (selectedRange === "30 and above") {
        document.getElementById("plans3").classList.add("highlight");
    }
});
//the bootsrtap doesnt work



document.querySelector("#showform1").addEventListener("click",function()
{
    document.querySelector(".popupform").classList.add("active");
})
document.querySelector("#showform2").addEventListener("click",function()
{
    document.querySelector(".popupform").classList.add("active");
})
document.querySelector("#showform3").addEventListener("click",function()
{
    document.querySelector(".popupform").classList.add("active");
})
document.querySelector(".popupform .wrapper .close").addEventListener("click",function(){
    document.querySelector(".popupform").classList.remove("active");
})
