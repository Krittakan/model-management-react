update `model`
set
    `status` = 0,
    `updateDate` = NOW(),
    `updateBy` = ?
where 
    `id` = ?