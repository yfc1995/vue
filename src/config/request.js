import axios from 'axios';

export default {
  get:(url, config)=> {
    return new Promise((resolve, reject) => {
      console.log(url, config);
    })
  },
  post:(url, config) => {
    return new Promise((resolve, reject) => {
      
    })
  }
}
