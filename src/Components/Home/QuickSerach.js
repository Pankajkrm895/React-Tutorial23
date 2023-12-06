import React,{Component} from 'react';
import './/QuickSearch.css'

const base_Url = "http://3.17.216.66:4000";

class QuickSearch extends Component {
    constructor(){
        super()
        this.state={
            mealType:''
        }
    }
    render(){
        return (
          <div className="QuickSearch">
            <span id="QuickSearchHeading">Quick Search</span>
            <span id="QuickSubHeading">Find Restaurant By MealType</span>
            <div>
                {/* <QuickSearch mealData={this.state.mealtype}/> */}
            </div>
          </div>
        );
    }

    // api calling on loadpage
    componentDidMount(){
        fetch(`${base_Url}/quickSearch`, { method: "GET" })
          .then((res) => res.json())
          .then((data) => {
            this.setState({ mealType: data });
          });
    }
}

export default QuickSearch;