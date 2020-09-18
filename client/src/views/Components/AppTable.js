import React, { Component } from 'react';
import {
	Col,
	Form,
	FormGroup,
	Input,
	Pagination,
	PaginationItem,
	PaginationLink,
	Row,
	Table,
} from 'reactstrap';

class AppTable extends Component {
	constructor(props) {
		super(props);
		let w = this.props.columns.map(t => (Number(t.width.replace("px", "").replace("%", "")) === 0 ? 100 : Number(t.width.replace("px", "").replace("%", ""))));
		var sum = w.reduce(function (a, b) {
			return a + b;
		}, 0);
		let tbw = (sum / (window.innerWidth)) * 100 < 100 ? 100 : (sum / (window.innerWidth)) * 100;
		this.state = {
			dataLoaded: false,
			dataLoading: false,
			tbWidth: (this.props.tableWidth ? this.props.tableWidth : tbw + "%"),
			rows: null,
			rowCount: 0,
			amount: 0,
			limit: this.props.limit ? this.props.limit : 10,
			page: 1,
			pageCount: 1,
			orderBy: '',
			orderDirection: '',
			searchObj: null
		}
		this.service = this.props.service;
	}
	handleSearch = (searchObj, page, orderBy, orderDirection) => {
		let self = this;
		const searchParams = {
			limit: this.state.limit,
			page: page ? 1 : this.state.page,
			orderBy: orderBy ? '' : this.state.orderBy,
			orderDirection: orderDirection ? '' : this.state.orderDirection,
			criteria: searchObj
		}

		this.setState({
			searchObj: searchObj,
			page: page ? 1 : this.state.page,
			orderBy: orderBy ? '' : this.state.orderBy,
			orderDirection: orderDirection ? '' : this.state.orderDirection,
			dataLoaded: false,
			dataLoading: true,
		});

		this.service(searchParams, (response) => {
			let pageCount = response.data.rowCount === 0 ? 0 : Math.ceil(parseInt(response.data.rowCount) / self.state.limit);
			self.setState({
				dataLoaded: true,
				dataLoading: false,
				rows: response.data.rows,
				rowCount: response.data.rowCount,
				pageCount: pageCount,
				amount: response.data.amount ? response.data.amount : 0
			});
		}, () => {
			self.setState({
				dataLoaded: true,
				dataLoading: false,
				rows: [],
				rowCount: 0,
				pageCount: 0
			});
		});
	}
	handleLimitChange = (limit) => {
		this.setState({
			dataLoaded: false,
			dataLoading: false,
			limit: limit,
			page: 1
		}, () => {
			this.handleSearch(this.state.searchObj);
		});
	}
	handlePageChange = (page) => {
		this.setState({
			dataLoaded: false,
			dataLoading: false,
			page: page
		}, () => {
			this.handleSearch(this.state.searchObj);
		});
	}
	handleOrderChange = (fieldName) => {
		let orderDirection = "ASC";
		if (this.state.orderBy === fieldName && this.state.orderDirection === "ASC") {
			orderDirection = "DESC";
		}
		this.setState({
			dataLoaded: false,
			dataLoading: false,
			page: 1,
			orderBy: fieldName,
			orderDirection: orderDirection,
		}, () => {
			this.handleSearch(this.state.searchObj);
		});
	}
	sortIcon = (fieldName) => {
		if (this.state.orderBy === fieldName) {
			if (this.state.orderDirection === "ASC") {
				return <i className="fa fa-sort-asc" onClick={() => this.handleOrderChange(fieldName)} style={{ cursor: "pointer", paddingLeft: "5px" }} />
			}
			return <i className="fa fa-sort-desc" onClick={() => this.handleOrderChange(fieldName)} style={{ cursor: "pointer", paddingLeft: "5px" }} />
		}
		return <i className="fa fa-sort" onClick={() => this.handleOrderChange(fieldName)} style={{ cursor: "pointer", paddingLeft: "5px" }} />
	}
	render() {
		return (
			<div>
				<Row className="mt-3 mb-3">
					<Col lg={6}>
						<h3>Result: {this.state.rowCount} model{this.state.rowCount >= 1 ? "s" : ""}</h3>
					</Col>
					{this.props.actionContainer ? this.props.actionContainer(this.state) : ""}
				</Row>
				<Row className="mt-2 mb-2">
					<Col lg={12}>
						<Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
							<FormGroup className="mr-auto ml-auto mb-0" row>
								<Col md="2">
									{this.state.rowCount > 0 ?
										<Input type="select" onChange={(e) => this.handleLimitChange(parseInt(e.target.value))}>
											<option value="10">แสดง 10 รายการ</option>
											<option value="25">แสดง 25 รายการ</option>
											<option value="50">แสดง 50 รายการ</option>
											<option value="100">แสดง 100 รายการ</option>
										</Input>
										: ""
									}
								</Col>
								{this.state.rowCount > 0 && this.props.actionInnerContainer ? this.props.actionInnerContainer(this.state) :
									<div>
										<Col md="2">
										</Col>
										<Col md="2">
										</Col>
										<Col md="2">
										</Col>
										<Col md="2">
										</Col>
										<Col md="2">
										</Col>
									</div>}
							</FormGroup>
						</Form>
					</Col>
				</Row>
				<Row>
					<Col lg={12} style={{ position: "relative" }}>
						<Table responsive striped style={{ width: this.state.tbWidth }}>
							<thead>
								<tr>
									{this.props.columns.map((col, i) => (
										<th key={i} className="text-center"
											style={{ width: (col.width ? col.width : "") }}>{col.name}{col.sorting === "true" && this.state.rowCount > 0 ? this.sortIcon(col.conditionfield ? col.conditionfield : col.field) : ""}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{this.state.rowCount > 0 ? this.state.rows.map((row, i) => (
									<tr key={i}>
										{this.props.columns.map((col, i) => (
											<td key={i} className={col.align ? "text-" + col.align : ""}>
												{!this.props.rowdisplay ? row[col.field] ? row[col.field] : "-" : this.props.rowdisplay(row, col.field)}
											</td>
										))}
									</tr>
								)) :
									<tr>
										<td className="text-center" colSpan={this.props.columns.length}>No result</td>
									</tr>
								}
							</tbody>
						</Table>
						{this.state.dataLoading ? <div className="table-searching"><label>Loading...</label></div> : ""}
						{this.state.rowCount > 0 ?
							<Pagination className="pull-right clearfix">
								<PaginationItem disabled={this.state.page <= 1}>
									<PaginationLink previous tag="button"
										onClick={() => this.handlePageChange(this.state.page - 1)} >
									</PaginationLink>
								</PaginationItem>
								{
									[...Array(this.state.pageCount)].map((value, index) =>
										this.state.pageCount > 10 ?
											// First page, last page and current page -1 to current page +1
											(
												index + 1 === 1 || index + 1 === this.state.pageCount ||
													(index + 1 >= this.state.page - 2 && index + 1 <= this.state.page + 2) ?
													<PaginationItem key={index}
														active={this.state.page === index + 1}
														disabled={this.state.page === index + 1}>
														<PaginationLink tag="button"
															onClick={() => this.handlePageChange(index + 1)} >
															{index + 1}
														</PaginationLink>
													</PaginationItem>
													:
													(
														index + 1 === this.state.page - 3 || index + 1 === this.state.page + 3 ?
															<PaginationItem key={index}
																active={false}
																disabled={true}>
																<PaginationLink tag="button"
																	onClick={() => this.handlePageChange(index + 1)} >
																	...
																</PaginationLink>
															</PaginationItem>
															:
															null
													)
											)
											:
											<PaginationItem key={index}
												active={this.state.page === index + 1}
												disabled={this.state.page === index + 1}>
												<PaginationLink tag="button"
													onClick={() => this.handlePageChange(index + 1)} >
													{index + 1}
												</PaginationLink>
											</PaginationItem>
									)
								}
								<PaginationItem disabled={this.state.page >= this.state.pageCount}>
									<PaginationLink next tag="button"
										onClick={() => this.handlePageChange(this.state.page + 1)} >
									</PaginationLink>
								</PaginationItem>
							</Pagination>
							:
							""
						}
					</Col>
				</Row>
			</div>
		);
	}
}

export default AppTable;