export const newChismePost = (
  name,
  description,
) => fetch('http://127.0.0.1:8000/api/v1/chismes/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    description
  }),
}).then(response => response.json())

export const getChismes = (
) => fetch('http://127.0.0.1:8000/api/v1/chismes/')
  .then(response => response.json())

export const getTheChisme = (
    id,
) => fetch('http://127.0.0.1:8000/api/v1/chismes/'+id+'/').
    then(response => response.json())

export const deleteChisme = (
  id,
) => fetch('http://127.0.0.1:8000/api/v1/chismes/'+id+'/', {
  method: 'DELETE',
});

