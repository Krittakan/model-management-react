import axios from 'axios';

export default class announcement {
	constructor(component) {
		this.component = component;
	}

	getList(searchObj, callback, errCallback) {
		axios
			.post('/api/model/list', searchObj)
			.then(response => {
				if (callback) {
					callback(response);
				}
			}).catch((err) => {
				if (errCallback) {
					errCallback();
				}
			});
	}

	create(inputs) {
		let formData = new FormData();
		formData.append('title', inputs.title);
		formData.append('description', inputs.description);
		inputs.androidFile.map((file) => {
			return formData.append('androidFile', file);
		});
		inputs.iosFile.map((file) => {
			return formData.append('iosFile', file);
		});

		axios
			.post('/api/model/add', formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(res => {
				window.location.href = "/model";
			});
	}

	getDetail(id) {
		axios
			.get('/api/model/' + id)
			.then(res => {
				let inputs = this.component.state.inputs;
				inputs["title"] = res.data.title;
				inputs["description"] = res.data.description;

				this.component.setState({
					inputs: inputs,
					dataLoaded: true
				});
			}).catch(e => {
				window.location.href = "/model";
			});
	}

	DeleteAnnouncement(id) {
		axios
			.get('/api/model/delete/' + id)
			.then(res => {
				window.location.href = "/model";
			});
	}
}