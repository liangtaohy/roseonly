import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Register from './user/Register';
import Login from './user/Login';

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 40,
		backgroundColor: theme.palette.background.paper,
		//boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		borderRadius: '5px',
	},
});

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

class LoginModal extends React.Component {
	
	constructor(props) {
    	super(props);
    	const { open } = props;

    	this.state = {
			open: open || false,
			loginToggle: true, // if true, show login modal else show register modal
		}
	}

	handleOpen = () => {
		this.setState({open: true});
	}

	handleClose = () => {
		const { onClose } = this.props;
		this.setState({open: false});
		if (onClose) {
			onClose();
		}
	}

	showModal = () => {
		const { loginToggle } = this.state;
		const { classes } = this.props;

		if (!loginToggle) {
			return (
			<div style={getModalStyle()} className={classes.paper}>
	        			<Typography variant="title" id="modal-title">
              				<p>注册</p>
            			</Typography>
	        			<hr />
	        			<div>
	        				<p>已经注册？<a href="#">登录</a></p>
	        				<Register />
	        			</div>
	        </div>)
		} else {
			return (
			<div style={getModalStyle()} className={classes.paper}>
	        			<Typography variant="title" id="modal-title">
              				<p>登录</p>
            			</Typography>
	        			<hr />
	        			<div>
	        				<p>没有帐号？<a href="#">注册</a></p>
	        				<Login />
	        			</div>
	        </div>)
		}
	}

	render() {
    	const { classes } = this.props;
    	return (
    		<div>
    			<Modal
        			aria-labelledby="simple-modal-title"
        			aria-describedby="simple-modal-description"
        			open={this.state.open}
        			onClose={this.handleClose}
       			>
	        		{ this.showModal() }
        		</Modal>
    		</div>
    		)
	}
};

LoginModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginModal);