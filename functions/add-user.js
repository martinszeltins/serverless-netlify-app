require('encoding')
import faunadb from 'faunadb'

const db = new faunadb.Client({
    secret: 'fnAD5qCHiIACAXHwQ9WJ0q7xax6i9tb-To3KRhlC'
})

const { Create, Collection } = faunadb.query

exports.handler = async (event) => {
    const request = JSON.parse(event.body)

    await db.query(Create(Collection("users"), {
        data: {
            username: request.username,
            profile_img: 'https://png.pngitem.com/pimgs/s/522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png',
        }
    }))

    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: 'New user created.'
    }
}