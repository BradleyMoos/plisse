import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function PlisseGordijnenPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Plissé Gordijnen"
        description="Elegante raamdecoratie die perfect aansluit bij elk interieur. Onze plissé gordijnen bieden niet alleen privacy maar ook uitstekende isolatie."
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
        features={[
          'Uitstekende isolatie',
          'Diverse transparanties',
          'Elektrische bediening mogelijk',
          'Kindveilige bediening',
          'Breed kleurenpalet',
          'Op maat gemaakt'
        ]}
      />
      <ProductDetails
        specifications={[
          {
            title: "Technische Specificaties",
            items: [
              "Maximale breedte: 300 cm",
              "Maximale hoogte: 400 cm",
              "Plooibreedte: 20 mm",
              "Diverse transparanties",
              "Top-down & bottom-up mogelijk"
            ]
          },
          {
            title: "Bediening",
            items: [
              "Koord- of kettingbediening",
              "Elektrische motor mogelijk",
              "Smart home integratie",
              "Kindveilige systemen",
              "Dag/nacht systeem"
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
            description: "Creëer de perfecte sfeer met elegante plissé gordijnen.",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
          },
          {
            title: "Slaapkamer",
            description: "Optimale verduistering voor een goede nachtrust.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Dakramen",
            description: "Speciale oplossingen voor schuine ramen en dakramen.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Uitstekende warmte-isolatie",
          "Effectieve lichtregeling",
          "Stijlvolle uitstraling",
          "Energie-efficiënt",
          "Eenvoudig te bedienen",
          "Perfecte privacy",
          "Minimaal ruimtebeslag",
          "Geschikt voor alle ramen"
        ]}
        materials={[
          {
            name: "Verduisterend",
            description: "100% lichtdicht materiaal voor optimale verduistering.",
            features: [
              "Volledig verduisterend",
              "Thermisch isolerend",
              "Geluiddempend",
              "Breed kleurenpalet"
            ]
          },
          {
            name: "Semi-transparant",
            description: "Elegante filtering van daglicht met behoud van uitzicht.",
            features: [
              "Filtert zonlicht",
              "Behoudt zicht naar buiten",
              "UV-werend",
              "Diverse transparanties"
            ]
          }
        ]}
        testimonial={{
          quote: "De plissé gordijnen geven onze woonkamer precies de uitstraling die we zochten. De isolerende werking is een geweldige bonus!",
          author: "Emma Jansen",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}