import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import './HomePage.css';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const style = {

        }
        const { user, users } = this.props;
        return (
            <div style={{textAlign:'center'}} className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}</h1>
                <p>Your Username is: {user.username}</p>
                <p>Your First Name is: {user.firstName}</p>
                <p>Your Last Name is: {user.lastName}</p>

                {
                    // <h3>All registered users:</h3>
                    // {users.loading && <em>Loading users...</em>}
                    // {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    // {users.items &&
                    //     <ul>
                    //         {users.items.map((user, index) =>
                    //             <li key={user.id}>
                    //                 {user.firstName + ' ' + user.lastName}
                    //                 {
                    //                     user.deleting ? <em> - Deleting...</em>
                    //                     : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                    //                     : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                    //                 }
                    //             </li>
                    //         )}
                    //     </ul>
                    // }
                }


                <div id="main">

                    <div>
                        <Link to="/d2lreimagined">
                            <button type="button" className="btn btn-primary">View d2lreimagined</button>
                        </Link>
                    </div>

                    <div>
                        <Link to="/admin">
                            <button type="button" className="btn btn-primary">View Admin Panel</button>
                        </Link>
                    </div>

                </div>

                <br /><br />
                <Link to="/login">
                    <button type="button" className="btn btn-danger">Logout</button>
                </Link>
                <p>
                    
                </p>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };