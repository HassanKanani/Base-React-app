import { useState, useEffect } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNotification } from './NotificationProvider';

const useAxios = ({ url, method = 'GET', headers = {}, body = null }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // برای کنترل نمایش نوتیفیکیشن
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
        setError(null);
        setOpen(true); // نمایش نوتیفیکیشن برای موفقیت
      } catch (err) {
        handleError(err)
        setError(err);
        setOpen(true); // نمایش نوتیفیکیشن برای خطا
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, JSON.stringify(headers), JSON.stringify(body)]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return { data, error, loading, open, handleClose };
};

export default useAxios;
