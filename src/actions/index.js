let postId = 0

export const addPost = text => ({
  type: 'ADD_TODO',
  id: postId++,
  text,
  karma: 0,
})

export const karmaUp = id => ({
	type: 'KARMA_UPED',
	payload: id
})

export const karmaDown = id => ({
	type: 'KARMA_DOWNED',
	payload: id
})