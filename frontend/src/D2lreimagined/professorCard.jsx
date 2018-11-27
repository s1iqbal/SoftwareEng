import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { Card } from 'antd';



class ProfessorCard extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { Meta } = Card;
        const { user, users } = this.props;
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta
                title="Europe Street beat"
                description="www.instagram.com"
                />
        </Card>
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

const connectedProfessorCard = connect(mapStateToProps)(ProfessorCard);
export { connectedProfessorCard as ProfessorCard };