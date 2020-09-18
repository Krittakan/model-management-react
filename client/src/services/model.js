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
				console.log(err);
				if (errCallback) {
					errCallback();
				}
			});
	}

	createAnnouncement(inputs) {
		let formData = new FormData();
		formData.append('group', inputs.group);
		if (inputs.email !== "" && inputs.emailCsv === "") {
			formData.append('email', inputs.email);
		} else if (inputs.email === "" && inputs.emailCsv !== "") {
			formData.append('email', inputs.emailCsv);
		} else if (inputs.email !== "" && inputs.emailCsv !== "") {
			formData.append('email', inputs.email + "|" + inputs.emailCsv);
		}
		formData.append('newsGroup', inputs.newsGroup);
		formData.append('title', inputs.title);
		formData.append('detail', inputs.detail);
		formData.append('detailShortStr', this.component.quillRef.current.getEditor().getText().substring(0, 1024));
		formData.append('priority', inputs.priority);
		formData.append('action', inputs.action);
		formData.append('immediatelyStatus', inputs.immediatelyStatus);
		if (inputs.immediatelyStatus === 0) {
			formData.append('schedule', inputs.scheduleDate + ' ' + inputs.scheduleTime);
		}

		axios
			.post('/api/announcement/create', formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(res => {
				window.location.href = "/announcements";
			});
	}

	getData(id) {
		axios
			.get('/api/announcement/' + id)
			.then(res => {
				let inputs = this.component.state.inputs;
				inputs["group"] = res.data.group;
				inputs["email"] = res.data.persons.join("|");
				inputs["newsGroup"] = res.data.newsGroup;
				inputs["title"] = res.data.announcement.title;
				inputs["detail"] = res.data.announcement.detail;
				inputs["priority"] = res.data.announcement.priority;
				inputs["action"] = res.data.announcement.action;
				inputs["immediatelyStatus"] = res.data.announcement.immediatelyStatus;
				if (res.data.announcement.immediatelyStatus === 0) {
					inputs["scheduleDate"] = res.data.announcement.announceDate;
					inputs["scheduleTime"] = res.data.announcement.announceTime;
				}
				this.component.setState({
					inputs: inputs
				});

				this.component.masterService.getForAnnounceScreen();
			}).catch(e => {
				window.location.href = "/announcements";
			});
	}

	DeleteAnnouncement(id) {
		axios
			.get('/api/announcement/delete/' + id)
			.then(res => {
				window.location.href = "/announcements";
			});
	}

	EditAnnouncement(inputs, id) {
		let formData = new FormData();
		formData.append('group', inputs.group);
		if (inputs.email !== "" && inputs.emailCsv === "") {
			formData.append('email', inputs.email);
		} else if (inputs.email === "" && inputs.emailCsv !== "") {
			formData.append('email', inputs.emailCsv);
		} else if (inputs.email !== "" && inputs.emailCsv !== "") {
			formData.append('email', inputs.email + "|" + inputs.emailCsv);
		}
		formData.append('newsGroup', inputs.newsGroup);
		formData.append('title', inputs.title);
		formData.append('detail', inputs.detail);
		formData.append('detailShortStr', this.component.quillRef.current.getEditor().getText().substring(0, 1024));
		formData.append('priority', inputs.priority);
		formData.append('action', inputs.action);
		formData.append('immediatelyStatus', inputs.immediatelyStatus);
		if (inputs.immediatelyStatus === 0) {
			formData.append('schedule', inputs.scheduleDate + ' ' + inputs.scheduleTime);
		}

		axios
			.post('/api/announcement/edit/' + id, formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(res => {
				window.location.href = "/announcements";
			}).catch(e => {
				this.component.setState({
					dataSending: false
				});
			});
	}
}