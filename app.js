import {data} from "./data.js";
let api_key = "";
const score = document.querySelectorAll(".item span")

function callApi(url, fd_name){
    fetch("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + url + "&key=" + api_key + "&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO")
        .then(response => response.json())
        .then(json => {
            const lighthouse = json.lighthouseResult;
            const categories = lighthouse.categories;
            console.log(categories);
            console.log("Rapport" + " " + fd_name + " :");
            console.log("Performance :" + categories.performance.score);
            console.log("Accessibilité :" + categories.accessibility.score);
            console.log("Bonnes pratiques :" + categories['best-practices'].score);
            console.log("SEO :" + categories.seo.score);
            let def_score = categories.performance.score * 100 + categories.accessibility.score * 100 + categories['best-practices'].score * 100 + categories.seo.score * 100;
            console.log(def_score);
            
            return def_score;
        })    
}

for(let i = 80; i < data.length ; i++){
    score[i].innerHTML = callApi(data[i].url, data[i].name);

} 