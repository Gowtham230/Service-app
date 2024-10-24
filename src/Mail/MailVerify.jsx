import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Verify() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
     
      axios.post('http://localhost:5000/verify', { token })
        .then(response => {
          if (response.data.success) {
          
            navigate('/success');
          } else {
           
            navigate('/error');
          }
        })
        .catch(error => {
          console.error('Verification failed:', error);
          navigate('/error');
        });
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying...</h1>
    </div>
  );
}

export default Verify;
