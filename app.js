const fetchData = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    return data;
}
const btn = document.getElementById("get-advice-btn");
const adviceNum = document.getElementById("advice-num");
const advice = document.getElementById("advice")
btn.addEventListener("click", () => {
    adviceNum.innerHTML = ""
    advice.innerHTML = "loading..."
    fetchData().then(res=>{
        adviceNum.innerHTML = res.slip.id
        advice.innerHTML = res.slip.advice
    })
})