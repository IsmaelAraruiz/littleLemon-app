import React, { useEffect, useState } from 'react';

const DataFetcher = ({ url, isLocal = false, render }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isLocal) {

                    if (!Array.isArray(url) && typeof url !== 'object') {
                        throw new Error('Local data must be an array or a valid object');
                    }

                    // Simulates a fetch for local files

                    setData(url);
                } else {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    setData(result);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, isLocal]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return render(data);
};

export default DataFetcher;
