class API {
  static baseUrl = "http://localhost:3000";
  static signInUrl = API.baseUrl + "/signin";
  static validateUrl = API.baseUrl + "/validate";
  static dashboardUrl = API.baseUrl + "/dashboard";
  static lawyersUrl = API.baseUrl + "/lawyers";

  // My Version
  static signin(user) {
    // debugger;
    console.log("this is the user:", user);
    return fetch(this.signInUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(resp => resp.json());
    // .then(data => data.clientId)
  }

  // static signin(user) {
  //   return fetch(this.signInUrl, {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(user)
  //   }).then(resp => resp.json());
  // }

  static validate() {
    const token = localStorage.getItem("token");
    return fetch(this.validateUrl, {
      //Authorization is used in a GET request when you want to present something to the server, like the id and being authorised to access some data
      headers: { Authorization: token }
    }).then(resp => resp.json());
  }

  // static validate() {
  //   let token = localStorage.getItem("token");
  //   return fetch(this.validateUrl, {
  //     headers: { Authorization: token }
  //   }).then(resp => resp.json());
  // }
  static get(url) {
    return fetch(url, {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(resp => resp.json());
  }

  static getDashboard() {
    return this.get(this.dashboardUrl);
  }

  static getLawyers() {
    return this.get(this.lawyersUrl);
  }

  // static makeAppAvAgain(client, availability) {
  //   return fetch(
  //     `http://localhost:3000/clients/${
  //       client.id
  //     }/appointments/4{availability.id}`,
  //     {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ id: `${availability.id}` })
  //     }
  //   ).then(resp => resp.json());
  // }
}

export default API;
