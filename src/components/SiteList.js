import React, { useState, useEffect } from 'react';
import SiteService from '../services/SiteService';
import { useNavigate } from 'react-router-dom';

const SiteList = () => {
    const [sites, setSites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        SiteService.getSites().then((res) => {
            setSites(res.data);
        });
    }, []);

    const editSite = (id) => {
        navigate(`/update-site/${id}`);
    };

    const deleteSite = (id) => {
        SiteService.deleteSite(id).then(() => {
            setSites(sites.filter(site => site.id !== id));
        });
    };

    return (
        <div>
            <h2 className="text-center">Site List</h2>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Site Name</th>
                            <th>Site Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sites.map((site) => (
                            <tr key={site.id}>
                                <td>{site.name}</td>
                                <td>{site.description}</td>
                                <td>
                                    <button onClick={() => editSite(site.id)} className="btn btn-info">Update</button>
                                    <button onClick={() => deleteSite(site.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SiteList;
