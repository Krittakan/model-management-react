const db = require('./database');

const fs = require('fs');

class model {
    async getList(params) {
        try {
            let getListIdSql = fs.readFileSync('./src/sql/model/getListId.sql', 'utf8');

            let getListSql = fs.readFileSync('./src/sql/model/getList.sql', 'utf8');

            let order_by = " order by `createDate` DESC, `id`  DESC";
            let row_num = "`createDate` DESC, `id`  DESC";
            if (params.orderBy && params.orderDirection) {
                order_by = ' order by ' + params.orderBy + ' ' + params.orderDirection + ',`id`  DESC';
                row_num = params.orderBy + ' ' + params.orderDirection + ',`id`  DESC';
            }

            let offset = ((params.page - 1) * params.limit);
            getListSql = getListSql.replace("{{OFFSET}}", offset);
            getListSql = getListSql.replace("{{ROW_NUMBER}}", row_num);

            let whereCause = [];
            if (params.criteria.keywords) {
                whereCause.push(
                    "(LOWER(`title`) LIKE LOWER('%" + params.criteria.keywords + "%') OR " +
                    "LOWER(`description`) LIKE LOWER('%" + params.criteria.keywords + "%'))"
                );
            }
            if (params.criteria.dateFrom) {
                whereCause.push("`createDate` >= '" + params.criteria.dateFrom + " 00:00:00'");
            }
            if (params.criteria.dateTo) {
                whereCause.push("`createDate` <= '" + params.criteria.dateTo + " 23:59:59'");
            }

            let where = "";
            if (whereCause.length > 0) {
                where += " AND " + whereCause.join(" AND ");
            }
            const [idRows, idFields] = await db.query(getListIdSql + where + order_by);

            var notiId = idRows.slice(offset, offset + params.limit).map(obj => obj.id);

            const [listRows, listFields] = await db.query(getListSql + where + order_by, [notiId.length === 0 ? null : notiId]);

            if (idRows.length <= 0) {
                return {
                    rowCount: 0,
                    rows: []
                };
            }

            return {
                rowCount: idRows.length,
                rows: listRows
            };
        } catch (error) {
            throw error;
        }
    }

    async insert(title, description, androidFile, iosFile, user) {
        try {
            let insertSql = fs.readFileSync('./src/sql/model/insert.sql', 'utf8');

            const insertResult = await db.query(insertSql,
                [
                    title,
                    description,
                    androidFile,
                    iosFile,
                    user,
                    user
                ]);

            return insertResult;
        } catch (error) {
            throw error;
        }
    }

    async getModelFromId(id) {
        try {
            let getModelSql = fs.readFileSync('./src/sql/model/getModelFromId.sql', 'utf8');

            const [getModelRows, getModelFields] = await db.query(getModelSql, [id]);

            return getModelRows;
        } catch (error) {
            throw error;
        }
    }

    async delete(id, user) {
        try {
            let deleteModelSql = fs.readFileSync('./src/sql/model/deleteModel.sql', 'utf8');

            const [getModelRows, getModelFields] = await db.query(deleteModelSql,
                [
                    user,
                    id
                ]);

            return getModelRows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = model;