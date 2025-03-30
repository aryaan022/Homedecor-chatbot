import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './DecorAdvice.css';

interface DecorAdviceProps {
    query: string;
}

const DecorAdvice: React.FC<DecorAdviceProps> = ({ query }) => {
    const [advice, setAdvice] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const generateAdvice = async () => {
            if (!query) return;

            setLoading(true);
            setError('');

            try {
                const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY || '');
                const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

                const prompt = `As a home decor expert, provide concise advice for creating a ${query}. 
                Format your response as a single, well-structured paragraph that includes:
                1. Key tips for achieving the style
                2. Important considerations
                3. Common mistakes to avoid
                
                Use bullet points (•) for specific actionable items, but keep the overall flow natural and conversational.
                Keep the response concise and focused on the most important points.`;

                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                setAdvice(text);
            } catch (err) {
                setError('Failed to generate advice. Please try again.');
                console.error('Error generating advice:', err);
            } finally {
                setLoading(false);
            }
        };

        generateAdvice();
    }, [query]);

    return (
        <div className="decor-advice-container">
            <h2>Decor Advice</h2>
            {loading && <div className="loading">Generating advice...</div>}
            {error && <div className="error">{error}</div>}
            {advice && (
                <div className="advice-content">
                    <div className="advice-section">
                        {advice.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DecorAdvice; 