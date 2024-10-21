import errorMsg from '../local/errorMsg.js';

class ApiCalls {

  //   error messages
  errorMsg() {
    this.responseNotOkError = errorMsg.responseNotOk;
    this.getMethodCatchError = errorMsg.getMethodCatchError;
    this.postMethodCatchError = errorMsg.postMethodCatchError;
    this.deleteMethodCatchError = errorMsg.deleteMethodCatchError;
  }

  //   error check for: if status code is not between 200 - 299
  errorCheck(response) {
    if (!response.ok) {
      alert(`${this.responseNotOkError}: ${response.status}`);
      throw new Error(`${this.responseNotOkError}: ${response.status}`);
    }
  }

  // HTTP request using fetch
  async httpRequest(url,method,errorMessage,content) {
    try {
      const request = await fetch(url, {
        method,
        body: JSON.stringify(content),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.errorCheck(request);
      const response = await request.json();
      return response;
    } catch (error) {
      const fullErrorMessage = `${errorMessage} ${error.message}`;
      alert(fullErrorMessage);
      return fullErrorMessage;
    }
  }

  //   get data from api
  async get(url) {
    const response = await this.httpRequest(url,'GET',this.getMethodCatchError);
    return response;
  }

  async post(url, content) {
    const response = await this.httpRequest(url,'POST',this.postMethodCatchError,content);
    return response;
  }

  async delete(url) {
    const response = await this.httpRequest(url,'DELETE',this.deleteMethodCatchError);
    return response;
  }

}

export default ApiCalls;
