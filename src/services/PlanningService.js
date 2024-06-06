import axios from 'axios';

const PLANNING_API_BASE_URL = "http://localhost:8080/api/plannings";

class PlanningService {
    getPlannings() {
        return axios.get(PLANNING_API_BASE_URL);
    }

    createPlanning(planning) {
        return axios.post(PLANNING_API_BASE_URL, planning);
    }

    getPlanningById(planningId) {
        return axios.get(`${PLANNING_API_BASE_URL}/${planningId}`);
    }

    updatePlanning(planning, planningId) {
        return axios.put(`${PLANNING_API_BASE_URL}/${planningId}`, planning);
    }

    deletePlanning(planningId) {
        return axios.delete(`${PLANNING_API_BASE_URL}/${planningId}`);
    }
}

export default new PlanningService();
