class HttpRequest {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url) {
        return new Promise((resolve, reject) => {
            this.xhr.open("GET", url);
            this.xhr.addEventListener("load", () => {
                if (this.xhr.status === 200) {
                    resolve({
                        status: this.xhr.status,
                        data: JSON.parse(this.xhr.responseText)
                    });
                } else {
                    reject("GET Error");
                }
            });
            this.xhr.send();
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this.xhr.open("POST", url);
            this.xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            this.xhr.addEventListener("load", () => {
                if (this.xhr.status === 201) {
                    resolve({
                        status: this.xhr.status,
                        data: JSON.parse(this.xhr.responseText)
                    });
                } else {
                    reject("POST Error");
                }
            });
            this.xhr.send(JSON.stringify(data));
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.xhr.open("PUT", url);
            this.xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            this.xhr.addEventListener("load", () => {
                if (this.xhr.status === 200) {
                    resolve({
                        status: this.xhr.status,
                        data: JSON.parse(this.xhr.responseText)
                    });
                } else {
                    reject("PUT Error");
                }
            });
            this.xhr.send(JSON.stringify(data));
        });
    }

    delete(url) {
        return new Promise((resolve, reject) => {
            this.xhr.open("DELETE", url);
            this.xhr.addEventListener("load", () => {
                if (this.xhr.status === 200) {
                    resolve({
                        status: this.xhr.status,
                        data: JSON.parse(this.xhr.responseText)
                    });
                } else {
                    reject("DELETE Error");
                }
            });
            this.xhr.send();
        });
    }
}

export default HttpRequest;