import React, { Component } from 'react';
import axioApi from './../axioConfig';
import qs from 'qs';
let $this;

class Filter extends Component {
  render() {
    return (
      <div >
        <br></br>
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}  className="form-control" placeholder="Search by Student Name "/>
      </div>
    );
  }
}

class Filter1 extends Component {
  render() {
    return (
      <div >
        <br></br>
        <input type="text" onKeyUp={event => 
          this.props.onTextChange(event.target.value)}  className="form-control" placeholder="Search by Batch Year "/>
      </div>
    );
  }
}


class Post extends Component {

  constructor(props){
    super(props);
    $this = this;
  
	this.state = {posts:[], keyword:'',filterString:'', filterString1:''}
  

}

componentDidMount(){

    setTimeout(function(){			
        axioApi.get('auth/user').then((res)=>{
        console.log(res.data);
        });
  },2000)
  this.getPosts()
setTimeout(()=>{
this.setState({filterString: ''});
},2000);
setTimeout(()=>{
  this.setState({filterString1: ''});
  },2000);
}
getPosts(){
    const filter = {
			keyword : $this.state.keyword,
		
		};						
		axioApi.get('posts?'+qs.stringify(filter)).then((res) => { 
			$this.setState({
				posts : res.data
			})
		});
	}
  
  tabRows(){
		if($this.state.posts instanceof Array){
      return $this.state.posts
         .filter(PostList=>
          PostList.batch_Year.toLowerCase().includes(
          this.state.filterString1.toLowerCase()))
         .filter(PostList=>
            PostList.student_Name.toLowerCase().includes(
            this.state.filterString.toLowerCase()))
         .map(function(post, i){
				return <PostList post={post} key={i} />
			})		
		}
}
changeKeyword(e){		
  $this.setState({
    keyword : e.target.value
  })
  setTimeout(function(){			
    $this.getPosts()
  }, 100)	
}



render() {
  


  return (
<div className="container">
<div className="row">
						
<div className="col-md-3">
<br/>
	<input type="text" onBlur={this.changeKeyword} className="form-control" placeholder="Search by Batch Year " />	
	<br/>		
</div>
<div className="col-md-3">
<br/>
<input type="text" onBlur={this.change_Keyword} className="form-control" placeholder="Search by Student Name " />	
<br/>


</div>
<Filter onTextChange={text => {
              this.setState({filterString: text})
            }}/>
  <Filter1 onTextChange={text => {
   this.setState({filterString1: text})
   }}/>




<div className="container">
            <div className="row">
			<div className="table-responsive">
        <table className="table table-striped table-primary">
         <thead>
         <tr>
		  <th>Batch Year</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Student Name</th>
            <th>Project Name</th>
            <th>Project Supervisor</th>
            <th>External Supervisor</th>
            <th>Co Supervisor</th>
            <th>Project Id</th>
            <th></th>
            </tr>
        </thead>									
        </table>
		</div>
		</div>	
		</div>			

</div>
	<div className="row">						
         <div className="col-md-12">
								
				<br/>
				{this.tabRows()}

			
					
					</div>
					</div>
			</div>

  );
}
}

export default Post;
class PostList extends Component{
	constructor(props){
		super(props)
  }
  render(){
		return(
             

           
			<div className="table-responsive text-nowrap">
			
               <table className="table table-striped">
					<tbody>
                      <tr>
					  <td>{this.props.post.batch_Year}</td>
            <td>{this.props.post.student_Name}</td>
            <td>{this.props.post.project_Name}</td>
            <td>{this.props.post.project_Supervisor}</td> 
            <td>{this.props.post.external_Supervisor}</td> 
            <td>{this.props.post.co_Supervisor}</td> 
            <td>{this.props.post.project_id}</td>

					  </tr>

					</tbody>
				</table> 
		    </div>
		    						
		)
	}
} 