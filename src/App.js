import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validateField = (fieldName, value) => {
    let error = '';
    switch (fieldName) {
      case 'name':
        if (!validateName(value)) {
          error = 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'email':
        if (!validateEmail(value)) {
          error = 'Email inválido';
        }
        break;
      case 'password':
        if (!validatePassword(value)) {
          error = 'Mínimo 8 caracteres';
        }
        break;
    }
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if(touched[name]) {
      validateField(name, value);
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-center">
              <h3>Formulario de Registro</h3>
            </div>
            <div className="card-body">
              <div>
                <div className="mb-3">
                  <label className="form-label">Nombre:</label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${
                      errors.name && touched.name ? 'is-invalid' : ''
                    } ${
                      !errors.name && touched.name && formData.name ? 'is-valid' : ''
                    }`}
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.name && touched.name && (
                    <div className="invalid-feedback">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo:</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email && touched.email ? 'is-invalid' : ''
                    } ${
                      !errors.email && touched.email && formData.email ? 'is-valid' : ''
                    }`}
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.email && touched.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña:</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      errors.password && touched.password ? 'is-invalid' : ''
                    } ${
                      !errors.password && touched.password && formData.password ? 'is-valid' : ''
                    }`}
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                  />
                  {errors.password && touched.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>

                <button 
                  type="button" 
                  className="btn btn-primary w-100"
                  onClick={handleSubmit}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
