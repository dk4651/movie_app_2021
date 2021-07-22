import React from 'react';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/cjs/react-dom-test-utils.production.min';
//import logo from './logo.svg';
//import './App.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(movies);
    this.setState({ movies, isLoading : false });
    // console.log(this.state.isLoading);

    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
    // console.log(movies.data.data.movies);
    // this.setState({movies:movies});
  }

  componentDidMount(){
    this.getMovies();


    // setTimeout(()=>{
    //   this.setState({isLoading : false});
    // },6000);
  }
  render(){
       const {isLoading, movies} = this.state;
    return(
      <section className = "container">
      {isLoading ? (
        <div className = "loader">
          <span className ="loader__text">Loading...</span>
        </div>):( 
        <div className = "movies">  
          {movies.map(list=>
          (<Movie 
            key = {list.id} 
            id={list.id} 
            year={list.year} 
            title={list.title} 
            summary={list.summary}
            poster ={list.small_cover_image}
            genres = {list.genres} />
          ))}</div>)
      } 
    </section>
      // <div>
      //   {isLoading ? "Loading" : 
      //   movies.map(list=>
      //     (<Movie id={list.id} year={list.year} title={list.title} summary={list.summary} poster ={list.small_cover_image}/>
      //       ))
      //   } 
      // </div>


    )

  }

}

// class App extends React.Component{
//   state = {
//     count: 0
//   };
//   add = () =>{
//     console.log('add');
//     //this.state.count=1;
//     //this.setState({count:this.state.count +1});
//     this.setState(Current =>({count:Current.count +1}));

//   };
//   minus = () =>{
//     console.log('minus');
//     //this.state.count=1;
//     this.setState({count:this.state.count -1});

//   };
  
//   render(){
    
//     return (
//     <div>
//       <h1> The number is: {this.state.count} </h1>
//       <button onClick = {this.add} >Add</button>
//       <button onClick = {this.minus} >Minus</button>
//     </div>
//     //this.minus()로 하면 시작하자마자 바로 minus 함수가 call 되고 클릭할 때 마다 call되진 않는다 
//     );
//   }

// }

export default App;

// function Food({fav,image,rating}){
//   console.log({fav});

//   return <div>
//     <h2>I like {fav}</h2>
//     <h4>{rating}/5.0</h4>
//     <img src = {image} alt = {fav}/>

//     </div>

// }

// Food.propTypes = {
//   fav : PropTypes.string.isRequired,
//   image : PropTypes.string.isRequired,
//   rating : PropTypes.number
// };
 

// const FoodILike = [
//   {
//     id : 1,
//     name : "Kimchi",
//     image : "https://kelliesfoodtoglow.com/wp-content/uploads/2016/10/kimchi1.jpg",
//     rating : 5
//   },
//   {
//     id : 2,
//     name : "samgeopsal",
//     image : "http://static.news.zumst.com/images/2/2017/02/26/2030c76e427f4c278c16ab0eb81bd45d.jpg",
//     rating : 4.9
//   },
//   {
//     id : 3,
//     name : "chicken",
//     image : "http://www.ckhero.co.kr/new/theme/basic/img/main_quick_menu7.png",
//     rating : 4.7
//   }]

//function renderFood(dish){
//  return(
//    <div>
//     <Food fav = {dish.name} image={dish.image} />
//    </div> 
//
//  )
// }
// function App() {
//   return (
    //{FoodILike.map(renderFood)}
    // <div>   
    //  <h1>hello</h1> 
    //  {FoodILike.map( dish => (
    //  <Food key = {dish.id} fav = {dish.name} image = {dish.image} 
    //  rating = {dish.rating} />
    //  ))}
    // </div>
   
//   );
// }


