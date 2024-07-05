
# Chrome Extension: Latest News and Live Clock

This Chrome extension provides the top news from the last 48 hours. It displays the news title, category, and a link to the source of the news. Additionally, it features a live clock showing the current time. The news data is fetched from the Newsdata API.

## Features

* Top News: Displays a random news article from the top news of the last 48 hours.
* News Categories: Shows the category of the news article.
* Source Link: Provides a clickable link to the source of the news article.
* Live Clock: Displays the current time, updated every second.

## API

1.  Endpoint

* URL: https://newsdata.io/api/1/latest?country=in&language=en&apikey=YOUR_API_KEY

2. Parameters

- country: The country code for which the news should be fetched. For example, in for India.
- language: The language in which the news should be fetched. For example, en for English.
- apikey: Your API key for accessing the Newsdata.io API.

3. Response

The API returns a JSON object containing an array of news articles. Each article includes:

- title: The title of the news article.
- category: The category of the news article.
- link: The URL link to the full news article.
# Installation

1. Clone the repository or download the zip file:

git clone https://github.com/divyaaa-13/chrome-extention-latest-news-live-clock.git

2. Open Chrome and navigate to the Extensions page:

* Type chrome://extensions/ in the address bar and hit Enter.
* Enable Developer Mode:

3. Toggle the switch for Developer Mode in the top right corner of the Extensions page.

* Load the extension:

4. Click on the "Load unpacked" button.

* Select the directory where you cloned/downloaded the extension.
    
## Usage

1. Once the extension is loaded:

* Click on the extension icon in the Chrome toolbar to open the popup.
* The popup will display the latest news title, category, and a link to the full article.
* The current time will be displayed at the top of the popup.
## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.