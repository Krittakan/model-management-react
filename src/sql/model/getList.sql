SELECT 
    ( {{OFFSET}} + ROW_NUMBER () OVER (ORDER BY {{ROW_NUMBER}}) ) AS `#`,
    `*`,
    ( DATE_FORMAT(`createDate`,'%Y-%m-%d %H:%i') ) AS `createDateStr`
FROM `model`
WHERE `id` IN (?)