import React, { useState } from 'react';


const PublierOffre = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    publicationDate: '',
    expirationDate: '',
    salary: '',
    recruiterName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez la soumission du formulaire ici
    console.log('Offre publiée:', formData);
  };

  return (
    <div className="publier-offre">
      <h2>Publier une nouvelle offre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre de l'offre</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Localisation</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de publication</label>
          <input
            type="date"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date d'expiration</label>
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salaire</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nom du recruteur</label>
          <input
            type="text"
            name="recruiterName"
            value={formData.recruiterName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Publier l'offre</button>
      </form>
    </div>
  );
};

export default PublierOffre;