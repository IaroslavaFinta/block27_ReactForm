import { useState } from 'react';

export default function Authenticate({ token }) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const APIAuthenticate = 'https://fsa-jwt-practice.herokuapp.com/authenticate';

    async function handleClick() {
        try {
            const response = await fetch(APIAuthenticate,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
            const result = await response.json();
            setSuccessMessage(result.message);
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <h2>Authenticate</h2>
            {/* conditionally render*/}
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
            <button onClick={handleClick}
            >Authenticate Token</button>
        </>
    )
}