import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chisme from '../Chisme';
import { describeChisme } from '../../actions';


class ChismeList extends React.Component {

  componentWillMount() {
    this.props.describeChisme()
  }

  render() {
    const response = this.props.data;
    console.log(response.byId)
    return (
      <div className="content">
        <h2>
          { 'Ultimos chismes' }
        </h2>
        <div className="chismes">
          {response.byId.length > 0 ? (
          <ul>
            { response.byId.map(chisme => <Chisme key={chisme.id} chisme={chisme} />) }
          </ul>
          ) : (
            'cargando' 
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({data: state.chisme});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {describeChisme},
    dispatch,
   )

export default connect(mapStateToProps, mapDispatchToProps)(ChismeList);