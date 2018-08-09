import axios from 'axios'

const myApi = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api'
})

function getBook (bookID) {
  return myApi.get('/books/' + bookID).then(response => {
    return response.data
  })
};

function getBooks () {
  return myApi.get('/books/').then(response => {
    return response.data
  })
};

function getGuest (guestID) {
  return myApi.get('/guests/' + guestID).then(response => {
    return response.data
  })
};

export default {
  getBook,
  getBooks,
  getGuest
}
