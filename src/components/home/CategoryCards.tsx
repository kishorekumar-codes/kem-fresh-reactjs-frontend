import { CATEGORY_ITEMS } from "../../data/categoryData";
import Container from "../common/Container";
import CategoryCard from "./CategoryCard";

export default function CategoryCards() {
  return (
    <section id="categories" className="categories" aria-label="Explore KEM FRESH">
      <Container>
        <div className="categories__panel">
          <div className="categories__grid">
            {CATEGORY_ITEMS.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
