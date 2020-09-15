import axios from 'axios';

export default class example{
	constructor(component) {
    this.component = component;
	}
	
	getExampleData(){
		axios.get('/api/')
		.then(res => {
			this.component.setState({
				userInfo: res.data
			});
		});
	}

}