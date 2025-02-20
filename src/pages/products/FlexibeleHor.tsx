import React from 'react';
import Navbar from '../../components/Navbar';
import ProductHero from '../../components/ProductHero';
import ProductDetails from '../../components/ProductDetails';
import Footer from '../../components/Footer';

export default function FlexibeleHorPage() {
  return (
    <>
      <Navbar />
      <ProductHero
        title="Flexibele Horren"
        description="De perfecte oplossing voor ramen die vaak open en dicht gaan. Onze flexibele horren zijn gemaakt van hoogwaardig materiaal dat bestand is tegen intensief gebruik."
        image="https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80"
        features={[
          'Soepele bediening',
          'Extra sterk gaas',
          'UV-bestendig',
          'Windvast systeem',
          'Kattenluik mogelijk',
          'Op maat gemaakt'
        ]}
      />
      <ProductDetails
        specifications={[
          {
            title: "Technische Specificaties",
            items: [
              "Maximale breedte: 200 cm",
              "Maximale hoogte: 260 cm",
              "Profieldikte: 25 mm",
              "Windvast systeem beschikbaar",
              "Diverse kleuren profielen"
            ]
          },
          {
            title: "Bediening",
            items: [
              "Soepel rollend systeem",
              "Links- of rechtsbediening",
              "Vergrendeling in gesloten positie",
              "Automatische terugvering",
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
              "Professionele montage mogelijk"
            ]
          }
        ]}
        applications={[
          {
            title: "Draairamen",
            description: "Perfect voor ramen die regelmatig open en dicht gaan, met behoud van ventilatie.",
            image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&q=80"
          },
          {
            title: "Openslaande Deuren",
            description: "Ideaal voor balkon- en terrasdeuren die frequent gebruikt worden.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
          },
          {
            title: "Dakramen",
            description: "Speciaal ontworpen voor dakramen met optimale ventilatie.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
          }
        ]}
        benefits={[
          "Eenvoudig te openen en te sluiten",
          "Blijft perfect op zijn plaats",
          "Duurzaam en onderhoudsvrij",
          "UV-bestendig materiaal",
          "Optimale ventilatie",
          "Insectenwerend het hele jaar door",
          "Kattenluik mogelijk",
          "Windvast systeem beschikbaar"
        ]}
        materials={[
          {
            name: "Premium Gaas",
            description: "Hoogwaardig gaas dat optimale ventilatie combineert met duurzaamheid.",
            features: [
              "Extra sterk en duurzaam",
              "UV-bestendig",
              "Optimale luchtdoorlatendheid",
              "Eenvoudig te reinigen"
            ]
          },
          {
            name: "Pollengaas",
            description: "Speciaal ontwikkeld gaas dat pollen tegenhoudt voor mensen met hooikoorts.",
            features: [
              "Filtert pollen uit de lucht",
              "Extra fijnmazig",
              "Vermindert allergische reacties",
              "Behoudt goede ventilatie"
            ]
          }
        ]}
        testimonial={{
          quote: "De flexibele hor is perfect voor onze openslaande deuren. Werkt soepel en houdt alle insecten buiten!",
          author: "Marco van der Linden",
          rating: 5
        }}
      />
      <Footer />
    </>
  );
}