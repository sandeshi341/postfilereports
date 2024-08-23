import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostFile() {
  const [htmlContent, setHtmlContent] = useState('');

  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:3002/Post_Profile_Report.html');
      setHtmlContent(resp.data);
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <iframe
        title="Post Profile Report"
        srcDoc={htmlContent}
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
}
