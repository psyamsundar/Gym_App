export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' ,
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    },
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'caa2e55b10mshd806e80102a74e7p155b9djsn6fdc260d857a',
    },
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;

};