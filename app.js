 let news = document.querySelector("#news");
        let category = document.querySelector("#category");
        let currentTimeElement = document.querySelector("#current-time");
        let newsLink = document.querySelector("#news-link");
        let errorMessage = document.querySelector("#errorMessage");

        function updateTime() {
            let now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');
            let formattedTime = `${hours}:${minutes}:${seconds}`;
            currentTimeElement.innerHTML = formattedTime;
        }

        // Update the time immediately and then every second
        updateTime();
        setInterval(updateTime, 1000);

        fetch('https://newsdata.io/api/1/latest?country=in&language=en&apikey=pub_4792961ec493f0f31b9261e9c0a74fa33496d')
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 429) {
                        throw new Error('Too many requests in a short time.');
                    } else {
                        throw new Error('An error occurred while fetching the news.');
                    }
                }
                return response.json();
            })
            .then((data) => {
                let randomNewsIndex = Math.floor(Math.random() * data.results.length);
                console.log(randomNewsIndex);
                console.log(data.results[randomNewsIndex]);

                let newsContent = data.results[randomNewsIndex].title;
                let newsCategory = data.results[randomNewsIndex].category ; // Joining unique categories with a comma
                let newsURL = data.results[randomNewsIndex].link;

                updateNews(newsContent, newsCategory, newsURL);
            })
            .catch((error) => {
                errorMessage.innerHTML = error.message;
                news.innerHTML = '';
                category.innerHTML = '';
                newsLink.innerHTML = '';
                console.error('Error fetching news:', error);
            });

        function updateNews(newsContent, newsCategory, newsURL) {
            news.innerHTML = newsContent;
            category.innerHTML = `Today's ${newsCategory} news`;
            newsLink.innerHTML = `<a href="${newsURL}" target="_blank">click here to know more...</a>`;
            newsLink.Style.color = "cyan"; 
            errorMessage.innerHTML = 'Too many requests, please try after some time.'; // Clear any previous error message
        }