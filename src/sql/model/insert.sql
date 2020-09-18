INSERT INTO `model`
(
    `title`,
    `description`,
    `androidFile`,
    `iosFile`,
    `status`,
    `createDate`,
    `createBy`,
    `updateDate`,
    `updateBy`
) 
VALUES (
    ?,
    ?,
    ?,
    ?,
    1,
    NOW(),
    ?,
    NOW(),
    ?
)