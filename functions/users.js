require('encoding')
import faunadb from 'faunadb'

const db = new faunadb.Client({
    secret: 'fnAD5qCHiIACAXHwQ9WJ0q7xax6i9tb-To3KRhlC'
})

const { Map, Paginate, Documents, Collection, Lambda, Get, Var } = faunadb.query

exports.handler = async () => {
    let result = await db.query(
        Map(
            Paginate(Documents(Collection("users"))),
            Lambda("X", Get(Var("X")))
        )
    )

    result = result.data.map(item => item.data)

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify(result)
    }
}