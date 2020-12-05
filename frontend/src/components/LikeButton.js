import React,{ useState,useEffect }  from 'react';

export const LikeButton = () => {

const InitialState = () => Number(window.localStorage.getItem('count')) || 0
const [count, setCount] = useState(InitialState)

const addLike = (amount) => {
  setCount(count + amount)
}

useEffect(()=> {
  window.localStorage.setItem('count', count);
}, [count])

return(
  <div>
    <div className="button-container">
      <button style={{color:"white"}}  className="button button--primary"
       onClick={() => addLike(1)}><i class="far fa-thumbs-up"></i></button>
       <span style={{color:"white"}}> {count}</span>
    </div>
  </div>);
}