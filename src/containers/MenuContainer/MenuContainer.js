import ItemCard from '../../components/ItemCard/ItemCard';
import { menuItems } from '../../content/menu';
import { Container } from '../Container/Container';

const MenuContainer = () => {
  return (
    <div>
      <Container>
        <h3>Appetizers</h3>
        {menuItems.appetizers.map((item) => {
          return (
            <ItemCard
              image={item.img_src}
              title={item.title}
              spice={item.spice}
              price={item.price}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default MenuContainer;
