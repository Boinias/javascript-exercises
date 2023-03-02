const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(obj) {
    let titles = []
    for (let i = 0; i < obj.length; i++) {
        titles.push(obj[i].title)
    }
    return titles
};


console.log(getTheTitles(books))


// Do not edit below this line
module.exports = getTheTitles;
