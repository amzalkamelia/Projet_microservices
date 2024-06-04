import React, { useState } from 'react';
import SiteService from '../services/SiteService';
import { useNavigate } from 'react-router-dom';

const AddSite = () => {
    const [site, setSite] = useState({
        name: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSite({ ...site, [name]: value });
    };

    const saveSite = (e) => {
        e.preventDefault();
        SiteService.createSite(site).then(() => {
            navigate('/sites');
        });
    };

    return (
        <div>
            <h2>Add Site</h2>
            <form>
                <div className="form-group">
                    <label>Site Name:</label>
                    <input type="text" name="name" className="form-control" value={site.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Site Description:</label>
                    <input type="text" name="description" className="form-control" value={site.description} onChange={handleChange} />
                </div>
                <button className="btn btn-success" onClick={saveSite}>Save</button>
            </form>
        </div>
    );
}

export default AddSite;
