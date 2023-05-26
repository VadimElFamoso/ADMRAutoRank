import { data } from "./data";

let api_key = "";

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
        })     
}

for(let i = 0; i < data.length ; i++){
    callApi(data.url[i], data.name[i]);
}