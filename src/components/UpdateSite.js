import React, { useState, useEffect } from 'react';
import SiteService from '../services/SiteService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateSite = () => {
    const { id } = useParams();
    const [site, setSite] = useState({
        name: '',
        description: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        SiteService.getSiteById(id).then((res) => {
            setSite(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSite({ ...site, [name]: value });
    };

    const updateSite = (e) => {
        e.preventDefault();
        SiteService.updateSite(site, site.id).then(() => {
            navigate('/sites');
        });
    };

    return (
        <div>
            <h2>Update Site</h2>
            <form>
                <div className="form-group">
                    <label>Site Name:</label>
                    <input type="text" name="name" className="form-control" value={site.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Site Description:</label>
                    <input type="text" name="description" className="form-control" value={site.description} onChange={handleChange} />
                </div>
                <button className="btn btn-success" onClick={updateSite}>Update</button>
            </form>
        </div>
    );
}

export default UpdateSite;
