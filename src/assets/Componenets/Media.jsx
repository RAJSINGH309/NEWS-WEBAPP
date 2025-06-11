import React from 'react'
import './Media.css'

const Media = ({data}) => {
  const handleClick = (url)=>{
window.open(url,"blank");
// console.log('the button is rendered');
  }
 
  // console.log(data);
  return (
     <div className='media-container'>
      {  data.map((item , index) => 
        
         ( <div className='card' key={index}>
            <img  src={item.urlToImage} alt="news" />
            <div className='content'>
              <h2 onClick={()=>handleClick(item.url)} style={{cursor:'pointer'}}>{item.title}</h2>
            
              <h4>By {item.source.name}</h4>
              {/* <p>{item.publishedAt}</p> */}
              <p>{item.description}</p>
              <button onClick={ () =>handleClick(item.url)}>Read More</button>
            </div>
          </div>)
        
      )}
    </div>
    
     )
   
}


export default Media
