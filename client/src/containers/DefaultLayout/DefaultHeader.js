import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/kugreen.svg'
import sygnet from '../../assets/img/brand/kugreen.svg'
import example from '../../services/example';
import userInfo from '../../models/userInfo';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
	constructor(props) {
    super(props);
    this.state = {
      userInfo: userInfo
        };
        console.log(this.state.userInfo);
        this.exampleService = new example(this);
  }
    
  componentDidMount() {
      this.exampleService.getExampleData();
	}
		
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 120, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
				<Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
						<h1 className="my-0">ระบบเอกสารทางการศึกษาออนไลน์</h1>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none text-right">
						<h4 className="my-0">{this.state.userInfo ? this.state.userInfo.fullname:""}</h4>
          	<h5 className="my-0">{this.state.userInfo ? this.state.userInfo.campus:""}</h5>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>บัญชีผู้ใช้</strong></DropdownItem>
              <Link to="/frontend/profile/0"><DropdownItem><i className="fa fa-user"></i> ข้อมูลส่วนตัว</DropdownItem></Link>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> ออกจากระบบ</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;