console.log("This is my script");

const result = {
    tag: "",
    free: true,
    role: false,
    user: "adiadithya532",
    email: "adiadithya532@gmail.com",
    score: 0.64,
    state: "deliverable",
    domain: "gmail.com",
    reason: "valid_mailbox",
    mx_found: true,
    catch_all: null,
    disposable: false,
    smtp_check: true,
    did_you_mean: "",
    format_valid: true
};

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Clicked!");
    resultCont.innerHTML=`<img  width="123" src="img/loading.svg" alt="">`
    const key = "ema_live_U70xY8P69xQnMEYtyP6sNv1Z4dQr12pa9DRAi8Er";
    const email = document.getElementById("username").value;
    
    const url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    const res = await fetch(url);
    const result = await res.json();
    
    let str = '';
    for (const key of Object.keys(result)) {
        if(result[key] !=="" && result[key] !==" "){
            str += `<div>${key}: ${result[key]}</div>`;

        }
        
    }

    console.log(str);
    resultCont.innerHTML = str;
});
