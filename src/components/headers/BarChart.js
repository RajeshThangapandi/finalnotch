import React, { useEffect, useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Box, Typography, Container } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

// Sample data for turnover
const data = [
  { year: '2021-2022', turnover: 100 },
  { year: '2022-2023', turnover: 259 },
  { year: '2023-2024', turnover: 455 },
  { year: '2024-2025', turnover: 600 },
];

// Custom label component
const CustomLabel = ({ x, y, value, width }) => {
  const isDesktop = useMediaQuery('(min-width:1024px)'); // Check if it's a desktop screen
  const labelX = x + width / 2; // Center the label horizontally within the bar
  const labelY = y + 20; // Adjust the vertical position inside the bar
  return (
    <text
      x={labelX}
      y={labelY}
      fill="white"
      fontSize={isDesktop ? "20px" : "18px"} // Smaller font size on desktop
      fontWeight="bold"
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const CustomBarChart = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Media query for small screens
  const isMediumScreen = useMediaQuery('(max-width:960px)'); // Media query for medium screens

  const [animatedData, setAnimatedData] = useState(
    data.map(item => ({ year: item.year, turnover: 0 }))
  );

  const chartRef = useRef(null); // Create a ref for the component

  const startAnimation = () => {
    const animateData = (index) => {
      if (index < data.length) {
        const targetValue = data[index].turnover; // Target value for the current year
        let currentValue = 0; // Start from 0

        const incrementValue = () => {
          if (currentValue < targetValue) {
            currentValue += Math.ceil(targetValue / 20); // Increase speed by reducing this value
            setAnimatedData(prev => {
              const updatedData = [...prev];
              updatedData[index] = {
                year: data[index].year,
                turnover: Math.min(currentValue, targetValue), // Ensure we don't exceed the target
              };
              return updatedData;
            });
            setTimeout(incrementValue, 10); // Faster animation speed
          } else {
            // Once the current bar is fully filled, delay before the next one starts
            setTimeout(() => animateData(index + 1), 500); // Faster delay before starting the next animation
          }
        };

        // Start incrementing for the current bar
        incrementValue();
      }
    };

    // Start animation from the first index
    animateData(0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAnimation(); // Start animation when the component enters the viewport
          observer.disconnect(); // Stop observing after animation starts
        }
      });
    });

    if (chartRef.current) {
      observer.observe(chartRef.current); // Observe the component
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <Container ref={chartRef} maxWidth="md"> {/* Attach the ref here */}
      <Box sx={{ textAlign: 'center', my: 4, pt: 4, position: 'relative' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '24px', sm: '28px', md: '32px' }, // Responsive font size in px
          }}
        >
          Project Turnover
        </Typography>
        
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={animatedData}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            barCategoryGap="10%"
          >
           <XAxis
  dataKey="year"
  tick={{
    fontSize: isSmallScreen ? '12px' : isMediumScreen ? '16px' : '20px', // Responsive font size in px
  }}
/>

            <Bar 
              dataKey="turnover" 
              fill="#005daa"
              radius={[10, 10, 0, 0]} // Rounded corners
              animationDuration={0} // Disable default animation
              isAnimationActive={false} // Disable default animation
            >
              <LabelList 
                dataKey="turnover" 
                content={({ x, y, value, width }) => (
                  <CustomLabel x={x} y={y} value={value} width={width} />
                )}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            position: 'absolute',
            bottom: 10, // Position at the bottom
            left: '50%', // Center horizontally
            transform: 'translateX(-50%)', // Adjust for centering
            color: "#005daa",
            fontSize: { xs: '16px', sm: '20px', md: '24px' }, // Responsive font size in px
          }}
        >
          Turnover (in Crores)
        </Typography>
      </Box>
    </Container>
  );
};

export default CustomBarChart;
