import React from 'react';
import './Home.css';
import Product from './Product';

const products = [
    {
      title: 'Кроссовки',
      price: 4000,
      rating: 5,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.demix.ru%2Fproduct%2F26102230299%2F&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABAJ'
    },
    {
      title: 'Кроссовки',
      price: 4000,
      rating: 5,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkg.ecb.bz%2Fkrossovki&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABAR'
    },
    {
      title: 'Кроссовки',
      price: 3500,
      rating: 4,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoftech.kg%2Fkrossovki-li-ning-arhq137-1&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABAZ'
    },
    {
      title: 'Кроссовки',
      price: 3000,
      rating: 3,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzenden.ru%2Fcatalog%2Fwomen%2Fsneakers%2F203-01wn-058st-polubotinki-dlya-aktivnogo-otdykha-zhenskie-i-kozha-tekstil-tekstil-bel-zenden-active.php&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABAh'
    },
    {
      title: 'Кроссовки',
      price: 3500,
      rating: 5,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lamoda.by%2Fp%2Frtlabf783601%2Fshoes-adidasoriginals-krossovki%2F&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABAp'
    },
    {
      title: 'Кроссовки',
      price: 2900,
      rating: 5,
      image:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsportmaster.com%2Fru-kz%2Fproduct%2F25659040299%2F&psig=AOvVaw0_Gi5RqFd3phtyvYINBvbM&ust=1671006191120000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiV-6WV9vsCFQAAAAAdAAAAABA5'
    }
  ];

const Home = () => (
  <div className="home-wrapper">
    <header className="home-banner-img" />
    <div className="shadow" />
    <div className="shop-name">КРОССЫ</div>
    <div className="home-row">
      {products.map((product, i) => (
        <Product
          id={i + 1}
          key={product.title + product.price}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
        />
      ))}
    </div>
  </div>
);

export default Home;