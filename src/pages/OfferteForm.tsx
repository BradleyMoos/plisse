import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductVisualization from '../components/ProductVisualization';

// Product configuration options
const productOptions = {
  'Flexibele Horren': {
    colors: ['Wit', 'Zwart', 'Antraciet', 'Bruin'],
    materials: ['Premium Gaas', 'Extra Sterk Gaas', 'Pollengaas'],
    extras: ['Kattenluik', 'Windvast Profiel', 'Versterkte Hoeken']
  },
  'Vaste Horren': {
    colors: ['Wit', 'Zwart', 'Antraciet', 'Bruin'],
    materials: ['Standaard Gaas', 'Extra Sterk Gaas', 'Pollengaas'],
    extras: ['Windvast Profiel', 'Versterkte Hoeken']
  },
  'Plissé Gordijnen': {
    colors: ['Wit', 'Beige', 'Grijs', 'Antraciet', 'Navy'],
    materials: ['Verduisterend', 'Lichtdoorlatend', 'Semi-transparant'],
    extras: ['Elektrische Bediening', 'Kindveilig Koord', 'Geleiderail']
  },
  'Rolgordijnen': {
    colors: ['Wit', 'Beige', 'Grijs', 'Antraciet', 'Navy'],
    materials: ['Verduisterend', 'Lichtdoorlatend', 'Screen'],
    extras: ['Elektrische Bediening', 'Cassette', 'Zijgeleiding']
  },
  'Screens': {
    colors: ['Wit', 'Zwart', 'Antraciet'],
    materials: ['Screen 5%', 'Screen 10%', 'Screen 15%'],
    extras: ['Elektrische Bediening', 'Windvast Systeem', 'Insectenwerend']
  }
};

interface ProductConfig {
  width: string;
  height: string;
  quantity: number;
  color: string;
  material: string;
  extras: string[];
}

export default function OfferteForm() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [showConfig, setShowConfig] = useState(false);
  const [products, setProducts] = useState<{ [key: string]: ProductConfig }>({});
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const addProduct = (product: string) => {
    setProducts(prev => ({
      ...prev,
      [product]: {
        width: '',
        height: '',
        quantity: 1,
        color: productOptions[product].colors[0],
        material: productOptions[product].materials[0],
        extras: []
      }
    }));
    setSelectedProduct(product);
    setShowConfig(true);
  };

  const updateProduct = (product: string, field: string, value: any) => {
    setProducts(prev => ({
      ...prev,
      [product]: {
        ...prev[product],
        [field]: value
      }
    }));
  };

  const toggleExtra = (product: string, extra: string) => {
    setProducts(prev => {
      const currentExtras = prev[product].extras;
      const newExtras = currentExtras.includes(extra)
        ? currentExtras.filter(e => e !== extra)
        : [...currentExtras, extra];
      
      return {
        ...prev,
        [product]: {
          ...prev[product],
          extras: newExtras
        }
      };
    });
  };

  const removeProduct = (product: string) => {
    setProducts(prev => {
      const newProducts = { ...prev };
      delete newProducts[product];
      return newProducts;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h1 className="text-3xl font-bold mb-8">Stel je offerte samen</h1>
          
          {/* Product Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Kies je producten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(productOptions).map(product => (
                <motion.div
                  key={product}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                    products[product] ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => !products[product] && addProduct(product)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{product}</span>
                    {products[product] ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeProduct(product);
                        }}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Configuration */}
          {Object.entries(products).map(([product, config]) => (
            <motion.div
              key={product}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{product} Configuratie</h3>
                <button
                  onClick={() => setShowConfig(!showConfig)}
                  className="text-gray-500"
                >
                  {showConfig ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Dimensions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Breedte (cm)
                      </label>
                      <input
                        type="number"
                        value={config.width}
                        onChange={(e) => updateProduct(product, 'width', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hoogte (cm)
                      </label>
                      <input
                        type="number"
                        value={config.height}
                        onChange={(e) => updateProduct(product, 'height', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="0"
                        min="0"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Aantal
                    </label>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateProduct(product, 'quantity', Math.max(1, config.quantity - 1))}
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        value={config.quantity}
                        onChange={(e) => updateProduct(product, 'quantity', Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-20 text-center px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        min="1"
                      />
                      <button
                        onClick={() => updateProduct(product, 'quantity', config.quantity + 1)}
                        className="p-2 rounded-md border border-gray-300 hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kleur
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {productOptions[product].colors.map(color => (
                        <button
                          key={color}
                          onClick={() => updateProduct(product, 'color', color)}
                          className={`px-4 py-2 rounded-md text-sm ${
                            config.color === color
                              ? 'bg-primary text-white'
                              : 'bg-white border border-gray-300 hover:border-primary'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Materiaal
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {productOptions[product].materials.map(material => (
                        <button
                          key={material}
                          onClick={() => updateProduct(product, 'material', material)}
                          className={`px-4 py-2 rounded-md text-sm ${
                            config.material === material
                              ? 'bg-primary text-white'
                              : 'bg-white border border-gray-300 hover:border-primary'
                          }`}
                        >
                          {material}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Extra Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Extra Opties
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {productOptions[product].extras.map(extra => (
                        <button
                          key={extra}
                          onClick={() => toggleExtra(product, extra)}
                          className={`px-4 py-2 rounded-md text-sm ${
                            config.extras.includes(extra)
                              ? 'bg-primary text-white'
                              : 'bg-white border border-gray-300 hover:border-primary'
                          }`}
                        >
                          {extra}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Visualization */}
                <div className="flex justify-center items-start pt-4">
                  <ProductVisualization product={product} config={config} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contactgegevens</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Naam
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                E-mailadres
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefoonnummer
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Extra opmerkingen
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
            >
              Verstuur aanvraag
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}