import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import './Login.css';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 250,
	},
	cssRoot: {
		color: theme.palette.getContrastText(purple[500]),
		backgroundColor: purple[500],
		'&:hover': {
			backgroundColor: purple[700],
		},
	},
});

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: '',
			passwd1: '',
			passwd2: '',
		};
	}

	handleChange = name => event => {
    	this.setState({
      		[name]: event.target.value,
    	});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className="LoginRoot">
				<form noValidate autoComplete="off">
					<div>
						<TextField
	        				id="mobile"
	        				label="手机号"
	        				value={this.state.mobile}
	        				onChange={this.handleChange('mobile')}
	        				className={classes.textField}
	        				margin="normal"
	        			/>
        			</div>
        			<div>
						<TextField
				        	id="passwd1"
				        	label="密码"
				        	type="password"
				        	autoComplete="请输入密码"
				        	onChange={this.handleChange('passwd1')}
				        	className={classes.textField}
				        	margin="normal"
			    		/>
		    		</div>
		    		<div>
			    		<TextField
				        	id="passwd2"
				        	label="确认密码"
				        	type="password"
				        	autoComplete="请再次输入密码"
				        	onChange={this.handleChange('passwd2')}
				        	className={classes.textField}
				        	margin="normal"
			    		/>
		    		</div>
		    		<div>
		    			<TextField
				        	id="vcode"
				        	label="验证码"
				        	onChange={this.handleChange('vcode')}
				        	className={classes.textField}
				        	margin="normal"
			    		/>
		    		</div>
		    		<div>
		    			<Button
		    				type="Submit"
				        	variant="contained"
				        	color="primary"
				        	className={classNames(classes.margin, classes.cssRoot)}
				      	>
				        	注册
				    	</Button>
		    		</div>
		    	</form>
			</div>
			)
	}
}

export default withStyles(styles)(Register)