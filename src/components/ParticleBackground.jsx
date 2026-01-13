import React, { useEffect, useRef } from 'react';

/**
 * ParticleBackground Component
 * 
 * Interactive canvas-based particle network with:
 * - Mouse interaction (attract/repel)
 * - Connection lines between nearby particles
 * - Theme-aware colors
 * - Performance optimized with requestAnimationFrame
 */

const ParticleBackground = ({
    particleCount = 50,
    connectionDistance = 150,
    mouseRadius = 150,
    mouseRepel = true,
    theme = 'light',
}) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Set canvas size
        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Keep in bounds
                this.x = Math.max(0, Math.min(width, this.x));
                this.y = Math.max(0, Math.min(height, this.y));

                // Mouse interaction
                if (mouseRef.current.x !== null) {
                    const dx = mouseRef.current.x - this.x;
                    const dy = mouseRef.current.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseRadius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseRadius - distance) / mouseRadius;

                        if (mouseRepel) {
                            this.x -= forceDirectionX * force * 3;
                            this.y -= forceDirectionY * force * 3;
                        } else {
                            this.x += forceDirectionX * force * 3;
                            this.y += forceDirectionY * force * 3;
                        }
                    }
                }
            }

            draw(ctx, color) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }

        // Initialize particles
        particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Color based on theme
        const getColors = () => {
            if (theme === 'dark') {
                return {
                    particle: 'rgba(0, 210, 170, 0.3)',
                    connection: 'rgba(56, 189, 248, 0.2)',
                };
            }
            return {
                particle: 'rgba(0, 110, 178, 0.3)',
                connection: 'rgba(0, 210, 170, 0.2)',
            };
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            const colors = getColors();

            // Update and draw particles
            particlesRef.current.forEach((particle) => {
                particle.update();
                particle.draw(ctx, colors.particle);
            });

            // Draw connections
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const p1 = particlesRef.current[i];
                    const p2 = particlesRef.current[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.5;
                        ctx.beginPath();
                        ctx.strokeStyle = colors.connection.replace('0.2', opacity.toFixed(2));
                        ctx.lineWidth = 1;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, connectionDistance, mouseRadius, mouseRepel, theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ParticleBackground;
