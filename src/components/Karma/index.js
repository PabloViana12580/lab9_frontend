import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Karma = (
	{post,
	 karmaUp,
	 karmaDown}
	) => (
		<div className = "karmaController">
			<button onClick = { () => {karmaUp(post.id)}}>
				+
			</button>
			<button onClick = { () => {karmaDown(post.id)}}>
				-
			</button>
			<h3>
				{post.karma}
			</h3>
		</div>
);

export default connect(undefined,
	dispatch => ({
		karmaUp(id){
			dispatch(actions.karmaUp(id))
		},
		karmaDown(id){
			dispatch(actions.karmaDown(id))
		}
	})
)(Karma);
