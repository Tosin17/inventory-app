export class User {
    constructor(
        public id,
        public email,
        private _token,
        private _tokenExpDate
    ) { }

    get token() {
        if (!this._tokenExpDate || this._tokenExpDate < new Date()) {
            return null;
        }
        return this._token;
    }
}

