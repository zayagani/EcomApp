import React ,{Component} from 'react';
import countriesList from "./countries.json";


class Search extends Component{

constructor(){
super()

this.state={search:""}

}

render(){
const { search } = this.state;
const filteredCountries = countriesList.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

return(<div>

{filteredCountries.map(country => {
                return <div>{country.name}</div>;
              })}


<h3>Search Component</h3>
{filteredCountries.name}
{console.log(filteredCountries,"counriese")}
</div>)
}
}

export default Search;