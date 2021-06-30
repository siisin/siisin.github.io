const container = document.querySelector('.container');
fetch("footage.json")
    .then(response => response.json())
    .then(data => {
        let html = '';
        for (let item in data) {
            html += 
            `<div class="row">
                <div class="col-details">
                    <p><b>Date:</b> ${data[item]["date"]}</p>
                    <p><b>Time:</b> ${data[item]["time"]}</p>
                    <p><b>Source:</b> ${data[item]["source_file"]}</p>
                </div>
                <div class="col-image"><img class="img" src="${data[item]["url"]}" alt=""></div>
            </div>`;
        }
        container.innerHTML += html;
        console.log(html);
    });
