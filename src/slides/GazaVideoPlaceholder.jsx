import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import { Play } from 'lucide-react';

export default function GazaVideoPlaceholder() {
    return (
        <Slide>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <div style={{
                    width: '95%',
                    maxWidth: '1400px',
                    aspectRatio: '16/9',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    marginBottom: 'var(--space-lg)'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Qfpyj1AEd_0?si=30Ljy2drVgDxgIo1&rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3"
                        title="Gaza Resilience Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>
                    Gaza Resilience
                </h2>
            </div>
        </Slide>
    );
}
