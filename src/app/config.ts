export function getEnvironment(variable: string) {
    const env = window.location.hostname;
    const uriPrefix = '/api/v1';
    let data = {};

    switch (env) {
        case 'localhost':
            data = {
                endpoint: 'http://localhost:3000'+uriPrefix
            };
            break;
        default:
            data = {
                endpoint: 'http://localhost:8181/'+uriPrefix
            };
            break;
    }
    return data[variable];
}