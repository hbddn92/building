import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Checkbox from 'material-ui/Checkbox';

class EventType extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
	}

	updateCheck() {
		this.setState((oldState) => {
			return {
				checked: !oldState.checked,
			};
		});	
	}

	render() {
		return (
			<div>
				<h3>Event Type</h3>
				<Checkbox
					label="Business Event"
					labelPosition="right"
					onCheck={this.updateCheck.bind(this)}
				/>
				<Checkbox
					label="Personal Event"
					labelPosition="right"
					onCheck={this.updateCheck.bind(this)}
				/>

				<Checkbox
					checkedIcon={<ActionFavorite />}
					uncheckedIcon={<ActionFavoriteBorder />}
					label="Custom icon"
				/>
			</div>
		)
	}
}

module.exports = EventType