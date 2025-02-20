import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function RolgordinenPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Rolgordijnen"
        description="Ontdek onze collectie moderne rolgordijnen die functionaliteit combineren met stijl. Perfect voor elke ruimte in je huis."
        image="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80"
        features={[
          'Diverse transparanties beschikbaar',
          'Elektrische bediening mogelijk',
          'Kindveilige bediening',
          'UV-werend materiaal',
          'Eenvoudig te reinigen',
          'Op maat gemaakt'
        ]}
      />
      <ProductDetails
        specifications={[
          {
            title: "Technische Specificaties",
            items: [
              "Maximale breedte: 400 cm",
              "Maximale hoogte: 400 cm",
              "Cassette diameter: 45-95 mm",
              "Zijgeleiding mogelijk",
              "Elektrische of handbediening"
            ]
          },
          {
            title: "Bediening",
            items: [
              "Kettingbediening links of rechts",
              "Elektrische motor met afstandsbediening",
              "Smart home integratie mogelijk",
              "Kindveilige kettingspanner",
              "Automatische bediening mogelijk"
            ]
          },
          {
            title: "Montage",
            items: [
              "In de dag montage",
              "Op de dag montage",
              "Plafondmontage mogelijk",
              "Inclusief montagebeugels",
              "Professionele installatie"
            ]
          }
        ]}
        applications={[
          {
            title: "Woonkamer",
            description: "Perfect voor grote raampartijen waar privacy en lichtregeling belangrijk zijn.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Slaapkamer",
            description: "Verduisterende rolgordijnen voor optimale nachtrust.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          },
          {
            title: "Kantoor",
            description: "Voorkom schitteringen op beeldschermen met screen rolgordijnen.",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Optimale privacy en lichtregeling",
          "Eenvoudig te bedienen",
          "Minimalistisch design",
          "Uitstekende verduistering mogelijk",
          "Energie-efficiënt door isolerende werking",
          "Bescherming tegen UV-straling",
          "Onderhoudsarm en duurzaam",
          "Geschikt voor grote raampartijen"
        ]}
        materials={[
          {
            name: "Verduisterend Materiaal",
            description: "100% lichtdicht materiaal voor optimale verduistering.",
            features: [
              "Volledig verduisterend",
              "Thermisch isolerend",
              "Geluiddempend",
              "Verkrijgbaar in diverse kleuren"
            ]
          },
          {
            name: "Screen Materiaal",
            description: "Transparant materiaal dat zicht naar buiten mogelijk maakt.",
            features: [
              "Beperkt inkijk van buitenaf",
              "Laat daglicht gefilterd door",
              "Warmtewerend",
              "UV-bestendig"
            ]
          }
        ]}
        testimonial={{
          quote: "De rolgordijnen zijn perfect voor onze slaapkamer. Ze verduisteren uitstekend en zien er prachtig uit!",
          author: "Lisa van der Berg",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}