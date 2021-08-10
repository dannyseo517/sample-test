import axios from 'axios';

const getSortedTickets = () => {
  return axios.get('https://97k63.sse.codesandbox.io/sortedTickets');
}

export default { getSortedTickets };