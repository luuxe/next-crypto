import axios from "axios";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.symbol}>
            <h1>
              {coin.name} - {coin.symbol}
            </h1>
            <img src={coin.icon} alt='icon'/>
          </div>
        );
      })}
    </div>
  );
};

//SSG Static Side Generation
    //requests data through browser
//SSR Server Side Render getServerSideProps
    //runs at request time
export const getStaticProps = async ({ params }) => {
    // const id = params.id
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList;
