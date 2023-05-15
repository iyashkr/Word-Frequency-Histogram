import React, { useState } from 'react';
import Histogram from './histogram';

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://www.terriblytinytales.com/test.txt');
      const text = await response.text();
  
      // Remove email addresses while preserving words within URLs
      const newText = text.replace(/(\S*@\S*\.\S*)|((?:http[s]?\/\/)?(?:www\.)?\S+\.\S+)/gi, (match) => {
        const words = match.split(/\W+/).filter((word) => word.trim() !== '');
        return words.join(' ');
      });
  
      const words = newText.split(/\s+/);
  
      const wordCount = new Map();
      words.forEach((word) => {
        const newWord = word.replace(/[^\w\s]/gi, '').toLowerCase();
        const count = wordCount.get(newWord) || 0;
        wordCount.set(newWord, count + 1);
      });
  
      const sortedData = Array.from(wordCount.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 20);
      setData(sortedData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  

  const handleExport = () => {
    const csvData = data.map(([word, count]) => `${word},${count}`).join('\n');
    const csvBlob = new Blob([csvData], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvBlob);
  
    const link = document.createElement('a');
    link.href = csvUrl;
    link.download = 'word-histogram.csv';
    link.click();
  
    URL.revokeObjectURL(csvUrl);
  };

  return (

    <div className="min-h-screen w-full">
      <div className='w-full lg:max-w-[95%] mx-auto p-5 md:px-12 md:py-8'>
      <h1 className="text-3xl font-bold mb-8">Word Frequency Histogram</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>

      {data.length > 0 && (
        <>
          <Histogram data={data} />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 first-letter:rounded mt-4"
            onClick={handleExport}
          >
            Export
          </button>
        </>
      )}
      </div>
    </div>
  );
};

export default IndexPage;
