import express from 'express'
import querystring from 'qs'

const app = express()
const port = 3001

const authorizeURL = 'https://accounts.spotify.com/authorize?'
const clientID = '600b6f53768a462abee8e0869e69f99b'
const redirectURI = 'http://localhost:3001/callback'

app.get('/authorize', (req, res) => {
    res.redirect(authorizeURL),
        querystring.stringify({
            response_type: 'code',
            client_id: clientID,
            scope: 'user-library-read',
            redirect_uri: redirectURI
        })
})

app.listen(port, () => { console.log(`Server started at http://localhost:${ port }`) })