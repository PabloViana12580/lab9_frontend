import React, {Fragment} from 'react';
import Post from '../Post';
import Karma from '../Karma';
import { connect } from 'react-redux';

class PostList extends React.Component{
	render(){
		const { posts } = this.props;
		return(
			<Fragment>
				{posts.map((p) => (
					<div className ="post" key = {p.id}>
						<Post text = {p.text} />
						<Karma post = {p} />
					</div>)
					)
				}
			</Fragment>
			);
	}
}

// start of code change
const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, undefined)(PostList);