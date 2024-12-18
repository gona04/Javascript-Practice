const fetch = require('node-fetch');

async function fetchData() {
  try {
    const response = await fetch('https://bible-api.com/john%203');
    const data = await response.json();
    data.verses.forEach(verse => {
      console.log(verse);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
