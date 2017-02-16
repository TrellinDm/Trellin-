import React, {Component} from 'react';
// import SearchResults from './SearchResults';
import { connect } from 'react-redux';
import {filterSrch} from '../../reducers/searchReducer';
import {setInitState} from '../../reducers/searchReducer';
import axios from 'axios';

class Search extends Component {

  constructor(props) {
    super(props)
    this.getConnections = this.getConnections.bind(this);
  }

  componentDidMount() {
    axios.post('/getConnections', {
      id: 1
    }).then(res => {
      this.props.setInitState(res.data);
    });
  }

  getConnections(event) {
    var srch = event.target.value;
    this.props.filterSrch(srch);
  }

  render() {
    return (
      <input className="searchBar" id="placeholderImg" placeholder="Search" onChange={this.getConnections} />
    )
  }
}

const mapDispatchToProps = {
  filterSrch: filterSrch,
  setInitState: setInitState
}

function mapStateToProps(state) {
  return {
    connections: state.search.updatedConnections
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
