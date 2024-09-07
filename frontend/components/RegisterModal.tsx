'use client';

import { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onOpenLogin }) => {
  const [surname, setSurname] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [sex, setSex] = useState<"Male" | "Female">("Male"); // Use a specific type for sex
  const [majorChoices, setMajorChoices] = useState<string[]>([]); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle your registration logic here
    console.log('Registration submitted:', { surname, middleName, firstName, sex, majorChoices });
    onClose();
  };

  const handleMajorChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setMajorChoices([...majorChoices, value]);
    } else {
      setMajorChoices(majorChoices.filter(choice => choice !== value));
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal" style={{
      display: 'block', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1000 
    }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="surname" className="form-label">Surname:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="surname" 
                  value={surname} 
                  onChange={(e) => setSurname(e.target.value)} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="middleName" className="form-label">Middle Name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="middleName" 
                  value={middleName} 
                  onChange={(e) => setMiddleName(e.target.value)} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="firstName" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                  required 
                />
              </div>

              <div className="mb-3">
                <label>Sex:</label>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="sex" 
                    id="male" 
                    value="Male" 
                    checked={sex === "Male"} 
                    onChange={(e) => setSex(e.target.value as "Male" | "Female")} 
                    required
                  />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="sex" 
                    id="female" 
                    value="Female" 
                    checked={sex === "Female"} 
                    onChange={(e) => setSex(e.target.value as "Male" | "Female")} 
                    required
                  />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label>Major Choices:</label>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="CS" 
                    id="cs" 
                    checked={majorChoices.includes("CS")} 
                    onChange={handleMajorChoiceChange}
                  />
                  <label className="form-check-label" htmlFor="cs">CS</label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="IT" 
                    id="it" 
                    checked={majorChoices.includes("IT")} 
                    onChange={handleMajorChoiceChange}
                  />
                  <label className="form-check-label" htmlFor="it">IT</label>
                </div>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value="ComTech" 
                    id="comtech" 
                    checked={majorChoices.includes("ComTech")} 
                    onChange={handleMajorChoiceChange}
                  />
                  <label className="form-check-label" htmlFor="comtech">ComTech</label>
                </div>
              </div>
              
              <button type="submit" className="btn btn-success">Register</button>
              <p>
                Already have an account? <a onClick={onOpenLogin}>Login here</a>
              </p>
              <button type="button" className="btn btn-danger" onClick={onClose}>Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;