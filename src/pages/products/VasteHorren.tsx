import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function VasteHorrenPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Vaste Horren"
        description="De klassieke oplossing voor insectenwering. Deze horren combineren functionaliteit met stijl en zijn perfect voor elk raam."
        image="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
        features={[
          'Extra sterk gaas',
          'UV-bestendig',
          'Eenvoudig te reinigen',
          'Diverse kleuren beschikbaar',
          'Pollengaas mogelijk',
          'Op maat gemaakt'
        ]}
      />
      <ProductDetails
        specifications={[
          {
            title: "Technische Specificaties",
            items: [
              "Maximale breedte: 200 cm",
              "Maximale hoogte: 250 cm",
              "Profieldikte: 15 mm",
              "Diverse gaastypes beschikbaar",
              "Aluminium profielen"
            ]
          },
          {
            title: "Materialen",
            items: [
              "Standaard gaas",
              "Extra sterk gaas",
              "Pollengaas beschikbaar",
              "UV-bestendig materiaal",
              "Geanodiseerde profielen"
            ]
          },
          {
            title: "Montage",
            items: [
              "In de dag montage",
              "Op de dag montage",
              "Schroefmontage",
              "Inclusief montagebeugels",
              "Professionele installatie"
            ]
          }
        ]}
        applications={[
          {
            title: "Slaapkamerramen",
            description: "Perfect voor ramen die niet frequent geopend worden.",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
          },
          {
            title: "Badkamerramen",
            description: "Vochtbestendige oplossing voor sanitaire ruimtes.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Kantelramen",
            description: "Speciaal ontworpen voor naar binnen kantelende ramen.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Permanente insectenwering",
          "Onderhoudsarm",
          "Duurzame constructie",
          "Optimale ventilatie",
          "UV-bestendig",
          "Stijlvol design",
          "Eenvoudig te reinigen",
          "Lange levensduur"
        ]}
        materials={[
          {
            name: "Standaard Gaas",
            description: "Hoogwaardig gaas voor algemeen gebruik.",
            features: [
              "Optimale luchtdoorlatendheid",
              "UV-bestendig",
              "Duurzaam materiaal",
              "Eenvoudig te reinigen"
            ]
          },
          {
            name: "Pollengaas",
            description: "Speciaal gaas dat pollen tegenhoudt.",
            features: [
              "Filtert pollen",
              "Extra fijnmazig",
              "Allergie-vriendelijk",
              "Behoudt ventilatie"
            ]
          }
        ]}
        testimonial={{
          quote: "De vaste horren zijn precies wat we zochten. Ze zien er netjes uit en doen perfect hun werk!",
          author: "Peter de Boer",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}