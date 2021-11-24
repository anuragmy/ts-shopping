import { Grid, Container } from "@material-ui/core";
import { useQuery } from "react-query";

export type Products = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
};

const getProducts = async (): Promise<Products[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data } = useQuery<Products[]>("products", getProducts);
  console.log(data);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div>this is react with ts</div>
        </Grid>
        <Grid item xs={6}>
          <div>this is react with ts</div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
