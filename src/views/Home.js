import React, { Component } from 'react';


class Home extends Component {

  constructor(props){
    super(props);
    
    const redirectfrom = this.props.location.redirectfrom;
		if(redirectfrom==='login'){
			window.location.reload();
    }
    
  }
  

  
  

	
  
  
render() {
  return (
 
<div className="container">

			</div>

  );
}
}

export default Home;
