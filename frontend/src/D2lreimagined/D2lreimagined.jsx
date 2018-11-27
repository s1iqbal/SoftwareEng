import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { ProfessorCard } from './professorCard.jsx'

class SoftwareEng extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <h1>D2L-REIMAGINED</h1>
                    <ProfessorCard />
                    <Link to="/">
                        <button type="button" class="btn btn-primary">Go Back</button>  
                    </Link>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedD2lreimagined = connect(mapStateToProps)(SoftwareEng);
export { connectedD2lreimagined as SoftwareEng };