import Navbar from './containers/Navbar';
import { ThemeProvider } from 'styled-components';
import { Container } from './containers/Container/Container';
import GlobalStyles from './Global.styles';
import HeroContainer from './containers/HeroContainer/HeroContainer';
import Carousel from './containers/Carousel/Carousel';
import CarouselItem from './components/CarouselItem/CarouselItem';
import generalTsos from './images/general-tsos.jpg';
import loMein from './images/lomein.jpg';
import orangeChicken from './images/orange-chicken.jpg';
import SliderElement from './components/SliderElement/SliderElement';
import ItemCard from './components/ItemCard/ItemCard';
import Footer from './containers/Footer/Footer';
import MenuContainer from './containers/MenuContainer/MenuContainer';

const theme = {
  colors: {
    primary: '#f3c43e',
    redDark: '#9F0102',
    redLight: '#ff0114',
    tealDark: '#068b76',
    tealLight: '#52afa4',
    yellowDark: '#d7aa2e',
    yellowLight: '#f3c43e',
    text: '#333',
    white: '#fff',
    black: '#333',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Navbar />
      <HeroContainer />
      <Carousel>
        <CarouselItem>
          <SliderElement imageSrc={generalTsos} title="General Tsos' Chicken" />
        </CarouselItem>
        <CarouselItem>
          <SliderElement imageSrc={orangeChicken} title='Orange Chicken' />
        </CarouselItem>
        <CarouselItem>
          <SliderElement imageSrc={loMein} title='Chicken Lo Mein' />
        </CarouselItem>
      </Carousel>
      <Container>
        <h2>Chef's Specials</h2>
        <ItemCard
          image={orangeChicken}
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex a tempora explicabo quos dicta? Rem est consequatur temporibus! Cumque.'
          title='Orange Chicken'
          spice='*'
          price='7.99'
        />
        <ItemCard
          image={generalTsos}
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex a tempora explicabo quos dicta? Rem est consequatur temporibus! Cumque.'
          title={`General Tso's Chicken`}
          spice='***'
          price='8.99'
        />
        <ItemCard
          image={loMein}
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ex a tempora explicabo quos dicta? Rem est consequatur temporibus! Cumque.'
          title={`Chicken Lo Mein`}
          spice='*'
          price='6.99'
        />
      </Container>
      <Container>
        <MenuContainer />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
