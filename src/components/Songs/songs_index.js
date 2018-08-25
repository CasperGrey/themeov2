import React , {Component} from "react";
import {connect} from 'react-redux';
import {fetchSongs} from "../../actions/index";
import _ from 'lodash';
import {Link} from 'react-router-dom';

class SongsIndex extends Component {
    componentDidMount(){
        this.props.fetchSongs();
    }

    renderSongs() {
        console.log(this.props.songs);
       return _.map(this.props.songs, song => {
           return(
               <li className="list-group-item" key={song.id}>
                   <Link to={`/songs/${song.id}`}>
                   {song.song_name}
                   </Link>
               </li>
           );
       });
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/songs/entry">
                        Add a song
                    </Link>
                </div>
                <h3>Songs</h3>
                <ul className="list-group">
                    {this.renderSongs()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {songs: state.songs};
    }

export default connect(mapStateToProps, { fetchSongs })(SongsIndex);