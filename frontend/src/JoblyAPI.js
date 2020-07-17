import axios from 'axios';
import { BASE_TOKEN } from './App'; // destructing {} fixes our "JoblyAPI token null"

/**
 * Similar to how the model classes in /backend interact with the database, but we don't have SQL statements everywhere
 */

class JoblyAPI {
  static async request(endpoint, data = {}, verb = 'get') {
    let _token = localStorage.getItem(BASE_TOKEN);

    console.log('API Call:', endpoint, data, verb);

    // include the token in the request
    let link;

    if (verb === 'get') {
      link = axios.get(`http://localhost:3001/${endpoint}`, { params: { _token, ...data } });
    } else if (verb === 'post') {
      link = axios.post(`http://localhost:3001/${endpoint}`, { _token, ...data });
    }

    try {
      return (await link).data;
    } catch (error) {
      console.error('API Error:', error.response);
      let message = error.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  static async getAllJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  static async register(data) {
    let res = await this.request(`users`, data, 'post');
    console.log('REG HIT');
    return res.token;
  }

  static async login(data) {
    let res = await this.request(`login`, data, 'post');
    console.log('LOGIN HIT');
    return res.token;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    console.log(`GET USER HIT`);
    console.log(res.user);
    return res.user;
  }
}

export default JoblyAPI;
