import React from 'react';
import { motion } from 'framer-motion';

interface ProductVisualizationProps {
  product: string;
  config: {
    width: string;
    height: string;
    color: string;
    material: string;
    extras: string[];
  };
}

const colorMap: { [key: string]: string } = {
  'Wit': '#FFFFFF',
  'Zwart': '#000000',
  'Antraciet': '#37474F',
  'Bruin': '#795548',
  'Beige': '#F5F5DC',
  'Grijs': '#9E9E9E',
  'Navy': '#000080'
};

const materialOpacity: { [key: string]: number } = {
  'Premium Gaas': 0.1,
  'Extra Sterk Gaas': 0.15,
  'Pollengaas': 0.2,
  'Standaard Gaas': 0.1,
  'Verduisterend': 0.9,
  'Lichtdoorlatend': 0.3,
  'Semi-transparant': 0.5,
  'Screen': 0.4,
  'Screen 5%': 0.05,
  'Screen 10%': 0.1,
  'Screen 15%': 0.15
};

export default function ProductVisualization({ product, config }: ProductVisualizationProps) {
  const width = parseInt(config.width) || 100;
  const height = parseInt(config.height) || 150;
  const aspectRatio = Math.min(width / height, 2); // Limit aspect ratio to prevent extreme shapes
  const visualWidth = 300 * aspectRatio;
  const visualHeight = 300;

  const renderProduct = () => {
    switch (product) {
      case 'Flexibele Horren':
      case 'Vaste Horren':
        return (
          <div className="relative w-full h-full">
            {/* Frame */}
            <div className="absolute inset-0 border-8" style={{ borderColor: colorMap[config.color] || '#000000' }} />
            {/* Mesh */}
            <div 
              className="absolute inset-0 bg-black"
              style={{ 
                opacity: materialOpacity[config.material] || 0.1,
                backgroundImage: 'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 4px)'
              }}
            />
            {/* Cat Door if selected */}
            {config.extras.includes('Kattenluik') && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-20 border-4 rounded-t-lg" style={{ borderColor: colorMap[config.color] || '#000000' }} />
            )}
          </div>
        );

      case 'Plissé Gordijnen':
        return (
          <div className="relative w-full h-full">
            {/* Frame */}
            <div className="absolute inset-0 border-4" style={{ borderColor: colorMap[config.color] || '#000000' }}>
              {/* Pleated texture */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full"
                    style={{
                      height: '10px',
                      top: `${i * 10}px`,
                      backgroundColor: colorMap[config.color] || '#000000',
                      opacity: materialOpacity[config.material] || 0.5,
                      transform: i % 2 === 0 ? 'skewY(30deg)' : 'skewY(-30deg)'
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Rail */}
            {config.extras.includes('Geleiderail') && (
              <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
            )}
          </div>
        );

      case 'Rolgordijnen':
        return (
          <div className="relative w-full h-full">
            {/* Cassette */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-300" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
            {/* Fabric */}
            <div 
              className="absolute left-0 right-0 top-8 bottom-0"
              style={{ 
                backgroundColor: colorMap[config.color] || '#000000',
                opacity: materialOpacity[config.material] || 0.5
              }}
            />
            {/* Side guides if selected */}
            {config.extras.includes('Zijgeleiding') && (
              <>
                <div className="absolute top-8 bottom-0 left-0 w-1" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
                <div className="absolute top-8 bottom-0 right-0 w-1" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
              </>
            )}
          </div>
        );

      case 'Screens':
        return (
          <div className="relative w-full h-full">
            {/* Frame */}
            <div className="absolute inset-0 border-4" style={{ borderColor: colorMap[config.color] || '#000000' }} />
            {/* Screen material */}
            <div 
              className="absolute inset-0"
              style={{ 
                backgroundColor: colorMap[config.color] || '#000000',
                opacity: materialOpacity[config.material] || 0.4,
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
              }}
            />
            {/* Wind-resistant system if selected */}
            {config.extras.includes('Windvast Systeem') && (
              <>
                <div className="absolute top-0 bottom-0 left-2 w-1" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
                <div className="absolute top-0 bottom-0 right-2 w-1" style={{ backgroundColor: colorMap[config.color] || '#000000' }} />
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold mb-4">Visualisatie</h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg shadow-lg p-4"
        style={{
          width: `${visualWidth}px`,
          height: `${visualHeight}px`
        }}
      >
        <div className="absolute inset-4 bg-gray-50">
          {renderProduct()}
        </div>
        
        {/* Dimensions */}
        <div className="absolute -top-8 left-0 right-0 text-center text-sm text-gray-600">
          Breedte: {config.width || 0}cm
        </div>
        <div className="absolute -left-8 top-0 bottom-0 flex items-center">
          <div className="transform -rotate-90 text-sm text-gray-600 whitespace-nowrap">
            Hoogte: {config.height || 0}cm
          </div>
        </div>
      </motion.div>
    </div>
  );
}