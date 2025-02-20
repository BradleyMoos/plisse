import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function PlisseDeurenPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Plissé Deuren"
        description="De ideale oplossing voor schuifpuien en terrasdeuren. Onze plissé deuren combineren gebruiksgemak met een stijlvolle uitstraling."
        image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80"
        features={[
          'Soepele bediening',
          'Magneetstrip sluiting',
          'Diverse breedtes mogelijk',
          'Kindveilig',
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
              "Maximale hoogte: 260 cm",
              "Profieldikte: 22 mm",
              "Magneetstrip sluiting",
              "Diverse kleuren profielen"
            ]
          },
          {
            title: "Bediening",
            items: [
              "Soepel plissé systeem",
              "Magnetische sluiting",
              "Vergrendeling mogelijk",
              "Tweeweg schuifsysteem",
              "Kindveilige bediening"
            ]
          },
          {
            title: "Montage",
            items: [
              "In de dag montage",
              "Op de dag montage",
              "Eenvoudige installatie",
              "Inclusief montagebeugels",
              "Professionele montage"
            ]
          }
        ]}
        applications={[
          {
            title: "Schuifpuien",
            description: "Ideaal voor grote schuifpuien met frequent gebruik.",
            image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80"
          },
          {
            title: "Terrasdeuren",
            description: "Perfect voor openslaande deuren naar terras of tuin.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Franse Balkons",
            description: "Stijlvolle oplossing voor dubbele balkondeuren.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Eenvoudig te openen en sluiten",
          "Perfecte magnetische sluiting",
          "Duurzaam en onderhoudsvrij",
          "UV-bestendig materiaal",
          "Optimale ventilatie",
          "Insectenwerend",
          "Stijlvolle uitstraling",
          "Geschikt voor grote openingen"
        ]}
        materials={[
          {
            name: "Premium Gaas",
            description: "Hoogwaardig plissé gaas speciaal voor deuren.",
            features: [
              "Extra sterk en duurzaam",
              "UV-bestendig",
              "Optimale luchtdoorlatendheid",
              "Eenvoudig te reinigen"
            ]
          },
          {
            name: "Versterkt Systeem",
            description: "Speciaal ontwikkeld voor intensief gebruik.",
            features: [
              "Versterkte hoeken",
              "Robuuste geleiders",
              "Duurzame magneten",
              "Stabiel bij wind"
            ]
          }
        ]}
        testimonial={{
          quote: "De plissé deur voor onze schuifpui is perfect! Werkt soepel en ziet er prachtig uit.",
          author: "Familie van Dijk",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}