import React, { useEffect, useState } from 'react';
import { HfInference } from '@huggingface/inference';
import './DecorImage.css';

interface DecorImageProps {
    query: string;
}

const DecorImage: React.FC<DecorImageProps> = ({ query }) => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const generateImage = async () => {
            if (!query) return;

            setLoading(true);
            setError('');

            try {
                const hf = new HfInference(process.env.REACT_APP_HUGGINGFACE_API_KEY);
                const response = await hf.textToImage({
                    model: 'stabilityai/stable-diffusion-xl-base-1.0',
                    inputs: `interior design of ${query}, high quality, 4k, realistic`,
                    parameters: {
                        negative_prompt: 'blurry, low quality, distorted',
                        num_inference_steps: 50,
                        guidance_scale: 7.5,
                    },
                });

                setImageUrl(URL.createObjectURL(response));
            } catch (err) {
                setError('Failed to generate image. Please try again.');
                console.error('Error generating image:', err);
            } finally {
                setLoading(false);
            }
        };

        generateImage();
    }, [query]);

    return (
        <div className="decor-image-container">
            {loading && <div className="loading">Generating image...</div>}
            {error && <div className="error">{error}</div>}
            {imageUrl && (
                <div className="image-wrapper">
                    <img src={imageUrl} alt={query} className="generated-image" />
                    <button
                        className="regenerate-button"
                        onClick={() => setImageUrl('')}
                    >
                        Generate Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default DecorImage; 