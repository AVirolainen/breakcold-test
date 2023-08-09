import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MessyPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      //fake an api request and wait 5 second
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', color: 'black', backgroundColor: 'white', padding: '20px' }}>
      <h1 style={{ fontSize: '30px', color: 'blue' }}>Page Title</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data?.map((item, i) => (
          <div key={i} style={{ margin: '10px 0', padding: '10px', border: '1px solid black' }}>
            <h2 style={{ fontSize: '25px' }}>{item.title}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => router.push(`/detail/${item.id}`)}
              style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              View Detail
            </button>
          </div>
        ))
      )}
    </div>
  );
}
