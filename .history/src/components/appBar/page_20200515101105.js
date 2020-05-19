import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '../autocomplete';
import LogOutButton from '../logOutButton';
import './style.css';

function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection
    } = props;

    return (
        <AppBar position="sticky">
            <Toolbar className="appbar">
                <Typography variant="h3" color="inherit">
                    Ateam
                </Typography>

                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <LogOutButton/>
            </Toolbar>
        </AppBar>
    );
}

export default Page;
