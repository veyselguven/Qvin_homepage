import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Hakkımızda</h2>
        <div className="about-content">
          <p>
            Şirketimiz, teknoloji ve inovasyon alanında öncü bir kuruluş olarak, 
            müşterilerimize en kaliteli çözümleri sunmayı hedeflemektedir. Yılların 
            verdiği deneyim ve uzman ekibimizle, sektörde önemli başarılara imza atmış 
            bulunmaktayız. Misyonumuz, modern teknolojileri kullanarak işletmelerin 
            dijital dönüşümlerine katkıda bulunmak ve sürdürülebilir büyümelerine 
            destek olmaktır.
          </p>
          <p>
            Ekibimiz, farklı disiplinlerden gelen yetenekli profesyonellerden 
            oluşmaktadır. Her bir üyemiz, kendi uzmanlık alanında derin bilgi ve 
            deneyime sahiptir. Birlikte çalışma kültürümüz, açık iletişim ve karşılıklı 
            saygı temellerine dayanmaktadır. Müşteri memnuniyetini ön planda tutarak, 
            her projede mükemmelliği hedefliyoruz ve sürekli kendimizi geliştirmeye 
            devam ediyoruz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;