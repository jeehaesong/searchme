import React from 'react';

function withSearch (WrappedComponent) {

    return class extends React.Component{
        state = {
            filtered: []
        }
        render(){
            const { placeholder, thumnailImg, autofocus} = this.props
            return (
            <div className="search-box">
                <div className="search-container">
                    <div className="search-thumnail" style={{backgroundImage: `url(${thumnailImg})`}}>
                    </div>
                    <div>
                        <input type="text" onChange={this._onSearch}  placeholder={placeholder} autoFocus={autofocus}/>
                    </div>
                    <WrappedComponent filteredData={this.state.filtered} {...this.props}/>
                </div>
            </div>
        )}

        _onSearch = (e) => {
            let userInput = e.target.value, filtered
            if(userInput.length >= 3){
                if(this.props.searchKeyValue){
                    filtered = this.props.data.filter(ele => ele[this.props.searchKeyValue].toLowerCase().includes(userInput.toLowerCase()) )
                }else{
                    filtered = this.props.data.filter(ele => ele.toLowerCase().includes(userInput.toLowerCase()))
                }
                
            }else if(userInput.length >= 0) {
                filtered = []
            }
            this.setState({
                filtered: filtered
            })
          }
    }
    
}


export default withSearch;
