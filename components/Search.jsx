import React, { useState, useEffect } from "react";

import { Product, Category } from './'

// *****Look into how to get this to output in different component (index.js of products - maybe needs to just be a js file that exports search functionality). Will probably the way I'm doing it have to have a SearchProduct and SearchCategory component. Also, am I allowed/supposed to do useEffect with next js or should i be using getServersideprops or something? On another note completely, what's the deal with all these cookies warning in browser console?

const Search = ({ items }) => {
  const [searchValue, setSearchValue] = useState('');
  const [matches, setMatches] = useState([]);

  const type = items[0]._type
  console.log('type', type) //Very odd it's console loggin twice - is this bc of useEffect?

  useEffect(() => {
    setMatches(findMatches(searchValue, items));
  }, [searchValue, items]);

  function findMatches(wordToMatch, items) {
    return items.filter(item => {
      const regex = new RegExp(wordToMatch, 'gi');
      // return item.name.match(regex) || item.category.match(regex) //if want to include category names in search
      return item.name.match(regex)
    });
  }

  function findType(items) {

  }

  // If have submit button 
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the searchTerm, like send it to an API
  //   console.log(`Searching for ${searchTerm}...`);
  // };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       type="text"
  //       value={searchTerm}
  //       onChange={handleChange}
  //       placeholder="Search..."
  //     />
  //     <button type="submit">Search</button>
  //   </form>
  // );

  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div>
      <div className="flex justify-center mb-12">
        <input
          className="search border sm:w-[250px] border-slate-400 bg-gray-100 rounded px-2"
          // className="search my-2 border-solid border-1 border-slate-800"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyUp={handleSearchChange}
        />
      </div>
      {/* <ul className="suggestions">
        {matches?.map(item => (
          <li key={item.name}>
            <span className="name">
              {item.name}
              {item.name.replace(regex, `<span class="hl">${searchValue}</span>`)},
              {item.category.replace(regex, `<span class="hl">${searchValue}</span>`)}
            </span>
          </li>
        ))}
      </ul> */}
      
      <div className="flex justify-center gap-[15px] flex-wrap">
        {/* {matches?.map((item) => (
          <Product key={item._id} product={item} />
        ))} */}
        {/* {console.log('matches', matches)} */}
        {type === 'product' && matches.length > 0 ? 
        matches?.map((item) => (
          <Product key={item._id} product={item} />
          )) : null
        }
        {type === 'category' ? 
        matches?.map((item) => (
          <Category key={item._id} category={item} />
          )) : null
        }
      </div>

    </div>
  );
};

export default Search;
