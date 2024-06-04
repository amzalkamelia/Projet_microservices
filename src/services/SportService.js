import axios from 'axios';

const SPORT_API_BASE_URL = "http://localhost:8080/api/sports";

class SportService {
    getSports() {
        return axios.get(SPORT_API_BASE_URL);
    }

    createSport(sport) {
        return axios.post(SPORT_API_BASE_URL, sport);
    }

    getSportById(sportId) {
        return axios.get(`${SPORT_API_BASE_URL}/${sportId}`);
    }

    updateSport(sport, sportId) {
        return axios.put(`${SPORT_API_BASE_URL}/${sportId}`, sport);
    }

    deleteSport(sportId) {
        return axios.delete(`${SPORT_API_BASE_URL}/${sportId}`);
    }
}

export default new SportService();
