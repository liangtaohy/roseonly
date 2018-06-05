import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './LoveCard.css';

const styles = theme => ({
	card: {
		maxWidth: 400,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
});

class LoveCard extends Component {
	constructor(props) {
		super(props);
		const { mediaId, message, orderDetail } = this.props;
		this.state = {
			mediaId: mediaId || '',
			message: message || null,
			orderDetail: orderDetail || null,
			expanded: false,
		};
	}

	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { classes } = this.props;

		//const { message, orderDetail } = this.state;

		let message = {
			to: '小叶子',
			from: '赢驷',
			text: '驷要当皇帝了。驷要当皇帝了。驷要当皇帝了！！！',
			ctime: '2018年06月05日'
		}

		let orderDetail = {
			tokenId: '1',
			tx: '0x232343owrwoeurweor932r3433434343434434',
			eth: '0x23432424243534543543535'
		}

		return (
			<div className="LoveCard">
				<Card className={classes.card}>
					<CardMedia
			        	className={classes.media}
			        	image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
			        />
			        <CardContent>
						<Typography gutterBottom variant="title" align="left">
							{message.to}
						</Typography>
						<Typography variant="body2" gutterBottom align="left">
							{message.text}
						</Typography>
						<Typography variant="title" gutterBottom align="right">
							{message.from}
						</Typography>
						<Typography variant="caption" gutterBottom align="right">
							{message.ctime}
						</Typography>
			        </CardContent>
			        <CardActions className={classes.actions} disableActionSpacing>
						<IconButton aria-label="喜欢">
							<FavoriteIcon color="secondary" />
						</IconButton>
						<IconButton aria-label="分享">
							<ShareIcon />
						</IconButton>
						<IconButton
							className={classnames(classes.expand, {
								[classes.expandOpen]: this.state.expanded,
							})}
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expanded}
							aria-label="交易数据"
						>
							<ExpandMoreIcon />
						</IconButton>
			        </CardActions>
			        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
			        	<CardContent>
			        		<Typography gutterBottom align="left">Token:{orderDetail.tokenId}</Typography>
			        		<Typography gutterBottom align="left">TX:{orderDetail.tx}</Typography>
			        		<Typography gutterBottom align="left">ETH:{orderDetail.eth}</Typography>
			        	</CardContent>
			        </Collapse>
				</Card>
			</div>
		)
	}
}

export default withStyles(styles)(LoveCard);