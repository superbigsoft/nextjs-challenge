export default class BaseService {
    protected getUrl(path: string): string {
        return "http://localhost:3333" + path
    }
    
}