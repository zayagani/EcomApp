import React ,{Component} from 'react';
import countriesList from "./countries.json";
import { Card, Icon } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react'

class Search extends Component{

constructor(){
super()
this.state={search:""}
this.onChange=this.onchange.bind(this);
}


/*onchange = e => {
  this.setState({ search: e.target.value });
};
*/
onchange(e){

  this.setState({ search: e.target.value });

}


render(){
const { search } = this.state;
const filteredCountries = countriesList.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

return(<div>

<div class="ui search">
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="search country" value={search} onChange={this.onChange}/>
    <i class="search icon"></i>
  </div>
  <div class="results"></div>
</div>

<Pagination defaultActivePage={5} totalPages={10} />

{filteredCountries.map(country => {
  return(
   
<Card>
    <Card.Content header='Country' />
    <Card.Content description={country.name} />
    <Card.Content extra>
      <Icon name='flag icon' />{country.code}
    </Card.Content>
</Card>
  )
  
})}
</div>)
}
}

export default Search;