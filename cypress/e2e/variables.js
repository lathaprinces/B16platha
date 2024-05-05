function findOccurrences(favoriteNumber) {
    let occurrences = 0;
  
    for (let i = 1; i <= 100; i++) {
      if (i === favoriteNumber) {
        occurrences++;
      }
    }
  
    return occurrences;
  }
  
  const favoriteNumber = 7
  const result = findOccurrences(favoriteNumber);
console.log(result)


    