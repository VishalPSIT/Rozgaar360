import React, { useEffect } from 'react';
import axios from '../utils/axiosInstance';

const TestConnection = () => {
  useEffect(() => {
    axios
      .get('/test')
      .then((res) => {
        alert(res.data.message); // or console.log
      })
      .catch((err) => {
        alert('Connection failed');
        console.error(err);
      });
  }, []);

  return (
    <div className="text-center mt-20 text-xl">
      Testing connection... check alert or console log.
    </div>
  );
};

export default TestConnection;
