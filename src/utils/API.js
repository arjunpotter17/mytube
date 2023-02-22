import axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '57479e841cmshfa80a98cfd8e0bap1d3a59jsn1283d56aabd6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) =>{
    const {data} = await axios.request(`${BASE_URL}/${url}`, options);
    
    return data;
  }

/*
CHANNEL VIDEO DETAILS
kind:"youtube#searchListResponse"
nextPageToken:"CDIQAA"
regionCode:"DE"
pageInfo:
totalResults:175
resultsPerPage:50
items:


VIDEO DETAILS
kind:"youtube#searchListResponse"
nextPageToken:"CDIQAA"
regionCode:"DE"
pageInfo:
items:
*/