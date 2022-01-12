import 'module-alias/register';
import server from './server';

server.listen(server.get('port'), () => {
    console.log(`⬢ Thingst - ${server.get('mode')}`);
    console.log(`◌ Listening on ${server.get('url')}`);
    console.log(`v${server.get('version')}`);
});
