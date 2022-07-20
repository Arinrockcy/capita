
class APIHandler {
    _keysRequeried = [
        ['url', []],
        ['method', []],
        ['header', []],
        ['payload', [{
            'method': ['POST', 'PUT', 'PATCHl']
        }]]
    ];
    constructor(_payload){
        this._validate(_payload);
        Object.defineProperties(this, _payload);
    }
    /**
     * @readonly
     * @private
     */
    _validate(_payload) {
        if(typeof _payload !=='object' && _payload instanceof Date && _payload === null){
            throw new Error(`${typeof _payload} is not valid payload`);
        }

    }
}