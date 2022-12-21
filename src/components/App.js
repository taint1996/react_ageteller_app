import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";

import AgeStats from "./AgeStats";

class App extends Component {
	constructor() {
		super();

		this.state = {
			newDate: "",
			birthday: this.getCurrentDate(),
      showStats: false
		};
	}

	changeBirthday() {
		this.setState({
			birthday: this.state.newDate,
      showStats: true
		});
	}

	getCurrentDate() {
		const d = new Date();
		const currentTZ = new Intl.DateTimeFormat("en-GB");
		return currentTZ.format(d);
	}

	render() {
		return (
			<>
				<Form inline className="App">
					<h2>Input your Birthday</h2>
					<FormControl
						type="date"
						onChange={(e) => this.setState({ newDate: e.target.value })}
					></FormControl>{" "}
					<br />
					<Button variant="light" onClick={() => this.changeBirthday()}>
						Submit
					</Button>
					{ this.state.showStats ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div> : ''
          }
				</Form>
			</>
		);
	}
}

export default App;
