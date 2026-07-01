import { Container, Divider, Grid } from "@mui/material";
import MenuItem from "./MenuItem";
// parent
export default function DisplayMenuItems() {
  const menuItems = [
    {
      id: "1",
      name: "Classic Burger",
      category: "Mains",
      price: 8.5,
      description: "gluten-free bun available",
      isAvailable: true,
    },
    {
      id: "2",
      name: "Caesar Salad",
      category: "Starters",
      price: 6.0,
      description: "vegetarian",
      isAvailable: true,
    },
    {
      id: "4",
      name: "Matcha Latte",
      category: "Beverages",
      price: 4.5,
      description: "vegan, dairy-free",
      isAvailable: true,
    },
    {
      id: "5",
      name: "Classic Burger",
      category: "Mains",
      price: 8.5,
      description: "gluten-free bun available",
      isAvailable: true,
    },
    {
      id: "6",
      name: "Caesar Salad",
      category: "Starters",
      price: 6.0,
      description: "vegetarian",
      isAvailable: true,
    },
    {
      id: "7",
      name: "Matcha Latte",
      category: "Beverages",
      price: 4.5,
      description: "vegan, dairy-free",
      isAvailable: true,
    },
    {
      id: "8",
      name: "Classic Burger",
      category: "Mains",
      price: 8.5,
      description: "gluten-free bun available",
      isAvailable: true,
    },
    {
      id: "9",
      name: "Caesar Salad",
      category: "Starters",
      price: 6.0,
      description: "vegetarian",
      isAvailable: true,
    },
    {
      id: "10",
      name: "Matcha Latte",
      category: "Beverages",
      price: 4.5,
      description: "vegan, dairy-free",
      isAvailable: true,
    },
    {
      id: "11",
      name: "Classic Burger",
      category: "Mains",
      price: 8.5,
      description: "gluten-free bun available",
      isAvailable: true,
    },
    {
      id: "12",
      name: "Caesar Salad",
      category: "Starters",
      price: 6.0,
      description: "vegetarian",
      isAvailable: true,
    },
    {
      id: "13",
      name: "Matcha Latte",
      category: "Beverages",
      price: 4.5,
      description: "vegan, dairy-free",
      isAvailable: true,
    },
  ];
  localStorage.setItem("menu", JSON.stringify(menuItems));
  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ justifyContent: "center", p: 2 }}>
          {menuItems.map((item) => (
            <Grid size={{ sm: 12, md: 4, lg: 3 }} key={item.id}>
              <MenuItem
                title={item.name}
                price={item.price}
                description={item.description}
                category={item.category}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
