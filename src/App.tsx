import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Sử dụng fetch để gọi API
    fetch('http://hieplxse160641-001-site1.ftempurl.com/api/TestController/test')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Lưu dữ liệu API vào state
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Lưu lỗi nếu có
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Hiển thị dữ liệu từ API */}
    </div>
  );
}

export default App;
