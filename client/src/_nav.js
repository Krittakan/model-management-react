const backendNav = {
  items: [
    {
      name: 'หน้าหลัก',
      url: '/backend/dashboard',
      icon: 'fa fa-star'
    },
    {
      name: 'รายการคำร้อง',
      url: '/backend/requests',
      icon: 'fa fa-star'
    },
    {
      name: 'รายการคำขออนุมัติ',
      url: '/backend/approvals',
      icon: 'fa fa-star',
      children: [
        {
          name: 'ยืนยันตัวตน',
          url: '/backend/approvals/kyc',
          icon: 'fa fa-star',
        },
        {
          name: 'คำร้อง',
          url: '/backend/approvals/requests',
          icon: 'fa fa-star',
        }
      ]
    },
    {
      name: 'รายการชำระเงิน',
      url: '/backend/payments',
      icon: 'fa fa-star'
    },
    {
      name: 'นำเข้าการชำระเงิน',
      url: '/backend/import',
      icon: 'fa fa-star'
    },
  ]
}
export default backendNav;
