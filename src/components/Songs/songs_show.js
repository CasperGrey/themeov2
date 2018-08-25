import React, { Component } from 'react';
import {fetchSong, deleteSong} from "../../actions/index";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class SongsShow extends Component {

    componentDidMount() {
        if (!this.props.song) {
        const {id} = this.props.match.params;
        this.props.fetchSong(id);
        }
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deleteSong(id, () => {

            this.props.history.push('/');
        });
    }

    render(){
        const{ song } = this.props;

        if (!song) {
            return <div>Loading....</div>;
        }

           return (
            <div>
                <Link to="/"> Back to Home</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                    >
                    Delete Song
                </button>
                <h3>{song.song_name}</h3>
                <h6>{song.song_url}</h6>
                <h6>{song.video_id}</h6>
            </div>
        );
    };
}


function mapStateToProps({ songs }, ownProps) {

    return { song: songs[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchSong, deleteSong})(SongsShow);
