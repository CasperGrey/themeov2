import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { saveSong } from "../../actions/index";


class SongsNew extends Component {

    renderField(field) {

        const { meta: { touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

            return (
                <div className= {className}>
                    <label>{field.label}</label>
                    <input
                        className="form-control"
                        type="text"
                        {...field.input}
                    />
                    <div className="text-help">
                    {touched ? error : ''}
                    </div>
                </div>
            )
    }

    onSubmit(values){

        this.props.saveSong(values, () => {
            this.props.history.push('');
        });
    }


    render() {
        const {handleSubmit} = this.props;

        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
                    label="songid"
                    name="song_id"
                    component={this.renderField}
               />
               <Field
                   label="Song Name"
                   name="song_name"
                   component={this.renderField}
               />
               <Field
                   label="Artist Id"
                   name="artist_id"
                   component={this.renderField}
               />
               <Field
                   label="Genre Id"
                   name="genre_id"
                   component={this.renderField}
               />
               <Field
                   label="Song URL"
                   name="song_url"
                   component={this.renderField}
               />
               <Field
                   label="Video Id"
                   name="video_id"
                   component={this.renderField}
               />
               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>

        );
    }
}

function validate(values) {

    const errors = {};
    const requiredFields = [
        'song_id',
        'song_name',
        'artist_id',
        'genre_id',
        'song_url',
        'video_id'
    ]

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    // if errors is empty the form is ok to submit
    return errors;
}

export default reduxForm({
    form: 'SongsNewForm',
    validate
})(
    connect(null,{ saveSong })(SongsNew)
);