console.log("this is my file");
//initialize the news parameters

let source = 'the-times-of-india';
let apikey = '971f8cdd387245e69fd940c72acf3020'

// grab the news container

let news1 = document.getElementById('newsAccordian');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=971f8cdd387245e69fd940c72acf3020
`, true);
// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json= JSON.parse(this.responseText);
        let articles=json.articles;
       console.log(articles);
let newsHtml="";
articles.forEach(function(element,index) {
    let news = `<div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
              aria-expanded="true" aria-controls="collapse${index}">
              <b style="color:black;">Breaking News &nbsp;${index+1}:&nbsp;&nbsp;</b>${element["title"]}
            </button>
          </h2>
        </div>

        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordian">
          <div class="card-body">
           ${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a>
          </div>
        </div>
      </div>`;
      newsHtml+=news;


        });
        news1.innerHTML=newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}


xhr.send()

