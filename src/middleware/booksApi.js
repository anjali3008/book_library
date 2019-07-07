import {
    _getBooks,
    _saveBook
  } from './_DATA.js'

export function getInitialData () {
    return Promise.all([
      _getBooks(),
    ]).then(([books]) => ({
      books
    }))
  }

  export function saveBook (info) {
    return _saveBook(info)
  }

  export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
