import React from 'react';
import './Values.css';

const Values = () => {
  return (
    <section id="values" className="values-section">
      <div className="container">
        <h2>Değerlerimiz</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>İnovasyon</h3>
            <p>
              Sürekli gelişim ve yenilikçi düşünce yapımızla, sektörde öncü 
              çözümler üretmeyi hedefliyoruz. Teknolojinin gücünü kullanarak 
              müşterilerimize değer katmayı amaçlıyoruz.
            </p>
          </div>
          <div className="value-card">
            <h3>Müşteri Odaklılık</h3>
            <p>
              Müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi çözümleri 
              sunmak en öncelikli hedefimizdir. Her kararda müşteri memnuniyetini 
              göz önünde bulunduruyoruz.
            </p>
          </div>
          <div className="value-card">
            <h3>Güvenilirlik</h3>
            <p>
              Sözlerimizin arkasında durmak ve verdiğimiz taahhütleri yerine 
              getirmek temel prensiplerimizden biridir. Güven, uzun vadeli 
              iş ilişkilerinin temelidir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;