import React from 'react';
const Dashboard = React.lazy(() => import('./views/Dashboard'));

const RequestList = React.lazy(() => import('./views/Requests/List'));
const RequestDetail = React.lazy(() => import('./views/Requests/Detail'));
const PaymentList = React.lazy(() => import('./views/Payment/List'));
const PaymentDetail = React.lazy(() => import('./views/Payment/Detail'));
const ApprovalKYCList = React.lazy(() => import('./views/Approval/KYC/List'));
const ApprovalKYC = React.lazy(() => import('./views/Approval/KYC/Detail'));
const ApprovalRequestList = React.lazy(() => import('./views/Approval/Requests/List'));
const ApprovalRequest = React.lazy(() => import('./views/Approval/Requests/Detail'));
const ImportList = React.lazy(() => import('./views/Payment/ImportList'));
const ImportAdd = React.lazy(() => import('./views/Payment/ImportAdd'));

const RequestsFrontend = React.lazy(() => import('./views/RequestsFrontend/List'));
const RequestsFrontendAdd = React.lazy(() => import('./views/RequestsFrontend/Add'));
const RequestsFrontendDetail = React.lazy(() => import('./views/RequestsFrontend/Detail'));

const Profile = React.lazy(() => import('./views/Profile/Profile'));
const routes = [
  { path: '/backend', exact: true, name: 'หน้าหลัก' },
  { path: '/backend/dashboard', name: '', component: Dashboard },
  
  { path: '/frontend/requests', exact: true, name: 'รายการคำร้อง', component: RequestsFrontend },
	{ path: '/frontend/requests/add', exact: true, name: 'ยื่นคำร้อง', component: RequestsFrontendAdd },
  { path: '/frontend/requests/:id', exact: true, name: 'รายละเอียดคำร้อง', component: RequestsFrontendDetail },
  
  { path: '/frontend/profile/:type', exact: true, name: 'ข้อมูลส่วนตัว', component: Profile },

	{ path: '/backend/requests', exact: true, name: 'รายการคำร้อง', component: RequestList },
	{ path: '/backend/requests/:id', exact: true, name: 'รายละเอียดคำร้อง', component: RequestDetail },
	{ path: '/backend/payments', exact: true, name: 'รายการชำระเงิน', component: PaymentList },
	{ path: '/backend/payments/:id', exact: true, name: 'การชำระเงิน', component: PaymentDetail },
	{ path: '/backend/import', exact: true, name: 'นำเข้าการชำระเงิน', component: ImportList },
	{ path: '/backend/import/add', exact: true, name: 'เลือกไฟล์ข้อมูล', component: ImportAdd },
  { path: '/backend/approvals', exact: true, component: ApprovalKYCList },
  { path: '/backend/approvals/kyc', exact: true, name: 'รายการคำขออนุมัติ - ยืนยันตัวตน', component: ApprovalKYCList },
	{ path: '/backend/approvals/kyc/:type', exact: true, name: 'คำขออนุมัติ', component: ApprovalKYC },
  { path: '/backend/approvals/requests', exact: true, name: 'รายการคำขออนุมัติ', component: ApprovalRequestList },
  { path: '/backend/approvals/requests/:id', exact: true, name: 'รายการคำขออนุมัติ', component: ApprovalRequest },
];

export default routes;
