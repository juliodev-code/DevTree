import colors from 'colors'
import server from './server'

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.info(colors.blue.bold(`Server working at port ${PORT}`));
})