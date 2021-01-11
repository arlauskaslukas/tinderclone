import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="repeat">
                <ReplayIcon className="repeaticon" fontSize="large"/>
            </IconButton>
            <IconButton className="left">
                <CloseIcon fontSize="large" className="closeicon"/>
            </IconButton>
            <IconButton className="superlike">
                <StarRateIcon fontSize="large" className="staricon"/>
            </IconButton>
            <IconButton className="right">
                <FavoriteIcon fontSize="large" className="likeicon"/>
            </IconButton>
            <IconButton className="boost">
                <FlashOnIcon fontSize="large" className="boosticon"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
