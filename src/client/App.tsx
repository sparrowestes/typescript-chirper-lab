import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			chirps: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/chirps');
			let chirps = await r.json();
			this.setState({ chirps });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return this.state.chirps.map((chirp: chirp) => (
			<div className="card m-4 shadow">
				<div className="card-body">
					<h5 className="card-title">{chirp.username}</h5>
					<p className="card-text">{chirp.message}</p>
					<button type="submit" className="btn btn-dark" onClick={this.handleClick}>Delete</button>
					<div></div>
					<button type="submit" className="btn btn-secondary" onClick={this.handleClick}>Edit</button>
				</div>
			</div>
			
		))
	}
}

export interface IAppProps { }

export interface IAppState {
	chirps: chirp[];
}

export interface chirp {
	username: string,
	message: string
}

export default App;


