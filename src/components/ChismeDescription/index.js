import React from 'react';
import { getTheChisme } from '../../api';
import { Link } from 'react-router-dom';

class ChismeTemplate extends React.Component {
  constructor (props) {

    super(props);

    const { match:{ params } } = props;
    this.state = {
      id: params.number,
      chisme:undefined,
    }
  }
  componentWillMount() {
    getTheChisme(this.state.id).then(chisme => this.setState({ chisme }));
  }

  render() {
    const { chisme, id } = this.state;
    return (
      <div className="ChismeTemplate">
        { chisme && !chisme.detail ? (
          <React.Fragment>
            <h1>
              { 'Chisme' }
              { id }
            </h1>
            <div className="content">
              <h5>
                { chisme.name }
              </h5>
              <p>
                { chisme.description }
              </p>
            </div>
            <Link to='/'>
              <button> Regresar </button>
            </Link>
          </React.Fragment>
        ) : (
          <h1>
            { 'no chisme' }
            <React.Fragment>
              <Link to='/'>
                <button> Regresar </button>
              </Link>
            </React.Fragment>
          </h1>
        )}
      </div>
    )
  }

}

export default ChismeTemplate;