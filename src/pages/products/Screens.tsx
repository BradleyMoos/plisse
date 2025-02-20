import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function ScreensPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Screens"
        description="Effectieve zonwering voor optimaal comfort. Screens houden de warmte buiten terwijl je toch naar buiten kunt kijken."
        image="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80"
        features={[
          'Windvast systeem',
          'Verschillende transparanties',
          'Elektrische bediening',
          'Insectenwerend',
          'UV-werend',
          'Op maat gemaakt'
        ]}
      />
      <ProductDetails
        specifications={[
          {
            title: "Technische Specificaties",
            items: [
              "Maximale breedte: 600 cm",
              "Maximale hoogte: 400 cm",
              "Windvast tot 130 km/u",
              "Diverse transparanties: 5%, 10%, 15%",
              "Elektrische of handbediening"
            ]
          },
          {
            title: "Bediening",
            items: [
              "Somfy motor standaard",
              "Afstandsbediening mogelijk",
              "Smart home integratie",
              "Automatische zonnesensor",
              "Handmatige override"
            ]
          },
          {
            title: "Montage",
            items: [
              "Voor- of inbouwmontage",
              "Koppelbaar systeem",
              "Inclusief montagebeugels",
              "Professionele installatie",
              "Diverse kleuren profielen"
            ]
          }
        ]}
        applications={[
          {
            title: "Grote Raampartijen",
            description: "Ideaal voor grote glasoppervlakken waar zonwering essentieel is.",
            image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80"
          },
          {
            title: "Kantoorgebouwen",
            description: "Professionele zonwering voor optimaal werkcomfort.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Woonkamers",
            description: "Perfect voor het creëren van een comfortabel binnenklimaat.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Effectieve warmtewering",
          "Behoudt zicht naar buiten",
          "Windvast systeem",
          "Energiebesparend",
          "UV-bescherming",
          "Moderne uitstraling",
          "Insectenwerend",
          "Duurzaam materiaal"
        ]}
        materials={[
          {
            name: "Screen 5%",
            description: "Ultra-transparant screen materiaal voor optimaal zicht naar buiten.",
            features: [
              "Maximaal zicht naar buiten",
              "95% zonwering",
              "Minimale inkijk",
              "Ideaal voor kantoren"
            ]
          },
          {
            name: "Screen 10-15%",
            description: "Balans tussen privacy en transparantie voor woonruimtes.",
            features: [
              "Goede privacy",
              "85-90% zonwering",
              "Beperkt zicht naar buiten",
              "Perfect voor woonkamers"
            ]
          }
        ]}
        testimonial={{
          quote: "De screens zorgen voor een aangenaam klimaat in huis, zelfs tijdens de warmste zomerdagen. Een uitstekende investering!",
          author: "Familie de Vries",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}