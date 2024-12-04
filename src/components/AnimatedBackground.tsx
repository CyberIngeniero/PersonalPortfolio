import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  life: number;
  maxLife: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      const nodes: Node[] = [];
      // Increased density significantly by reducing the divisor
      const numNodes = Math.floor((canvas.width * canvas.height) / 4000);

      for (let i = 0; i < numNodes; i++) {
        nodes.push(createNode(canvas.width, canvas.height));
      }

      nodesRef.current = nodes;
    };

    const createNode = (width: number, height: number): Node => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3, // Reduced speed for smoother movement
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      life: 1,
      maxLife: 1
    });

    const createCollisionNode = (x: number, y: number): Node => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 1.5 + 0.5,
      life: 1,
      maxLife: Math.random() * 0.8 + 0.5 // Increased lifetime
    });

    const drawNodes = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;

      // Update and draw nodes
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Mouse repulsion
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) { // Increased repulsion radius
          const angle = Math.atan2(dy, dx);
          const force = (120 - distance) * 0.015;
          node.vx -= Math.cos(angle) * force;
          node.vy -= Math.sin(angle) * force;
        }

        // Boundary check with bounce effect
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Check collisions and create new nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 40) { // Increased collision threshold
            // Create new nodes at collision point with higher probability
            if (Math.random() < 0.15 && nodes.length < 500) { // Increased max nodes
              nodes.push(createCollisionNode(
                (node.x + other.x) / 2,
                (node.y + other.y) / 2
              ));
            }

            // Draw connection with increased opacity
            const alpha = Math.max(0, 1 - distance / 40);
            ctx.beginPath();
            ctx.strokeStyle = document.documentElement.classList.contains('dark')
              ? `rgba(168, 85, 247, ${alpha * 0.4})`
              : `rgba(168, 85, 247, ${alpha * 0.3})`;
            ctx.lineWidth = alpha * 1.5; // Thicker lines
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Update life and remove dead nodes
        if (node.maxLife < 1) {
          node.life -= 0.008; // Slower fade out
          if (node.life <= 0) {
            nodes.splice(i, 1);
            continue;
          }
        }

        // Draw node with increased opacity
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const alpha = node.life;
        ctx.fillStyle = document.documentElement.classList.contains('dark')
          ? `rgba(168, 85, 247, ${alpha * 0.9})`
          : `rgba(168, 85, 247, ${alpha * 0.7})`;
        ctx.fill();

        // Apply gentle friction
        node.vx *= 0.995;
        node.vy *= 0.995;
      }

      requestRef.current = requestAnimationFrame(drawNodes);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    requestRef.current = requestAnimationFrame(drawNodes);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-transparent to-white/90 dark:from-slate-900/90 dark:via-transparent dark:to-slate-900/90 transition-colors duration-300" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}