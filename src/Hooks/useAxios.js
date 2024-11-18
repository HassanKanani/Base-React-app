import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNotification } from './NotificationProvider';
const useAxios = ({ url, method = 'GET', headers = {}, body = null }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showNotification } = useNotification();

  const handleSuccess = (Message) => {
    showNotification(Message ?? 'Data fetched successfully!', 'success');
  };

  const handleError = (Message) => {
    showNotification(Message ?? 'Failed to fetch data!', 'error');
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          url,
          method,
          headers,
          data: body,
        });
        setData(response.data);
        handleSuccess()
      } catch (err) {
        handleError(err)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, JSON.stringify(headers), JSON.stringify(body)]);



  return { data, loading };
};

export default useAxios;
