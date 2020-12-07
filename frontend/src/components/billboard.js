import React,{ Component}  from 'react';
import "../App.css";
import data from "./data.json"
import { NavigationBar } from './NavigationBar';


class SearchFilter extends Component {
   state = {
     itemsToDisplay: [],
     itemsToUse: [],
     songs: []
   };
   render() {
     return (
       <div>
       <NavigationBar />
         <div className="restfilter">
           <div>
            <h1 id="h">Choose genre:</h1>  
             <select id="restfilter" onChange={this.optionSelected}>
               <option value="any">Choose Any</option>
               {this.state.songs.map(genre => {
                 return <option value={genre}>{genre}</option>;
               })}
             </select>
           </div>
         </div>
         <div className="restcontainer">
           {this.state.itemsToDisplay.map(rest => {
             let songs = rest["Genres"]
               .substring(1, rest["Genres"].length - 2)
               .split(",");
             return (
               <div className="rest">
                 <div className="restinfo">
                   <br />
                   <span className="restname">{rest["Ranking"]}- </span>
                   <span className="restname">{rest["Name"]}</span>
                   <div className="restsongs">
                   {songs.map(genre => {
                       let genresToShow = genre.substring(
                         1,
                         genre.length - 1
                       );
                       genresToShow = genresToShow.includes("'")
                         ? genresToShow.substring(1, genresToShow.length)
                         : genresToShow;
                       return (
                         <div pill className="restsong" variant="light">
                           {genresToShow}
                         </div>
                       );
                     })}
                   </div>
                 </div>
                 <div className="sepline"></div>
                 <div className="reststats">
                 </div>
               </div>
             );
           })}
         </div>
       </div>
     );
   }
 
   filterOnSearch = event => {
     if (
       !event.target.value ||
       event.target.value === " " ||
       event.target.value === ""
     )
       this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
     else {
       let itemsToDisplay = [];
       itemsToDisplay = this.state.itemsToUse.filter(
         item =>
           item["Name"]
             .toLowerCase()
             .includes(event.target.value.toLowerCase()) ||
           item["Genres"]
             .toLowerCase()
             .includes(event.target.value.toLowerCase()) ||
           item["City"].toLowerCase().includes(event.target.value.toLowerCase())
       );
       this.setState({ itemsToDisplay });
     }
   };
 
   optionSelected = () => {
     var e = document.getElementById("restfilter");
     var selected = e.options[e.selectedIndex].text;
 
     if (selected === "Choose Any")
       this.setState({ itemsToDisplay: [...this.state.itemsToUse] });
     else {
       let itemsToDisplay = [];
       itemsToDisplay = this.state.itemsToUse.filter(item =>
         item["Genres"].toLowerCase().includes(selected.toLowerCase())
       );
       this.setState({ itemsToDisplay });
     }
   };
 
   componentDidMount() {
     this.reRenderList();
   }
 
   reRenderList() {
     var songs = [];
     var itemsToDisplay = [];
     for (var i = 0; i < data.length; i++) {
       itemsToDisplay.push(data[i]);
       data[i]["Genres"]
         .substring(1, data[i]["Genres"].length - 2)
         .split(",")
         .forEach(genre => {
           let c = genre.substring(1, genre.length - 1);
           c = c.includes("'") ? c.substring(1, c.length) : c;
           if (songs.indexOf(c) < 0) {
             songs.push(c);
           }
         });
     }
 
     this.setState({ songs });
 
     this.setState({ itemsToDisplay }, () => {
       this.setState({ itemsToUse: [...this.state.itemsToDisplay] });
     });
   }
 }

export const Billboard = () => ( 
    <div><SearchFilter /> </div>
)