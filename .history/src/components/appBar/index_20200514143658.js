import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useAuth } from "../context/Auth";
import { withRouter } from 'react-router-dom';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';
import { Redirect } from 'react-router-dom';

const { setAuthTokens } = useAuth();

class IAppBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState({ text });

        this.props.findSuggestions(text);
    }

    onChangeSelection(text) {
        const {
            findResults,
            match,
            history,
        } = this.props;

        this.setState({ text });

        findResults(text);

        if (match.path !== '/models') {
            history.push('/models');
        }
    }

    onClick() {
        setAuthTokens();    
    localStorage.removeItem("tokens");
    return <Redirect to="/"/>;
    }

    render() {
        const {
            text,
        } = this.state;

        const {
            suggestions,
        } = this.props;

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
                onClick={this.onClick}
            />
        );
    }
}

const mapStateToProps = state => ({
    suggestions: state.suggestions,
});

const mapDispatchToProps = {
    findSuggestions,
    findResults,
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
);
