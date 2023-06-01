import {data} from "./data.js";
let api_key = "AIzaSyCfunX_X-U1WHAVR6VQ6d-mMn65V_PPu3I";
const score_span = document.querySelectorAll(".item span")
const status_span = document.querySelector("#title_container h2 span");
let final_result = [];

    function defineScore(index, score){
            score_span.item(index).innerHTML = score + "/400";
            data[index].score = score;
            console.log(data);
    }

    //Calculate the score of each ADMR federation website :
    async function calculateScore(){
    
        for(let i = 0; i < data.length; i++){
            await fetch("https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=" + data[i].url + "&key=" + api_key + "&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES&category=SEO")
            .then(response => response.json())
            .then(json => {
            const lighthouse = json.lighthouseResult;
            const categories = lighthouse.categories;     
            let def_score = categories.performance.score * 100 + categories.accessibility.score * 100 + categories['best-practices'].score * 100 + categories.seo.score * 100; 
            defineScore(i, def_score);

            console.log("Score défini : item n°" + (i + 1));
            }) 
        }
                        
    } 
    
    function sortArray(){
        
    }
    
    //Check if each DOM federation score still contains object with empty scores return true if so, return false if not : 
    function checkStatus(){
        for(let i = 0; i < score_span.length; i++){
            if(score_span[i].innerHTML = 0){
                return false;
            }
            else{
                status_span.innerHTML = "Scores attribués."
                return true;
            }
        }
    }

    calculateScore();

    

  

    


    












//console.log(categories);
            //console.log("Rapport" + " " + fd_name + " :");
            //console.log("Performance :" + categories.performance.score);
            //console.log("Accessibilité :" + categories.accessibility.score);
            //console.log("Bonnes pratiques :" + categories['best-practices'].score);
            //console.log("SEO :" + categories.seo.score);


