import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	container: {
		//display: 'flex',
		//flexWrap: 'wrap',
		//maxWidth: 345,
		textAlign: 'center',
		margin: 0,
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 250,
	}
});

class BlockWriter extends Component {
	constructor(props) {
		super(props);
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container}>
				<form noValidate autoComplete="off">
					<div>
						<TextField
							id=""
							label="来自"
							placeholder="您怎么称呼"
							className={classes.textField}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							id=""
							label="送给"
							placeholder="对方怎么称呼"
							className={classes.textField}
							margin="normal"
						/>
					</div>
					<div>
						<TextField
							id="content"
							label="留言"
							placeholder="请输入留言"
							className={classes.textField}
							//value={this.state.content}
							margin="normal"
							multiline
							rows="4"
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default withStyles(styles)(BlockWriter);