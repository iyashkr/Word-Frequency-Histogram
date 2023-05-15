
# Word Frequency Histogram

This is a NextJs Word Frequency Histogram application project that fetches text data from the URL https://www.terriblytinytales.com/test.txt, analyzes the text, and generates a histogram of the top 20 most occurring words. The project utilizes React.js, Tailwind CSS, and the Recharts library for data visualization.

## Libraries and Modules Used

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Recharts: A charting library built with React and D3 for creating interactive and responsive charts.

## Code Explanation:
### Index.js:

- The handleSubmit function is responsible for fetching the text data from the provided URL, sanitizing the text, extracting the words, counting their occurrences, and updating the state with the sorted word count data.
- The handleExport function is triggered when the "Export" button is clicked. It converts the word count data to CSV format, creates a download link for the CSV file, and triggers the file download.

### histogram.js

- The Histogram component receives the sorted word count data as props and renders a responsive bar chart using Recharts.
- The X-axis represents the words, and the Y-axis represents the frequency of occurrences.

## Regex Explanation:

- In the 'newText' function, a regular expression is used to remove email addresses and URLs while preserving words within URLs.
- The split method is then used to split the matched string into an array of words, and the filter method is used to remove any empty or whitespace-only words.



