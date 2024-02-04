import React, { useState } from 'react'

export const Loremgenerator = () => {
   const [numWords,setnumWords] =useState(5);
   const [paragraph,setParagraph]=useState("");
   const generateLorem = () => {
    const loremIpsum = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias similique ab sit id cum mollitia omnis sed eligendi tempore, vero earum. Voluptatum, commodi vero sit similique, quae delectus tenetur pariatur debitis sed officiis itaque, cupiditate ea atque corrupti architecto. Ad, inventore veritatis at obcaecati ut deserunt consequuntur neque atque provident, eius magni tempore dolore ipsum vero suscipit odio! Nisi porro nobis ab rem unde aperiam quo consequatur, laboriosam non eveniet magni nihil, quia consectetur temporibus? Esse debitis maxime delectus voluptatem iste repudiandae provident optio tempora eius natus vero odio cumque nesciunt corrupti veritatis, quos cupiditate quidem saepe, fuga dignissimos iusto?"; // Use a longer source text
    const wordList = loremIpsum.split(' ');
    const paragraphWords = [];
  
    while (paragraphWords.length < numWords) {
      const index = Math.floor(Math.random() * wordList.length);
      paragraphWords.push(wordList[index]);
    }
  
    const paragraph = paragraphWords.join(' ');
    setParagraph(paragraph);
  };
  
  return (
    <div className='search_bar'>
        <input 
        type='number'
        value={numWords}
        placeholder='Enter the numbe of words'
        onChange={(e) => setnumWords(parseInt(e.target.value))}/>
        <button onClick={generateLorem}>Generate paragraph</button>
      <p>{paragraph}</p>
    </div>
  )
}
